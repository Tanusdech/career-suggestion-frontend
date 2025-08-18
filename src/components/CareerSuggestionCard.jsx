// src/components/CareerSuggestionCard.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLightbulb, FaTools, FaBook, FaLink } from 'react-icons/fa';

const rankStyles = {
  1: 'bg-yellow-100 border-yellow-500 text-yellow-800',
  2: 'bg-blue-100 border-blue-500 text-blue-800',
  3: 'bg-green-100 border-green-500 text-green-800',
};

const buttonStyles = {
  1: 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-md',
  2: 'bg-blue-500 hover:bg-blue-600 text-white shadow-md',
  3: 'bg-green-500 hover:bg-green-600 text-white shadow-md',
};

const iconColors = {
  description: 'text-yellow-500',
  skills: 'text-blue-500',
  learningPath: 'text-green-500',
  fieldOfStudy: 'text-purple-500',
  url: 'text-pink-500',
};

export default function CareerSuggestionCard({
  rank = 0,
  careerName = 'ไม่ระบุอาชีพ',
  score = 0,
  description = 'ไม่พบข้อมูลคำแนะนำ',
  recommendedSkills = [],
  learningPath = [],
  fieldOfStudy = [],
  careerURL = '',
}) {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails((prev) => !prev);

  // แปลง recommendedSkills และ fieldOfStudy เป็น array ถ้าเป็น string
  const skills = Array.isArray(recommendedSkills)
    ? recommendedSkills
    : recommendedSkills
    ? [recommendedSkills]
    : [];

  const fields = Array.isArray(fieldOfStudy)
    ? fieldOfStudy
    : fieldOfStudy
    ? [fieldOfStudy]
    : [];

  // แปลง learningPath เป็น array ถ้าเป็น string
  const learningSteps = Array.isArray(learningPath)
    ? learningPath
    : learningPath
    ? [learningPath]
    : [];

  return (
    <div
      className={`rounded-2xl border-2 p-6 shadow-lg transition-all duration-300 ${
        rankStyles[rank] || ''
      }`}
    >
      <h3 className="text-2xl font-semibold mb-3 select-none">
        {rank}. {careerName}
      </h3>
      <p className="text-md mb-4 font-medium text-gray-700 select-none">
        คะแนน: <span className="font-bold">{score.toFixed(1)}</span> / 100
      </p>

      <button
        className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer select-none ${
          buttonStyles[rank] || 'bg-gray-500 hover:bg-gray-600 text-white shadow-md'
        }`}
        onClick={toggleDetails}
        aria-expanded={showDetails}
      >
        {showDetails ? 'ซ่อนคำแนะนำ' : 'คำแนะนำอาชีพ'}
      </button>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            className="mt-6 bg-white p-5 rounded-lg border border-gray-300 text-gray-800 text-left max-h-[480px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Description */}
            <section className="mb-5">
              <h4 className="flex items-center gap-2 text-lg font-semibold mb-2 text-primary-700">
                <FaLightbulb className={iconColors.description} />
                คำอธิบาย
              </h4>
              <p className="whitespace-pre-line leading-relaxed">{description || '-'}</p>
            </section>

            {/* Recommended Skills */}
            {skills.length > 0 && (
              <section className="mb-5">
                <h4 className="flex items-center gap-2 text-lg font-semibold mb-2 text-primary-700">
                  <FaTools className={iconColors.skills} />
                  ทักษะที่แนะนำ
                </h4>
                <ul className="list-disc list-inside text-gray-700">
                  {skills.map((skill, idx) => (
                    <li key={idx}>{skill || '-'}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Learning Path */}
            {learningSteps.length > 0 && (
              <section className="mb-5">
                <h4 className="flex items-center gap-2 text-lg font-semibold mb-2 text-primary-700">
                  <FaBook className={iconColors.learningPath} />
                  แนวทางการเรียนรู้
                </h4>
                <ul className="list-disc list-inside text-gray-700">
                  {learningSteps.map((step, idx) => (
                    <li key={idx}>{step || '-'}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Field of Study */}
            {fields.length > 0 && (
              <section className="mb-5">
                <h4 className="flex items-center gap-2 text-lg font-semibold mb-2 text-primary-700">
                  <FaBook className={iconColors.fieldOfStudy} />
                  สาขาที่ควรศึกษา
                </h4>
                <ul className="list-disc list-inside text-gray-700">
                  {fields.map((field, idx) => (
                    <li key={idx}>{field || '-'}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Career URL */}
            {careerURL && (
              <section className="flex justify-center mb-4">
                <h4
                  className="flex items-center gap-2 text-lg font-semibold text-primary-700 cursor-pointer hover:underline animate-pulse"
                  style={{ animationDuration: '1s' }}
                  onClick={() => window.open(careerURL, '_blank', 'noopener,noreferrer')}
                >
                  <FaLink className={iconColors.url} />
                  คลิก! เยี่ยมชมแผนกสาขา
                </h4>
              </section>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
