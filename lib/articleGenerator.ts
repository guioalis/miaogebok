import { GeminiAI } from './gemini';
import { marked } from 'marked';

export class ArticleGenerator {
  static async generateGLMArticle(): Promise<{
    title: string;
    content: string;
    excerpt: string;
  }> {
    const rawContent = `
# GLM-PC牛牛：你的智能桌面助手

智谱AI最新推出的GLM-PC牛牛是一款革命性的AI桌面助手，它将改变我们与计算机交互的方式。这款产品目前正在进行内测，并已开始开放白名单通道。

## 产品特点

1. **全局智能交互**
   - 支持全局快捷键唤醒
   - 自然语言控制电脑操作
   - 智能理解用户意图

2. **多模态理解**
   - 支持文本、图像输入
   - 精准识别屏幕内容
   - 上下文感知能力强

3. **智能任务执行**
   - 自动化日常操作
   - 智能文档处理
   - 高效信息检索

## 使用场景

- 文档智能处理
- 程序开发辅助
- 系统操作管理
- 信息检索整理

## 如何参与内测

1. 访问官网：[cogagent.aminer.cn/home](https://cogagent.aminer.cn/home)
2. 填写申请表格
3. 等待白名单审核通过

## 技术创新

GLM-PC牛牛基于智谱AI最新的大语言模型技术，具有以下技术优势：
- 深度系统集成能力
- 多模态理解和交互
- 低延迟响应机制
- 本地化处理保护隐私

## 未来展望

GLM-PC牛牛的发布标志着AI桌面助手进入了一个新的阶段。它不仅仅是一个简单的对话工具，更是一个能够真正理解并协助用户完成复杂任务的智能助手。
    `;

    // 使用Gemini优化内容
    const optimizedContent = await GeminiAI.optimizeContent(rawContent);

    // 使用专门的摘要生成方法
    const excerpt = await GeminiAI.generateExcerpt(optimizedContent);

    return {
      title: '重磅！智谱发布GLM-PC牛牛：一款革命性的AI桌面助手',
      content: optimizedContent,
      excerpt: excerpt,
    };
  }
} 