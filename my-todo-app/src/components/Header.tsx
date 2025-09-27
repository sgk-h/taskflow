import React from 'react';

export const Header: React.FC = () => (
  <header className="text-center py-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
    <div className="relative z-10">
      <div className="floating-animation">
        <h1 className="text-6xl md:text-7xl font-black text-white mb-4 text-shadow">
          <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            ✨ TaskFlow
          </span>
        </h1>
      </div>
      <p className="text-white/80 text-xl md:text-2xl font-light tracking-wide">
        あなたの生活を整理し、美しくタスクを管理
      </p>
      <div className="flex justify-center mt-6">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </div>
  </header>
);
