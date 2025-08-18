// src/data/questions.js
const questions = [
  {
    id: 'q1',
    question: 'งานประเภทใดที่คุณรู้สึกใกล้ตัวหรือสนใจมากที่สุด?',
    options: [
      { label: 'การทำบัญชีและงานด้านการเงิน', value: 0 },          // accountant
      { label: 'งานธุรการและสนับสนุนสำนักงาน', value: 1 },          // adminStaff
      { label: 'การช่วยเหลือแก้ไขปัญหาด้านคอมพิวเตอร์/ไอที', value: 2 }, // itSupport
      { label: 'การวางแผนและจัดการด้านโลจิสติกส์', value: 3 },     // logisticsPlanner
      { label: 'การบริการลูกค้าและงานสายการบิน', value: 4 },       // cabinCrew
      { label: 'การตลาดและส่งเสริมการขาย', value: 5 },              // marketer
    ],
  },
  {
    id: 'q2',
    question: 'ถ้าต้องเลือกงานที่ตรงกับความสามารถ คุณอยากทำงานแบบใด?',
    options: [
      { label: 'แปลภาษาและการสื่อสารข้ามวัฒนธรรม', value: 0 },   // translator
      { label: 'ต้อนรับและบริการลูกค้า (Front Office)', value: 1 }, // frontOfficeStaff
      { label: 'วางแผนการเดินทาง/ทัวร์ท่องเที่ยว', value: 2 },   // travelAgent
      { label: 'ออกแบบแฟชั่นและงานสร้างสรรค์สิ่งทอ', value: 3 }, // fashionDesigner
      { label: 'วางแผนอาหารและโภชนาการ', value: 4 },              // nutritionist
      { label: 'ดูแลระบบเครือข่ายคอมพิวเตอร์', value: 5 },       // networkAdmin
    ],
  },
  {
    id: 'q3',
    question: 'งานลักษณะไหนที่เหมาะกับบุคลิกของคุณที่สุด?',
    options: [
      { label: 'วิเคราะห์ระบบและกระบวนการทำงาน', value: 0 },      // systemsAnalyst
      { label: 'ประสานงานในองค์กรและจัดการประชุม', value: 1 },    // corporateCoordinator
      { label: 'ประสานงานโครงการหรือกิจกรรม', value: 2 },          // projectCoordinator
      { label: 'เขียนโปรแกรมและพัฒนาแอปพลิเคชัน', value: 3 },      // juniorDeveloper
      { label: 'ผู้ช่วยนักโภชนาการและสุขภาพ', value: 4 },          // assistantNutritionist
      { label: 'จัดการงานบ้านและการดูแลครัวเรือน', value: 5 },     // householdManager
    ],
  },
  {
    id: 'q4',
    question: 'ถ้ามีโอกาส คุณอยากเติบโตในงานสายใดมากที่สุด?',
    options: [
      { label: 'วิเคราะห์การลงทุนและการเงิน', value: 0 },           // financialAnalyst
      { label: 'จัดการสำนักงานและทีมงาน', value: 1 },               // officeManager
      { label: 'ดูแลฐานข้อมูลและระบบสารสนเทศ', value: 2 },          // databaseAdmin
      { label: 'วางแผนและจัดการคลังสินค้า', value: 3 },             // warehouseManager
      { label: 'ดูแลลูกค้าสัมพันธ์และการบริการ', value: 4 },       // guestRelationsManager
      { label: 'สร้างแบรนด์และวางกลยุทธ์การตลาด', value: 5 },      // brandManager
    ],
  },
  {
    id: 'q5',
    question: 'คุณสนใจทำงานแบบใดในอนาคต?',
    options: [
      { label: 'ตรวจสอบบัญชีและงานตรวจสอบการเงิน', value: 0 },    // auditor
      { label: 'วิเคราะห์ตลาดและพฤติกรรมผู้บริโภค', value: 1 },   // marketingAnalyst
      { label: 'จัดการการขนส่งและการคมนาคม', value: 2 },           // transportOfficer
      { label: 'ทำงานด้านการจองตั๋วหรือห้องพัก', value: 3 },       // reservationOfficer
      { label: 'บริหารจัดการโรงแรมและการท่องเที่ยว', value: 4 },   // hotelManager
      { label: 'บริหารงานสิ่งทอและผลิตภัณฑ์แฟชั่น', value: 5 },   // textileProductManager
    ],
  },
  {
    id: 'q6',
    question: 'หากคุณมีโอกาสเลือกเส้นทาง คุณอยากเป็นผู้เชี่ยวชาญในด้านใด?',
    options: [
      { label: 'งานด้านการค้าระหว่างประเทศ', value: 0 },          // tradeOfficer
      { label: 'การนำเที่ยวและไกด์', value: 1 },                     // tourGuide
      { label: 'วางแผนการท่องเที่ยวและพัฒนาแหล่งท่องเที่ยว', value: 2 }, // tourismPlanner
      { label: 'อาหารสุขภาพและโภชนาการเชิงลึก', value: 3 },       // healthFoodSpecialist
      { label: 'ออกแบบสื่อมัลติมีเดีย', value: 4 },                // multimediaDesigner
      { label: 'บริหารจัดการเครือข่ายคอมพิวเตอร์', value: 5 },    // networkAdmin
    ],
  },
  {
    id: 'q7',
    question: 'คุณอยากใช้ความสามารถของคุณกับงานประเภทใด?',
    options: [
      { label: 'เขียนโปรแกรมและพัฒนาซอฟต์แวร์', value: 0 },        // softwareDeveloper
      { label: 'วิเคราะห์ระบบและแก้ปัญหาทางเทคนิค', value: 1 },   // systemsAnalyst
      { label: 'งานหัตถกรรมและศิลปะท้องถิ่น', value: 2 },         // handicraftSpecialist
      { label: 'ประชาสัมพันธ์และการสื่อสารองค์กร', value: 3 },     // prOfficer
      { label: 'ออกแบบตกแต่งภายใน', value: 4 },                     // interiorDesigner
      { label: 'ศิลปินและงานศิลปะทัศนศิลป์', value: 5 },           // visualArtist
    ],
  },
  {
    id: 'q8',
    question: 'ถ้าให้เลือกงานในสถานการณ์ที่กดดัน คุณอยากทำงานใด?',
    options: [
      { label: 'เขียนโค้ดหรือโปรแกรมขนาดเล็ก', value: 0 },        // juniorDeveloper
      { label: 'จัดการสำนักงานและบุคลากร', value: 1 },             // officeManager
      { label: 'การบริการลูกค้าบนเครื่องบิน', value: 2 },         // cabinCrew
      { label: 'ดูแลร้านค้าและการจัดการสินค้า', value: 3 },        // storeManager
      { label: 'ต้อนรับและดูแลลูกค้าหน้าเคาน์เตอร์', value: 4 },   // frontOfficeStaff
      { label: 'ออกแบบกราฟิกและสื่อโฆษณา', value: 5 },             // graphicDesigner
    ],
  },
  {
    id: 'q9',
    question: 'คุณสนใจพัฒนาตัวเองในด้านใดมากที่สุด?',
    options: [
      { label: 'ทำการตลาดและโปรโมทสินค้า', value: 0 },             // marketer
      { label: 'งานด้านธุรกิจระหว่างประเทศ', value: 1 },           // internationalBusinessOfficer
      { label: 'จัดการฐานข้อมูลและสารสนเทศ', value: 2 },           // databaseAdmin
      { label: 'เขียนโปรแกรมและสร้างซอฟต์แวร์', value: 3 },        // softwareDeveloper
      { label: 'ออกแบบแฟชั่นและสร้างสรรค์เสื้อผ้า', value: 4 },   // fashionDesigner
      { label: 'สนับสนุนด้านเทคนิคและไอที', value: 5 },            // itSupport
    ],
  },
  {
    id: 'q10',
    question: 'หากต้องเลือกงานที่ท้าทาย คุณจะเลือกแบบใด?',
    options: [
      { label: 'ดูแลลูกค้าสัมพันธ์และการบริการ', value: 0 },      // guestRelationsManager
      { label: 'สร้างแบรนด์และวางกลยุทธ์', value: 1 },             // brandManager
      { label: 'งานหัตถกรรมและงานฝีมือ', value: 2 },               // handicraftSpecialist
      { label: 'จัดอีเวนต์และกิจกรรมพิเศษ', value: 3 },            // eventOrganizer
      { label: 'ประสานงานและจัดการสนามบิน', value: 4 },            // airportCoordinator
      { label: 'บริหารจัดการโรงแรม', value: 5 },                     // hotelManager
    ],
  },
];

export default questions;
