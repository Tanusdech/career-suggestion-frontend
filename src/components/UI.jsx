// src/components/UI.jsx
import React from 'react';

// Container section ใช้ห่อเนื้อหาหลัก
export function Section({ children, className = '' }) {
  return (
    <section
      className={`max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-8 bg-background text-foreground ${className}`}
    >
      {children}
    </section>
  );
}

// Card กล่องเนื้อหาที่มี shadow และ padding
export function Card({ children, className = '' }) {
  return (
    <div
      className={`bg-card border border-neutral-200 rounded-md shadow-card p-4 sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}

// ปุ่มพื้นฐาน ใช้ได้หลายที่ มีสถานะ disabled และ hover
export function Button({
  children,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-primary-500 text-white font-semibold rounded-md
        px-4 py-3 sm:px-5 sm:py-3
        w-full sm:w-auto
        shadow-button
        transition duration-300 ease-in-out
        hover:bg-primary-600 hover:shadow-md
        active:bg-primary-700
        disabled:bg-primary-300 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
}

// Label สำหรับ input และ radio
export function Label({ htmlFor, children, className = '' }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-foreground font-medium mb-1 ${className}`}
    >
      {children}
    </label>
  );
}

// Input Text
export function InputText({
  id,
  value,
  onChange,
  placeholder,
  type = 'text',
  className = '',
}) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`
        w-full border border-neutral-300 rounded-md px-3 py-2
        bg-white text-foreground
        focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent
        transition
        ${className}
      `}
    />
  );
}

// Radio button group (ใช้สำหรับคำถามตัวเลือก 6 ตัวเลือก)
export function RadioGroup({ name, options, selectedValue, onChange }) {
  return (
    <div className="space-y-2">
      {options.map(({ label, value }) => (
        <label
          key={value}
          className="flex items-center space-x-2 cursor-pointer text-foreground hover:text-secondary-600 transition"
        >
          <input
            type="radio"
            name={name}
            value={value}
            checked={selectedValue === value}
            onChange={() => onChange(value)}
            className="form-radio text-secondary-500 focus:ring-secondary-400"
          />
          <span>{label}</span>
        </label>
      ))}
    </div>
  );
}
