import React, { useState } from 'react';
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "ChatGPT提示工程最佳实践",
    excerpt: "学习如何编写更好的提示词，获得更准确的AI响应...",
    date: "2024-03-20",
    category: "提示工程",
    readTime: "10 分钟"
  },
  {
    id: "2",
    title: "深入理解Transformer架构",
    excerpt: "详细解析Transformer的工作原理和实现细节...",
    date: "2024-03-18",
    category: "深度学习",
    readTime: "15 分钟"
  },
  {
    id: "3",
    title: "AI模型部署最佳实践",
    excerpt: "如何高效部署和优化AI模型性能...",
    date: "2024-03-15",
    category: "部署优化",
    readTime: "12 分钟"
  },
  // 可以添加更多博客文章
];

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="搜索文章..."
            className="w-full md:w-64 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'all' ? '全部' : category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Link
            href={`/blog/${post.id}`}
            key={post.id}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="p-6">
              <div className="text-sm text-blue-600 mb-2">{post.category}</div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <time>{post.date}</time>
                <span>{post.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 