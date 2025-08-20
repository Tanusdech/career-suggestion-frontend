// src/components/pages/ResultPage.jsx
import React, { useState, useEffect } from 'react';
import { Section, Card, Button } from '../UI';
import { formatCareerName } from '../../utils/formatCareerName';
import CareerSuggestionCard from '../CareerSuggestionCard';
import careerDescriptions from '../../data/careerDescriptions';
import FeedbackModal from '../FeedbackModal';

import TermsOfService from '../Info/TermsOfService';
import PrivacyPolicy from '../Info/PrivacyPolicy';
import InfoDropdown from '../InfoDropdown';
import Footer from '../Footer';

export default function ResultPage({ results, onRestart }) {
  const [showFeedback, setShowFeedback] = useState(false);
  const [closingPage, setClosingPage] = useState(false);
  const [animatePage, setAnimatePage] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hasRated, setHasRated] = useState(false);

  // โหลดค่า hasRated จาก localStorage
  useEffect(() => {
    const rated = localStorage.getItem('hasRatedFeedback');
    if (rated === 'true') setHasRated(true);

    setAnimatePage(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleRestartWithFade = () => {
    setClosingPage(true);
    setTimeout(() => {
      setHasRated(false);
      onRestart();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
  };

  const handleOpenFeedback = () => {
    if (!hasRated) {
      setShowFeedback(true);
    } else {
      alert('คุณได้ให้คะแนนระบบแล้ว');
    }
  };

  const handleSubmitFeedback = (rating) => {
    // ส่ง feedback ไป server ถ้ามี
    // sendFeedback(rating); // uncomment ถ้า implement backend
    setHasRated(true);
    localStorage.setItem('hasRatedFeedback', 'true');
    setShowFeedback(false);
    alert('ขอบคุณสำหรับการให้คะแนนของคุณ!');
  };

  const handleToggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const safeResults = Array.isArray(results) ? results : [];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Section
        className={`flex-grow flex flex-col items-center justify-start transition-opacity
          ${closingPage ? 'animate-fade-out' : animatePage ? 'animate-fade-in' : ''}`}
      >
        <Card className={`w-full max-w-2xl text-center px-6 py-8 ${animatePage ? 'animate-slide-up' : ''}`}>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-primary-700 mb-6">
            ผลลัพธ์แนะนำอาชีพ
          </h1>

          <div className="space-y-4 max-w-xl mx-auto mb-6">
            {safeResults.length === 0 && (
              <p className="text-gray-500">ไม่พบผลลัพธ์คำแนะนำอาชีพ</p>
            )}

            {safeResults.map((item, index) => {
              let careerKey = '';
              let score = 0;
              if (Array.isArray(item)) [careerKey, score] = item;
              else if (item && typeof item === 'object') {
                careerKey = item.key || '';
                score = item.score || 0;
              }

              const careerInfo = careerDescriptions[careerKey] || {};
              const careerName = careerInfo.title || formatCareerName(careerKey);
              const description = careerInfo.description || 'ไม่พบข้อมูลคำแนะนำ';
              const recommendedSkills = careerInfo.recommendedSkills
                ? Array.isArray(careerInfo.recommendedSkills)
                  ? careerInfo.recommendedSkills
                  : [careerInfo.recommendedSkills]
                : [];
              const learningPath = careerInfo.learningPath
                ? Array.isArray(careerInfo.learningPath)
                  ? careerInfo.learningPath
                  : [careerInfo.learningPath]
                : [];
              const fieldOfStudy = careerInfo.fieldOfStudy
                ? Array.isArray(careerInfo.fieldOfStudy)
                  ? careerInfo.fieldOfStudy
                  : [careerInfo.fieldOfStudy]
                : [];
              const careerURL = careerInfo.url || '';

              return (
                <CareerSuggestionCard
                  key={careerKey || index}
                  rank={index + 1}
                  careerName={careerName}
                  score={score}
                  description={description}
                  recommendedSkills={recommendedSkills}
                  learningPath={learningPath}
                  fieldOfStudy={fieldOfStudy}
                  careerURL={careerURL}
                />
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Button onClick={handleRestartWithFade}>เริ่มทำแบบสอบถามใหม่</Button>
            <Button
              variant="secondary"
              className="bg-secondary-500 hover:bg-secondary-600"
              onClick={handleOpenFeedback}
            >
              ให้คะแนนระบบ
            </Button>
          </div>

          <div className="text-center mt-2">
            <a
              href="https://www.phuketvc.ac.th/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base md:text-lg text-red-400 hover:text-red-500 font-bold transition-colors duration-200 break-words"
            >
              👉 เยี่ยมชมเว็บไซต์วิทยาลัยอาชีวศึกษาภูเก็ต
            </a>
          </div>
        </Card>

        <FeedbackModal
          isOpen={showFeedback}
          onClose={() => setShowFeedback(false)}
          resetFeedback={!hasRated}
          hasRated={hasRated}
          setHasRated={setHasRated}
        />
      </Section>

      <Footer onToggle={handleToggleDropdown} />

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
