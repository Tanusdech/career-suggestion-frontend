// src/components/FeedbackModal.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Card, Button } from './UI';
import { useToast } from '../context/ToastContext';

export default function FeedbackModal({ isOpen, onClose }) {
  const [closing, setClosing] = useState(false);
  const [rating, setRating] = useState(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const timeoutRef = useRef(null);
  const modalRef = useRef(null); // เพิ่ม ref สำหรับ modal container
  const { showToast } = useToast();

  const pageVersion = "1.0.0";
  const sessionId = React.useMemo(() => {
    return 'xxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }, []);
  const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/tablet/i.test(ua)) return 'Tablet';
    if (/mobile/i.test(ua)) return 'Mobile';
    return 'Desktop';
  };
  const deviceType = getDeviceType();
  const browserName = navigator.userAgent;

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // เพิ่ม useEffect เลื่อน scroll เมื่อเปิด modal
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isOpen]);

  const handleClose = () => {
    setClosing(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setClosing(false);
      onClose();
      setRating(null);
      setFeedbackText('');
      setSubmitting(false);
    }, 400);
  };

  console.log("Backend URL from env:", import.meta.env.VITE_BACKEND_URL);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL + "/feedback";

  const handleSubmit = async () => {
    if (!rating) {
      showToast({
        type: 'error',
        message: 'กรุณาให้คะแนนก่อนส่งความคิดเห็น',
      });
      return;
    }
    if (rating <= 2 && feedbackText.trim() === '') {
      showToast({
        type: 'error',
        message: 'กรุณาระบุเหตุผลหรือข้อเสนอแนะสำหรับคะแนนต่ำ',
      });
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(BACKEND_URL, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rating,
          feedbackText,
          deviceType,
          browser: browserName,
          pageVersion,
          sessionId,
        }),
      });

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();

      if (data.status === "success") {
        showToast({
          type: 'success',
          message: 'ขอบคุณสำหรับความคิดเห็นของคุณ!',
        });
        setSubmitting(false);
        handleClose();
      } else {
        showToast({
          type: 'error',
          message: 'เกิดข้อผิดพลาดในการส่งความคิดเห็น',
        });
        setSubmitting(false);
      }
    } catch (err) {
      console.error(err);
      showToast({
        type: 'error',
        message: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้',
      });
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50
        ${closing ? 'animate-fade-out' : 'animate-fade-in'}`}
      ref={modalRef} // เพิ่ม ref ตรงนี้
    >
      <Card className={`w-full max-w-md text-center
        ${closing ? 'animate-slide-down' : 'animate-slide-up'}`}>
        <h2 className="text-xl font-bold text-primary-700 mb-4">ให้คะแนนระบบ</h2>

        <div className="flex justify-center mb-4 space-x-1 sm:space-x-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`
                transition-colors duration-200
                ${rating >= star ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-200'}
                text-2xl sm:text-4xl
                p-1 sm:p-2
                rounded
                focus:outline-none focus:ring-2 focus:ring-yellow-400
              `}
              type="button"
              aria-label={`ให้คะแนน ${star} ดาว`}
            >
              ★
            </button>
          ))}
        </div>

        {rating !== null && rating <= 2 && (
          <textarea
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="โปรดระบุเหตุผลหรือข้อเสนอแนะ..."
            className="w-full border border-neutral-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 mb-4"
            rows={3}
          />
        )}

        <div className="flex justify-center gap-4">
          <Button
            variant="secondary"
            className="bg-neutral-200 text-neutral-800 hover:bg-neutral-300"
            onClick={handleClose}
            disabled={submitting}
          >
            ยกเลิก
          </Button>
          <Button onClick={handleSubmit} disabled={submitting}>
            {submitting ? 'กำลังส่ง...' : 'ส่งความคิดเห็น'}
          </Button>
        </div>
      </Card>
    </div>
  );
}
