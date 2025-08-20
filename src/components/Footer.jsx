// src/components/Footer.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import QRDev from '../assets/images/QR_Dev.jpg';

export default function Footer({ onToggle }) {
  const [openQR, setOpenQR] = useState(false);
  const qrRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (qrRef.current && !qrRef.current.contains(event.target)) {
        setOpenQR(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <footer className="bg-background text-neutral-500 text-xs sm:text-sm text-center py-2 select-none border-t border-neutral-200 relative">

      {/* Links */}
      <div className="mb-1 flex justify-center items-center leading-tight gap-2">
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
          Privacy Policy
        </button>
      </div>

      {/* Developer + QR Dropdown */}
      <div className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-400 leading-tight flex justify-center items-center relative">
        &copy; {new Date().getFullYear()}&nbsp;Developed by&nbsp;
        <button
          type="button"
          onClick={() => setOpenQR((prev) => !prev)}
          className="text-primary-500 font-semibold hover:underline focus:outline-none text-[7px] sm:text-[8px] md:text-[9px]"
        >
          Tanusdech Monplub
        </button>
        &nbsp;All rights reserved.

        {/* Dropdown QR Code */}
        <div
          ref={qrRef}
          className={`absolute bottom-full mb-2 flex justify-center w-full pointer-events-none`}
        >
          <div
            className={`
              bg-white border border-gray-300 rounded-md p-3 shadow-lg
              transform transition-all duration-300 ease-in-out
              flex flex-col items-center
              ${openQR ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2'}
            `}
          >
            {/* QR Code */}
            <img
              src={QRDev}
              alt="QR Code"
              className="h-36 w-36 sm:h-40 sm:w-40 md:h-44 md:w-44 object-contain"
            />
            {/* Download Button */}
            <a
              href={QRDev}
              download="QR_Dev.jpg"
              className="
                mt-0.5
                inline-flex items-center justify-center
                bg-primary-500 text-white
                rounded-md
                p-1.5
                hover:bg-primary-600 hover:scale-105
                transition-all duration-200
              "
              title="Download QR Code"
            >
              <ArrowDownTrayIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
