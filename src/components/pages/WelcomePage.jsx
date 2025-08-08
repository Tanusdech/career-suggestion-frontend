// src/components/pages/WelcomePage.jsx
import React, { useState } from 'react';
import { Section, Card, Button } from '../UI';
import InfoDropdown from '../InfoDropdown';
import Footer from '../Footer';

import TermsOfService from '../Info/TermsOfService';
import PrivacyPolicy from '../Info/PrivacyPolicy';

export default function WelcomePage({ onStart }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Section className="flex-grow flex items-center justify-center fade-in">
        <Card className="text-center max-w-xl bg-card">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-primary-700 mb-4">
            ยินดีต้อนรับสู่ระบบแนะนำอาชีพ
          </h1>
          <p className="text-neutral-600 mb-6 text-sm sm:text-base leading-relaxed text-center">
            ระบบช่วยแนะนำอาชีพที่เหมาะสมกับคุณ{' '}
            <span className="whitespace-nowrap">จากแบบสอบถาม 10 ข้อ</span> พร้อมคำแนะนำเพื่อพัฒนาตนเอง
          </p>
          <Button onClick={onStart}>เริ่มทำแบบสอบถาม</Button>
        </Card>
      </Section>

      {/* ใช้ Footer component */}
      <Footer onToggle={handleToggleDropdown} />

      {/* Dropdown */}
      <InfoDropdown
        title="Terms of Service"
        content={<TermsOfService />}
        isOpen={openDropdown === 'terms'}
        onClose={() => setOpenDropdown(null)}
      />
      <InfoDropdown
        title="Privacy Policy"
        content={<PrivacyPolicy />}
        isOpen={openDropdown === 'privacy'}
        onClose={() => setOpenDropdown(null)}
      />
    </div>
  );
}
