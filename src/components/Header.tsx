import React from 'react';
import { Heart, Menu, LifeBuoy } from 'lucide-react';

interface HeaderProps {
  onCrisisClick: () => void;
}

export default function Header({ onCrisisClick }: HeaderProps) {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-semibold text-slate-800">Aleza</h1>
            <p className="text-sm text-slate-600">Your compassionate companion</p>
          </div>
        </div>
        
        <button
          onClick={onCrisisClick}
          className="flex items-center space-x-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-full transition-colors duration-200"
        >
          <LifeBuoy className="w-4 h-4" />
          <span className="text-sm font-medium">Crisis Support</span>
        </button>
      </div>
    </header>
  );
}