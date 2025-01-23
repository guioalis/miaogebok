interface GeminiMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface GeminiResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export class GeminiAI {
  private static readonly API_URL = 'https://gemini.chaohua.me/v1/chat/completions';
  private static readonly API_KEY = 'AIzaSyALTMZ9ylsQf8YtBd4qX08D7HVfcUAFyzY';
  
  private static readonly SYSTEM_PROMPT = `
你是一位资深的AI技术博客编辑和技术专家，特别擅长撰写和优化AI领域的技术文章。请按照以下要求优化文章：

1. 技术深度与专业性
   - 使用准确的技术术语和专业概念
   - 深入解释核心技术原理
   - 加入技术架构和实现细节
   - 提供性能指标和技术参数

2. 实践性与可操作性
   - 添加具体的应用场景和使用案例
   - 提供详细的操作步骤和最佳实践
   - 包含常见问题的解决方案
   - 分享实际使用技巧和优化建议

3. 时效性与前沿性
   - 融入最新的行业动态和技术趋势
   - 对比同类产品的优势和特点
   - 分析技术发展方向和未来展望
   - 引用最新的研究成果和数据

4. 结构优化
   - 清晰的层次结构和逻辑展开
   - 重点内容突出和强调
   - 适当的段落划分和过渡
   - 图文结合（如有图片资源）

5. 可读性与受众适配
   - 确保技术准确性的同时保持易读性
   - 专业术语配以通俗解释
   - 适当使用类比和示例
   - 针对不同技术水平读者的内容层次

6. SEO优化
   - 优化标题和关键词
   - 合理使用标题层级
   - 添加相关技术链接
   - 确保内容的完整性和独特性

请基于以上要求，对文章进行全面优化和提升，使其既专业严谨又通俗易懂，能够真正帮助读者理解和应用相关技术。
`;

  static async optimizeContent(content: string): Promise<string> {
    const messages: GeminiMessage[] = [
      {
        role: 'system',
        content: this.SYSTEM_PROMPT
      },
      {
        role: 'user',
        content: content
      }
    ];

    try {
      const response = await fetch(this.API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages,
          model: 'gemini-2.0-flash-exp',
          temperature: 0.7, // 添加一些创造性，但保持内容可控
          max_tokens: 4000, // 确保有足够的长度
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }

      const data: GeminiResponse = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Error optimizing content:', error);
      return content; // 如果API调用失败，返回原始内容
    }
  }

  // 添加一个专门用于生成摘要的方法
  static async generateExcerpt(content: string): Promise<string> {
    const excerptPrompt = `
请为以下技术文章生成一个引人入胜的摘要，要求：
1. 长度控制在100字以内
2. 突出文章的核心价值和创新点
3. 包含关键技术特性
4. 使用吸引人的表述方式
5. 确保专业性和准确性

文章内容如下：
${content}
`;

    return this.optimizeContent(excerptPrompt);
  }
} 