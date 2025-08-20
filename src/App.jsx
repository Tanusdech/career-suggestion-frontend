// src/App.jsx
import React, { useState } from 'react';
import questionsData from './data/questions';
import { analyzeAnswers } from './utils/analyze';

import WelcomePage from './components/pages/WelcomePage';
import QuestionPage from './components/pages/QuestionPage';
import ResultPage from './components/pages/ResultPage';

// ฟังก์ชันสุ่มลำดับ Array
const shuffle = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export default function App() {
  const [started, setStarted] = useState(false);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [education, setEducation] = useState('');
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // เก็บคำถามที่สุ่มแล้วใน state
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // ✅ เก็บคำตอบเป็นตัวเลขทันที
  const handleAnswerChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: Number(value) }));
  };

  // เริ่มแบบสอบถาม → สุ่มคำถามใหม่
  const handleStart = () => {
    setShuffledQuestions(shuffle(questionsData));
    setAnswers({});
    setGender('');
    setAge('');
    setEducation('');
    setResults(null);
    setStarted(true);
  };

  // ส่งคำตอบ
  const handleSubmit = () => {
    if (!gender || !age || !education) {
      alert('กรุณากรอกข้อมูลเบื้องต้นให้ครบถ้วน');
      return;
    }
    if (Object.keys(answers).length < shuffledQuestions.length) {
      alert('กรุณาตอบคำถามให้ครบถ้วน');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const topCareers = analyzeAnswers(answers);
      setResults(topCareers);
      setIsSubmitting(false);
    }, 1500);
  };

  // รีสตาร์ท → กลับหน้า Welcome + สุ่มคำถามใหม่
  const handleRestart = () => {
    setStarted(false);
    setAnswers({});
    setGender('');
    setAge('');
    setEducation('');
    setResults(null);
    setShuffledQuestions([]);
  };

  // หน้า Welcome
  if (!started) {
    return <WelcomePage onStart={handleStart} />;
  }

  // หน้า Result
  if (results) {
    return <ResultPage results={results} onRestart={handleRestart} />;
  }

  // หน้า Questions + Loading Overlay
  return (
    <>
      <QuestionPage
        gender={gender}
        setGender={setGender}
        age={age}
        setAge={setAge}
        education={education}
        setEducation={setEducation}
        answers={answers}
        onAnswerChange={handleAnswerChange}
        onSubmit={handleSubmit}
        questions={shuffledQuestions}
        isSubmitting={isSubmitting}
      />

      {isSubmitting && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
            <svg
              className="animate-spin h-10 w-10 text-primary-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            <p className="text-primary-700 font-semibold">กำลังประมวลผล...</p>
          </div>
        </div>
      )}
    </>
  );
}
