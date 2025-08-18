// src/components/pages/WelcomePage.jsx
import React, { useState } from 'react';
import { Section, Card, Button } from '../UI';
import InfoDropdown from '../InfoDropdown';
import Footer from '../Footer';

import TermsOfService from '../Info/TermsOfService';
import PrivacyPolicy from '../Info/PrivacyPolicy';

import LogoCSN from '../../assets/images/Logo_CSN.png';
import LogoPVC from '../../assets/images/Phuket_Vocational_College.png';

import questionsData from '../../data/questions';

export default function WelcomePage({ onStart }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const handleStart = () => {
    if (!questionsData || questionsData.length < 10) {
      alert('ไม่พบคำถามเพียงพอสำหรับการสุ่ม');
      return;
    }

    // สุ่มคำถาม 10 ข้อ
    const shuffled = [...questionsData].sort(() => Math.random() - 0.5);
    const selectedQuestions = shuffled.slice(0, 10);

    // ส่งคำถามชุดนี้ไปยัง QuestionPage ผ่าน onStart
    onStart(selectedQuestions);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Section className="flex-grow flex items-center justify-center">
        <Card className="text-center max-w-3xl bg-white/90 backdrop-blur-md p-6 sm:p-8 md:p-10 shadow-lg rounded-xl">
          {/* โลโก้ responsive */}
          <div className="flex justify-center items-center mb-6 gap-3 sm:gap-6">
            <img
              src={LogoCSN}
              alt="CSN Logo"
              className="
                h-32 sm:h-40 md:h-48 lg:h-56 w-auto object-contain
                drop-shadow-2xl
                transition-transform duration-300 ease-in-out
                hover:scale-105 hover:drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)]
              "
            />
            <img
              src={LogoPVC}
              alt="Phuket Vocational College Logo"
              className="
                h-20 sm:h-28 md:h-36 w-auto object-contain
                drop-shadow-xl
                transition-transform duration-300 ease-in-out
                hover:scale-105 hover:drop-shadow-[0_20px_25px_rgba(0,0,0,0.4)]
              "
            />
          </div>

          {/* ข้อความต้อนรับ */}
          <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-primary-700 mb-2 leading-snug">
            ยินดีต้อนรับสู่ระบบแนะนำอาชีพ
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-400 mb-4">
            วิทยาลัยอาชีวศึกษาภูเก็ต
          </h2>
          <p className="text-neutral-600 mb-6 text-sm sm:text-base md:text-lg leading-relaxed text-center px-2 sm:px-6">
            ระบบช่วยแนะนำอาชีพที่เหมาะสมกับคุณ{' '}
            <span className="whitespace-nowrap">จากแบบสอบถาม 10 ข้อ</span>
            <br />
            พร้อมคำแนะนำเพื่อพัฒนาตนเอง
          </p>

          {/* ปุ่มเริ่มแบบสอบถาม */}
          <Button className="max-w-xs mx-auto" onClick={handleStart}>
            เริ่มทำแบบสอบถาม
          </Button>
        </Card>
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



















// // src/components/pages/WelcomePage.jsx
// import React, { useState } from 'react';
// import { Section, Card, Button } from '../UI';
// import InfoDropdown from '../InfoDropdown';
// import Footer from '../Footer';

// import TermsOfService from '../Info/TermsOfService';
// import PrivacyPolicy from '../Info/PrivacyPolicy';

// import LogoCSN from '../../assets/images/Logo_CSN.png';
// import LogoPVC from '../../assets/images/Phuket_Vocational_College.png';

// export default function WelcomePage({ onStart }) {
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const handleToggleDropdown = (key) => {
//     setOpenDropdown((prev) => (prev === key ? null : key));
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
//       <Section className="flex-grow flex items-center justify-center">
//         <Card className="text-center max-w-3xl bg-white/90 backdrop-blur-md p-6 sm:p-8 md:p-10 shadow-lg rounded-xl">
//           {/* โลโก้ responsive */}
//           <div className="flex justify-center items-center mb-6 gap-3 sm:gap-6">
//             <img
//               src={LogoCSN}
//               alt="CSN Logo"
//               className="
//                 h-32 sm:h-40 md:h-48 lg:h-56 w-auto object-contain
//                 drop-shadow-2xl
//                 transition-transform duration-300 ease-in-out
//                 hover:scale-105 hover:drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)]
//               "
//             />
//             <img
//               src={LogoPVC}
//               alt="Phuket Vocational College Logo"
//               className="
//                 h-20 sm:h-28 md:h-36 w-auto object-contain
//                 drop-shadow-xl
//                 transition-transform duration-300 ease-in-out
//                 hover:scale-105 hover:drop-shadow-[0_20px_25px_rgba(0,0,0,0.4)]
//               "
//             />
//           </div>

//           {/* ข้อความต้อนรับ */}
//           <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-primary-700 mb-2 leading-snug">
//             ยินดีต้อนรับสู่ระบบแนะนำอาชีพ
//           </h1>
//           <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-400 mb-4">
//             วิทยาลัยอาชีวศึกษาภูเก็ต
//           </h2>
//           <p className="text-neutral-600 mb-6 text-sm sm:text-base md:text-lg leading-relaxed text-center px-2 sm:px-6">
//             ระบบช่วยแนะนำอาชีพที่เหมาะสมกับคุณ{' '}
//             <span className="whitespace-nowrap">จากแบบสอบถาม 10 ข้อ</span>
//             <br />
//             พร้อมคำแนะนำเพื่อพัฒนาตนเอง
//           </p>

//           {/* ปุ่มเริ่มแบบสอบถาม */}
//           <Button className="max-w-xs mx-auto" onClick={onStart}>
//             เริ่มทำแบบสอบถาม
//           </Button>
//         </Card>
//       </Section>

//       <Footer onToggle={handleToggleDropdown} />

//       <InfoDropdown
//         title="Terms of Service"
//         content={<TermsOfService />}
//         isOpen={openDropdown === 'terms'}
//         onClose={() => setOpenDropdown(null)}
//       />
//       <InfoDropdown
//         title="Privacy Policy"
//         content={<PrivacyPolicy />}
//         isOpen={openDropdown === 'privacy'}
//         onClose={() => setOpenDropdown(null)}
//       />
//     </div>
//   );
// }
