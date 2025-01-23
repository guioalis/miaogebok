import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 rounded-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in">探索AI的无限可能</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          和喵哥一起学习最新的人工智能技术，从入门到精通，分享AI实践经验
        </p>
        <div className="space-x-4">
          <Link 
            href="/blog" 
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-block"
          >
            开始阅读
          </Link>
          <Link
            href="/about"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
          >
            关于我们
          </Link>
        </div>
      </div>
    </div>
  );
} 