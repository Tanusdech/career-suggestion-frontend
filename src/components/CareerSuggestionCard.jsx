// src/components/CareerSuggestionCard.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLightbulb, FaTools, FaBook } from 'react-icons/fa'; // ไอคอน

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

export default function CareerSuggestionCard({
  rank,
  careerName,
  score,
  description,
  recommendedSkills = [],
  learningPath = '',
}) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails((prev) => !prev);

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
            className="mt-6 bg-white p-5 rounded-lg border border-gray-300 text-gray-800 text-left max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            <section className="mb-5">
              <h4 className="flex items-center gap-2 text-lg font-semibold mb-2 text-primary-700">
                <FaLightbulb className="text-yellow-500" />
                คำอธิบาย
              </h4>
              <p className="whitespace-pre-line leading-relaxed">{description}</p>
            </section>

            {recommendedSkills.length > 0 && (
              <section className="mb-5">
                <h4 className="flex items-center gap-2 text-lg font-semibold mb-2 text-primary-700">
                  <FaTools className="text-blue-500" />
                  ทักษะที่แนะนำ
                </h4>
                <ul className="list-disc list-inside text-gray-700">
                  {recommendedSkills.map((skill, idx) => (
                    <li key={idx} className="mb-1">
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {learningPath && (
              <section>
                <h4 className="flex items-center gap-2 text-lg font-semibold mb-2 text-primary-700">
                  <FaBook className="text-green-500" />
                  แนวทางการเรียนรู้
                </h4>
                <p className="whitespace-pre-line leading-relaxed">{learningPath}</p>
              </section>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
