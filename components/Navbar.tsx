import React from 'react';
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-800">
            喵哥AI博客
          </Link>
          <div className="space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              首页
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">
              文章
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              关于
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 