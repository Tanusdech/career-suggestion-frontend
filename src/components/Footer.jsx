// src/components/Footer.jsx
import React from 'react';

export default function Footer({ onToggle }) {
  return (
    <footer className="bg-background text-neutral-500 text-xs sm:text-sm text-center py-2 select-none border-t border-neutral-200">
      <div className="mb-0 flex justify-center items-center leading-tight">
        <button
          type="button"
          className="hover:underline focus:outline-none transition-colors duration-200"
          onClick={() => onToggle('terms')}
        >
          Terms of Service
        </button>
        <span className="mx-2 select-none">|</span>
        <button
          type="button"
          className="hover:underline focus:outline-none transition-colors duration-200"
          onClick={() => onToggle('privacy')}
        >
          Privacy
        </button>
      </div>
      <div className="text-[8px] text-gray-400 leading-tight">
        &copy; {new Date().getFullYear()} Developed by Tanusdech Monplub. All rights reserved.
      </div>
    </footer>
  );
}
