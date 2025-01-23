import React from 'react';
import Link from 'next/link';

interface BlogPostParams {
  params: {
    id: string;
  };
}

export default function BlogPost({ params }: BlogPostParams) {
  // 这里暂时使用模拟数据，后续会从数据库获取
  const post = {
    id: params.id,
    title: "ChatGPT提示工程最佳实践",
    content: "这是文章的详细内容...",
    date: "2024-03-20",
    author: "喵哥"
  };

  return (
    <article className="max-w-3xl mx-auto py-8">
      <Link 
        href="/blog" 
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← 返回文章列表
      </Link>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-600 mb-8">
        <span>{post.date}</span>
        <span className="mx-2">·</span>
        <span>{post.author}</span>
      </div>
      <div className="prose lg:prose-xl">
        {post.content}
      </div>
    </article>
  );
} 