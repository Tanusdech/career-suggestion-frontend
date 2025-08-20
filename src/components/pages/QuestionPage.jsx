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

  const [genderCustom, setGenderCustom] = useState('');

    const handleSubmit = () => {
    // ตรวจสอบข้อมูลเบื้องต้น
    let firstEmptyField = !gender ? 'gender' : !age ? 'age' : !education ? 'education' : null;

    // ✅ เพิ่มตรงนี้: ตรวจสอบกรณีเลือก "อื่นๆ" แต่ไม่กรอกช่องระบุ
    if (gender === 'custom' && (!genderCustom || genderCustom.trim() === '')) {
      firstEmptyField = 'gender';
    }

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
              className={`p-4 rounded-lg transition-all duration-500 ${
                highlighted['gender'] ? 'border-2 border-red-500 bg-red-50' : 'bg-white'
              }`}
            >
              <Label htmlFor="gender" className="font-semibold mb-2 block">
                เพศ
              </Label>

              <div className="flex flex-col gap-3 mt-1">
                {[
                  { label: 'ชาย', value: 'male' },
                  { label: 'หญิง', value: 'female' },
                  { label: 'ไม่ระบุ', value: 'other' },
                  { label: 'อื่นๆ', value: 'custom' },
                ].map((opt) => (
                  <div key={opt.value} className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        id={`gender-${opt.value}`}
                        name="gender"
                        value={opt.value}
                        checked={gender === opt.value}
                        onChange={() => {
                          if (opt.value === 'custom') {
                            setGender('custom');
                            setGenderCustom('');
                          } else {
                            setGender(opt.value);
                            setGenderCustom('');
                          }
                        }}
                        className="accent-primary-600 w-5 h-5"
                      />
                      <span>{opt.label}</span>
                    </label>

                    {opt.value === 'custom' && gender === 'custom' && (
                      <InputText
                        type="text"
                        placeholder="โปรดระบุ..."
                        value={genderCustom}
                        onChange={(e) => setGenderCustom(e.target.value)}
                        className="ml-6 sm:ml-4 w-full sm:w-64 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-primary-400"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div
              id="age"
              className={`p-2 rounded transition-all duration-500 ${
                highlighted['age'] ? 'border-2 border-red-500 bg-red-50' : ''
              }`}
            >
              <div className="flex items-center gap-2">
                <Label htmlFor="age-input" className="whitespace-nowrap">
                  อายุ
                </Label>

                <InputText
                  id="age-input"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={age}
                  onChange={(e) => {
                    let val = e.target.value;

                    val = val.replace(/[^0-9]/g, "");

                    if (val !== "") {
                      const num = parseInt(val, 10);
                      if (num >= 1 && num <= 99) {
                        setAge(String(num));
                      }
                    } else {
                      setAge("");
                    }
                  }}
                  placeholder="1-99"
                  className="w-24 sm:w-28 md:w-32 text-center px-3 py-1"
                />

                <span className="whitespace-nowrap">ปี</span>
              </div>
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
                <Label className="mb-2 font-semibold bg-yellow-50 p-1 rounded">{question}</Label>
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
