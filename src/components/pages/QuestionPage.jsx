// src/components/pages/QuestionPage.jsx
import React, { useState, useRef } from 'react';
import { Section, Card, Button, Label, InputText, RadioGroup } from '../UI';
import { useToast } from '../../context/ToastContext';
import Footer from '../Footer';
import InfoDropdown from '../InfoDropdown';
import TermsOfService from '../Info/TermsOfService';
import PrivacyPolicy from '../Info/PrivacyPolicy';

export default function QuestionPage({
  gender, setGender,
  age, setAge,
  education, setEducation,
  answers, onAnswerChange,
  onSubmit,
  questions
}) {
  const { showToast } = useToast();
  const [openDropdown, setOpenDropdown] = useState(null);

  // refs ของคำถาม
  const questionRefs = useRef({});
  // highlight state ของ field และคำถาม
  const [highlighted, setHighlighted] = useState({});

  const handleSubmit = () => {
    // ตรวจสอบข้อมูลเบื้องต้น
    const firstEmptyField = !gender ? 'gender' : !age ? 'age' : !education ? 'education' : null;

    if (firstEmptyField) {
      showToast({ type: 'error', message: 'กรุณากรอกข้อมูลเบื้องต้นให้ครบ' });

      setHighlighted(prev => ({ ...prev, [firstEmptyField]: true }));
      setTimeout(() => setHighlighted(prev => ({ ...prev, [firstEmptyField]: false })), 1500);

      const el = document.getElementById(firstEmptyField);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });

      return;
    }

    // ตรวจสอบคำถามที่ยังไม่ได้ตอบ
    const unanswered = questions.find(q => answers[q.id] === undefined);
    if (unanswered) {
      showToast({ type: 'error', message: 'กรุณาตอบคำถามให้ครบทุกข้อก่อนส่ง' });

      setHighlighted(prev => ({ ...prev, [unanswered.id]: true }));
      setTimeout(() => setHighlighted(prev => ({ ...prev, [unanswered.id]: false })), 1500);

      const el = questionRefs.current[unanswered.id];
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });

      return;
    }

    onSubmit();
  };

  const handleToggleDropdown = (key) => {
    setOpenDropdown(prev => (prev === key ? null : key));
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Section className="flex-grow fade-in">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-primary-700 mb-8 text-center">
          แบบสอบถามแนะนำอาชีพ
        </h1>

        {/* ข้อมูลเบื้องต้น */}
        <Card className="mb-6 sm:mb-8 bg-card">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">ข้อมูลเบื้องต้น</h2>
          <div className="space-y-4">
            <div
              id="gender"
              className={`p-2 rounded transition-all duration-500 ${highlighted['gender'] ? 'border-2 border-red-500 bg-red-50' : ''}`}
            >
              <Label htmlFor="gender">เพศ</Label>
              <RadioGroup
                name="gender"
                selectedValue={gender}
                onChange={setGender}
                options={[
                  { label: 'ชาย', value: 'male' },
                  { label: 'หญิง', value: 'female' },
                  { label: 'ไม่ระบุ', value: 'other' },
                ]}
              />
            </div>

            <div
              id="age"
              className={`p-2 rounded transition-all duration-500 ${highlighted['age'] ? 'border-2 border-red-500 bg-red-50' : ''}`}
            >
              <Label htmlFor="age">อายุ</Label>
              <InputText
                id="age-input"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="กรอกอายุของคุณ"
              />
            </div>

            <div
              id="education"
              className={`p-2 rounded transition-all duration-500 ${highlighted['education'] ? 'border-2 border-red-500 bg-red-50' : ''}`}
            >
              <Label htmlFor="education">ระดับการศึกษา</Label>
              <RadioGroup
                name="education"
                selectedValue={education}
                onChange={setEducation}
                options={[
                  { label: 'ประถมศึกษา', value: 'primary' },
                  { label: 'มัธยมศึกษา', value: 'secondary' },
                  { label: 'ปริญญาตรี', value: 'bachelor' },
                  { label: 'ปริญญาโท', value: 'master' },
                  { label: 'ปริญญาเอก', value: 'doctorate' },
                ]}
              />
            </div>
          </div>
        </Card>

        {/* แบบสอบถาม */}
        <Card className="mb-6 sm:mb-8 bg-card">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">แบบสอบถาม 10 ข้อ</h2>
          <div className="space-y-6">
            {questions.map(({ id, question, options }) => (
              <div
                key={id}
                ref={(el) => (questionRefs.current[id] = el)}
                className={`p-2 rounded transition-all duration-500 ${highlighted[id] ? 'border-2 border-red-500 bg-red-50' : ''}`}
              >
                <Label className="mb-2">{question}</Label>
                <RadioGroup
                  name={id}
                  options={options.map((opt, idx) => ({ label: opt.label, value: idx }))}
                  selectedValue={answers[id] ?? null}
                  onChange={(val) => onAnswerChange(id, Number(val))}
                />
              </div>
            ))}
          </div>
        </Card>

        <div className="text-center">
          <Button onClick={handleSubmit}>ส่งคำตอบ</Button>
        </div>
      </Section>

      {/* Footer */}
      <Footer onToggle={handleToggleDropdown} />

      {/* Dropdown Terms and Privacy */}
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
