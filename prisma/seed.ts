import prisma from '../lib/prisma'
import { hash } from 'bcryptjs'
import { ArticleGenerator } from '../lib/articleGenerator'

async function main() {
  // 创建默认分类
  const aiCategory = await prisma.category.upsert({
    where: { name: 'AI技术' },
    update: {},
    create: {
      name: 'AI技术',
      description: '人工智能相关技术文章'
    },
  })

  // 创建默认标签
  const glmTag = await prisma.tag.create({
    data: {
      name: 'GLM',
    },
  })

  const pcAgentTag = await prisma.tag.create({
    data: {
      name: 'PC智能助手',
    },
  })

  // 创建管理员用户
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: '喵哥',
      role: 'ADMIN',
      bio: 'AI技术专家',
    },
  })

  // 生成优化后的文章内容
  const article = await ArticleGenerator.generateGLMArticle();

  // 创建GLM-PC牛牛文章
  await prisma.post.create({
    data: {
      title: article.title,
      content: article.content,
      excerpt: article.excerpt,
      slug: 'glm-pc-niu-niu-introduction',
      published: true,
      categoryId: aiCategory.id,
      authorId: admin.id,
      tagIds: [glmTag.id, pcAgentTag.id],
      readTime: 8,
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 