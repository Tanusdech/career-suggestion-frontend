// src/utils/formatCareerName.js
export function formatCareerName(career) {
  const mapping = {
    // สาขาวิชาการบัญชี
    accountant: 'นักบัญชี/ผู้ช่วยบัญชี',
    financialAnalyst: 'นักวิเคราะห์การเงิน',
    auditor: 'ผู้ตรวจสอบบัญชี',

    // สาขาวิชาการจัดการสำนักงาน
    adminStaff: 'เจ้าหน้าที่ธุรการ/ผู้ช่วยฝ่ายสำนักงาน',
    projectCoordinator: 'ผู้ประสานงานโครงการ',
    officeManager: 'ผู้จัดการสำนักงาน/สำนักงานอำนวยการ',

    // สาขาวิชาคอมพิวเตอร์ธุรกิจ
    itSupport: 'เจ้าหน้าที่ระบบสารสนเทศ',
    juniorDeveloper: 'นักวิเคราะห์ระบบ/นักพัฒนาซอฟต์แวร์เบื้องต้น',
    databaseAdmin: 'ผู้ดูแลฐานข้อมูล',

    // สาขาวิชาโลจิสติกส์และซัพพลายเชน
    logisticsPlanner: 'เจ้าหน้าที่วางแผนโลจิสติกส์',
    warehouseManager: 'ผู้จัดการคลังสินค้า',
    transportOfficer: 'เจ้าหน้าที่ขนส่ง/จัดส่งสินค้า',

    // สาขาวิชาธุรกิจการบิน
    cabinCrew: 'พนักงานสายการบิน',
    reservationOfficer: 'เจ้าหน้าที่สำรองที่นั่ง/ตั๋ว',
    airportCoordinator: 'ผู้ประสานงานสนามบิน',

    // สาขาวิชาการตลาดและการจัดการธุรกิจค้าปลีก
    marketer: 'นักการตลาด/ผู้ช่วยนักการตลาด',
    storeManager: 'ผู้จัดการร้านค้าปลีก',
    marketingAnalyst: 'นักวิเคราะห์ตลาด',

    // สาขาวิชาภาษาและการจัดการธุรกิจระหว่างประเทศ
    translator: 'ล่าม/นักแปล',
    internationalBusinessOfficer: 'เจ้าหน้าที่ธุรกิจระหว่างประเทศ',
    tradeOfficer: 'เจ้าหน้าที่การค้าระหว่างประเทศ/ส่งออก-นำเข้า',

    // สาขาวิชาการโรงแรม
    frontOfficeStaff: 'พนักงานต้อนรับโรงแรม',
    guestRelationsManager: 'ผู้จัดการฝ่ายต้อนรับ',
    hotelManager: 'ผู้จัดการโรงแรม',

    // สาขาวิชาการจัดการธุรกิจท่องเที่ยว
    travelAgent: 'เจ้าหน้าที่ท่องเที่ยว',
    tourGuide: 'ผู้จัดทัวร์/ทัวร์ไกด์',
    tourismPlanner: 'ผู้วางแผนและบริหารธุรกิจท่องเที่ยว',

    // สาขาวิชาแฟชั่นและสิ่งทอ
    fashionDesigner: 'นักออกแบบแฟชั่น/เสื้อผ้า',
    brandManager: 'นักจัดการแบรนด์แฟชั่น',
    textileProductManager: 'ผู้จัดการผลิตภัณฑ์สิ่งทอ',

    // สาขาวิชาอาหารและโภชนาการ
    nutritionist: 'นักโภชนาการ/Nutritionist',
    assistantNutritionist: 'ผู้ช่วยนักโภชนาการในโรงพยาบาล/คลินิก',
    healthFoodSpecialist: 'ผู้เชี่ยวชาญด้านอาหารและสุขภาพ',

    // สาขาวิชาคหกรรมศาสตร์
    interiorDesigner: 'นักออกแบบตกแต่งภายใน',
    householdManager: 'เจ้าหน้าที่จัดการสิ่งอำนวยความสะดวกในบ้าน',
    handicraftSpecialist: 'ผู้เชี่ยวชาญงานฝีมือ',

    // สาขาวิชาศิลปกรรม
    graphicDesigner: 'นักออกแบบกราฟิก',
    visualArtist: 'ศิลปินสร้างงานศิลปะ',
    multimediaDesigner: 'นักออกแบบมัลติมีเดีย',

    // สาขาวิชาเทคโนโลยีสารสนเทศ
    softwareDeveloper: 'นักพัฒนาโปรแกรม',
    systemsAnalyst: 'นักวิเคราะห์ระบบ',
    networkAdmin: 'ผู้ดูแลระบบเครือข่าย',

    // สาขาวิชาสามัญสัมพันธ์
    prOfficer: 'เจ้าหน้าที่ประชาสัมพันธ์',
    corporateCoordinator: 'ผู้ประสานงานองค์กร',
    eventOrganizer: 'ผู้จัดกิจกรรม Event Organizer',
  };

  return mapping[career] || career;
}
