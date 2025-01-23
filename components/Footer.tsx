import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p>© 2024 喵哥AI博客. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              关于我们
            </a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              联系方式
            </a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              隐私政策
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 