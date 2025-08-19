// src/data/questions.js
const questions = [
  {
    id: 'q1',
    question: 'เมื่อคิดถึงงานในอุดมคติ คุณมักรู้สึกเชื่อมโยงกับงานประเภทใดมากที่สุด?',
    options: [
      { label: 'จัดการตัวเลขและวิเคราะห์การเงินอย่างเป็นระบบ', value: 0 },          // accountant
      { label: 'สร้างความเรียบร้อยและสนับสนุนผู้อื่นในองค์กร', value: 1 },          // adminStaff
      { label: 'ช่วยแก้ปัญหาและสนับสนุนผู้อื่นด้วยเทคโนโลยี', value: 2 },        // itSupport
      { label: 'วางแผนและจัดการกระบวนการอย่างเป็นขั้นตอน', value: 3 },            // logisticsPlanner
      { label: 'ดูแลและสร้างประสบการณ์ที่ดีให้กับผู้คน', value: 4 },               // cabinCrew
      { label: 'คิดสร้างสรรค์และวางกลยุทธ์เพื่อผลลัพธ์ที่ดี', value: 5 },           // marketer
    ],
  },
  {
    id: 'q2',
    question: 'ถ้าความสามารถของคุณถูกนำมาใช้เต็มที่ งานแบบใดที่คุณอยากทำ?',
    options: [
      { label: 'ถ่ายทอดความหมายและสื่อสารความเข้าใจระหว่างวัฒนธรรม', value: 0 }, // translator
      { label: 'สร้างความประทับใจและดูแลผู้คนอย่างใกล้ชิด', value: 1 },           // frontOfficeStaff
      { label: 'วางแผนการเดินทางและประสบการณ์ที่น่าจดจำ', value: 2 },             // travelAgent
      { label: 'สร้างสิ่งใหม่และสื่ออารมณ์ผ่านแฟชั่น', value: 3 },                 // fashionDesigner
      { label: 'ออกแบบวิถีชีวิตและโภชนาการเพื่อสุขภาพ', value: 4 },               // nutritionist
      { label: 'ดูแลและปกป้องระบบข้อมูลให้น่าเชื่อถือ', value: 5 },               // networkAdmin
    ],
  },
  {
    id: 'q3',
    question: 'บุคลิกของคุณเหมาะกับงานแบบใดมากที่สุด?',
    options: [
      { label: 'มองเห็นภาพรวมและวิเคราะห์ความซับซ้อน', value: 0 },                // systemsAnalyst
      { label: 'ประสานงานและทำให้ทีมทำงานได้ราบรื่น', value: 1 },                 // corporateCoordinator
      { label: 'จัดการโครงการและกิจกรรมให้เกิดผลลัพธ์', value: 2 },                // projectCoordinator
      { label: 'สร้างและพัฒนาซอฟต์แวร์อย่างมีระบบ', value: 3 },                    // juniorDeveloper
      { label: 'สนับสนุนผู้อื่นให้มีสุขภาพและความเป็นอยู่ที่ดี', value: 4 },       // assistantNutritionist
      { label: 'ดูแลความเรียบร้อยและความเป็นระเบียบรอบตัว', value: 5 },          // householdManager
    ],
  },
  {
    id: 'q4',
    question: 'ถ้ามีโอกาสเติบโต คุณอยากก้าวไปในสายงานใด?',
    options: [
      { label: 'วิเคราะห์และวางกลยุทธ์ด้านการเงิน', value: 0 },                     // financialAnalyst
      { label: 'เป็นผู้นำและจัดการทีมอย่างมีประสิทธิภาพ', value: 1 },             // officeManager
      { label: 'ดูแลและจัดการข้อมูลเพื่อการตัดสินใจ', value: 2 },                  // databaseAdmin
      { label: 'วางแผนและบริหารทรัพยากรให้เกิดประสิทธิผล', value: 3 },             // warehouseManager
      { label: 'สร้างความสัมพันธ์ที่ดีและบริการที่น่าประทับใจ', value: 4 },         // guestRelationsManager
      { label: 'วางแผนสร้างแบรนด์และกลยุทธ์เพื่อความสำเร็จ', value: 5 },          // brandManager
    ],
  },
  {
    id: 'q5',
    question: 'ในอนาคต คุณอยากมีบทบาทในการทำงานแบบใด?',
    options: [
      { label: 'ตรวจสอบความถูกต้องและสร้างความมั่นใจทางการเงิน', value: 0 },      // auditor
      { label: 'ทำความเข้าใจและวิเคราะห์พฤติกรรมของผู้คน', value: 1 },            // marketingAnalyst
      { label: 'วางแผนและจัดการการเดินทางและการขนส่ง', value: 2 },               // transportOfficer
      { label: 'อำนวยความสะดวกและจัดการรายละเอียดการจอง', value: 3 },            // reservationOfficer
      { label: 'บริหารจัดการทรัพยากรเพื่อประสบการณ์ที่ดีของผู้คน', value: 4 },     // hotelManager
      { label: 'จัดการผลิตภัณฑ์และสร้างสรรค์สิ่งใหม่ในสิ่งทอ', value: 5 },         // textileProductManager
    ],
  },
  {
    id: 'q6',
    question: 'หากคุณมีโอกาสเลือกเส้นทาง คุณอยากเป็นผู้เชี่ยวชาญในด้านใด?',
    options: [
      { label: 'การจัดการธุรกิจระหว่างประเทศและการค้าข้ามชาติ', value: 0 },        // tradeOfficer
      { label: 'การนำเที่ยวและการให้ประสบการณ์ที่น่าจดจำ', value: 1 },              // tourGuide
      { label: 'วางแผนและพัฒนาการท่องเที่ยวอย่างสร้างสรรค์', value: 2 },           // tourismPlanner
      { label: 'สร้างสรรค์เมนูสุขภาพและแนวทางโภชนาการเชิงลึก', value: 3 },         // healthFoodSpecialist
      { label: 'ออกแบบสื่อมัลติมีเดียที่ดึงดูดสายตา', value: 4 },                     // multimediaDesigner
      { label: 'บริหารจัดการระบบเครือข่ายและเทคโนโลยีสารสนเทศ', value: 5 },          // networkAdmin
    ],
  },
  {
    id: 'q7',
    question: 'คุณอยากใช้ความสามารถของคุณกับงานประเภทใด?',
    options: [
      { label: 'พัฒนาซอฟต์แวร์และสร้างนวัตกรรมทางเทคโนโลยี', value: 0 },           // softwareDeveloper
      { label: 'วิเคราะห์ระบบและแก้ไขปัญหาที่ซับซ้อน', value: 1 },                     // systemsAnalyst
      { label: 'สร้างงานหัตถกรรมและศิลปะที่สะท้อนเอกลักษณ์ท้องถิ่น', value: 2 },      // handicraftSpecialist
      { label: 'สื่อสารและประชาสัมพันธ์อย่างมีประสิทธิภาพ', value: 3 },              // prOfficer
      { label: 'ออกแบบพื้นที่ภายในให้ใช้งานและสวยงาม', value: 4 },                      // interiorDesigner
      { label: 'สร้างสรรค์งานศิลปะทัศนศิลป์อย่างโดดเด่น', value: 5 },                  // visualArtist
    ],
  },
  {
    id: 'q8',
    question: 'ถ้าให้เลือกงานในสถานการณ์ที่กดดัน คุณอยากทำงานใด?',
    options: [
      { label: 'เขียนโปรแกรมหรือแก้ไขโค้ดอย่างมีประสิทธิภาพ', value: 0 },           // juniorDeveloper
      { label: 'บริหารจัดการสำนักงานและบุคลากรให้ราบรื่น', value: 1 },               // officeManager
      { label: 'บริการลูกค้าอย่างมืออาชีพและเอาใจใส่', value: 2 },                     // cabinCrew
      { label: 'จัดการร้านค้าและสินค้าด้วยความระมัดระวัง', value: 3 },                 // storeManager
      { label: 'ต้อนรับและดูแลลูกค้าอย่างอบอุ่นและเป็นมิตร', value: 4 },              // frontOfficeStaff
      { label: 'ออกแบบกราฟิกที่สื่อสารได้ตรงใจผู้ชม', value: 5 },                      // graphicDesigner
    ],
  },
  {
    id: 'q9',
    question: 'คุณสนใจพัฒนาตัวเองในด้านใดมากที่สุด?',
    options: [
      { label: 'ทำการตลาดและสร้างสรรค์กลยุทธ์โปรโมทสินค้า', value: 0 },             // marketer
      { label: 'ขยายความรู้ด้านธุรกิจระหว่างประเทศและการเจรจา', value: 1 },           // internationalBusinessOfficer
      { label: 'บริหารและปรับปรุงฐานข้อมูลอย่างเป็นระบบ', value: 2 },               // databaseAdmin
      { label: 'พัฒนาซอฟต์แวร์และแก้ไขปัญหาด้วยเทคโนโลยี', value: 3 },              // softwareDeveloper
      { label: 'ออกแบบแฟชั่นที่สร้างเอกลักษณ์และแรงบันดาลใจ', value: 4 },              // fashionDesigner
      { label: 'สนับสนุนและแก้ไขปัญหาทางเทคนิคอย่างชาญฉลาด', value: 5 },          // itSupport
    ],
  },
  {
    id: 'q10',
    question: 'หากต้องเลือกงานที่ท้าทาย คุณจะเลือกแบบใด?',
    options: [
      { label: 'ดูแลลูกค้าสัมพันธ์และสร้างประสบการณ์ที่น่าประทับใจ', value: 0 },    // guestRelationsManager
      { label: 'สร้างแบรนด์และวางกลยุทธ์เพื่อความโดดเด่น', value: 1 },               // brandManager
      { label: 'สร้างงานหัตถกรรมที่พิถีพิถันและเป็นเอกลักษณ์', value: 2 },            // handicraftSpecialist
      { label: 'จัดอีเวนต์และกิจกรรมพิเศษให้ประทับใจผู้เข้าร่วม', value: 3 },         // eventOrganizer
      { label: 'ประสานงานและจัดการสนามบินอย่างมีประสิทธิภาพ', value: 4 },            // airportCoordinator
      { label: 'บริหารจัดการโรงแรมและบริการอย่างมืออาชีพ', value: 5 },               // hotelManager
    ],
  },
];

export default questions;
