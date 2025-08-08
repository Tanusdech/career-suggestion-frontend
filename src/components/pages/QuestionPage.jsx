// src/components/pages/QuestionPage.jsx
import React, { useState } from 'react';
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

  const handleSubmit = () => {
    const unanswered = questions.some(q => answers[q.id] === undefined);
    if (unanswered || !gender || !age || !education) {
      showToast({
        type: 'error',
        message: 'กรุณาตอบคำถามให้ครบทุกข้อก่อนส่ง',
      });
      return;
    }
    onSubmit();
  };

  const handleToggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
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
            <div>
              <Label htmlFor="gender">เพศ</Label>
              <RadioGroup
                name="gender"
                selectedValue={gender}
                onChange={(val) => setGender(val)}
                options={[
                  { label: 'ชาย', value: 'male' },
                  { label: 'หญิง', value: 'female' },
                  { label: 'ไม่ระบุ', value: 'other' },
                ]}
              />
            </div>

            <div>
              <Label htmlFor="age">อายุ</Label>
              <InputText
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="กรอกอายุของคุณ"
              />
            </div>

            <div>
              <Label htmlFor="education">ระดับการศึกษา</Label>
              <RadioGroup
                name="education"
                selectedValue={education}
                onChange={(val) => setEducation(val)}
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
              <div key={id}>
                <Label className="mb-2">{question}</Label>
                <RadioGroup
                  name={id}
                  options={options.map((opt, idx) => ({
                    label: opt.label,
                    value: idx, // เก็บเป็นตัวเลข 0-5
                  }))}
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
