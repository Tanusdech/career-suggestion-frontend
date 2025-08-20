// src/components/InfoDropdown.jsx
import React from 'react';
import { Card } from './UI';

export default function InfoDropdown({ title, content, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <Card
        className="max-w-3xl w-full p-6 relative max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          className="absolute top-3 right-3 text-red-600 hover:text-red-800 text-2xl font-bold bg-transparent border-0 p-0 focus:outline-none"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-xl font-bold text-primary-700 mb-4">{title}</h2>
        <div className="text-sm text-neutral-700 whitespace-pre-line">{content}</div>
      </Card>
    </div>
  );
}
