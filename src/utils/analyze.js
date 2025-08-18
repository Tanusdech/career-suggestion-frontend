// src/utils/analyze.js
import { mapScoreTo50to100 } from './calculateScore';
import careerDescriptions from '../data/careerDescriptions';
import careerUrls from '../data/careerUrls';

export function analyzeAnswers(answers) {
  // สร้าง object เก็บคะแนนของอาชีพทั้งหมด
  const careerScores = {};
  for (const careerKey in careerDescriptions) {
    careerScores[careerKey] = 0;
  }

  // Mapping คำตอบแต่ละข้อไปยังอาชีพ 6 ตัวเลือก
  const answerMapping = {
    q1: ['accountant', 'adminStaff', 'itSupport', 'logisticsPlanner', 'cabinCrew', 'marketer'],
    q2: ['translator', 'frontOfficeStaff', 'travelAgent', 'fashionDesigner', 'nutritionist', 'networkAdmin'],
    q3: ['systemsAnalyst', 'corporateCoordinator', 'projectCoordinator', 'juniorDeveloper', 'assistantNutritionist', 'householdManager'],
    q4: ['financialAnalyst', 'officeManager', 'databaseAdmin', 'warehouseManager', 'guestRelationsManager', 'brandManager'],
    q5: ['auditor', 'marketingAnalyst', 'transportOfficer', 'reservationOfficer', 'hotelManager', 'textileProductManager'],
    q6: ['tradeOfficer', 'tourGuide', 'tourismPlanner', 'healthFoodSpecialist', 'multimediaDesigner', 'networkAdmin'],
    q7: ['softwareDeveloper', 'systemsAnalyst', 'handicraftSpecialist', 'prOfficer', 'interiorDesigner', 'visualArtist'],
    q8: ['juniorDeveloper', 'officeManager', 'cabinCrew', 'storeManager', 'frontOfficeStaff', 'graphicDesigner'],
    q9: ['marketer', 'internationalBusinessOfficer', 'databaseAdmin', 'softwareDeveloper', 'fashionDesigner', 'itSupport'],
    q10: ['guestRelationsManager', 'brandManager', 'handicraftSpecialist', 'eventOrganizer', 'airportCoordinator', 'hotelManager'],
  };

  const scoreWeights = [6, 5, 4, 3, 2, 1];

  // คำนวณคะแนนแต่ละอาชีพจากคำตอบ
  for (const [questionId, selectedIndex] of Object.entries(answers)) {
    if (
      answerMapping.hasOwnProperty(questionId) &&
      selectedIndex >= 0 &&
      selectedIndex < answerMapping[questionId].length
    ) {
      const career = answerMapping[questionId][selectedIndex];
      careerScores[career] += scoreWeights[selectedIndex];
    }
  }

  const maxScore = scoreWeights[0] * Object.keys(answerMapping).length;

  // แปลงคะแนนเป็นเปอร์เซ็นต์และ scale เป็น 50-100
  for (const career in careerScores) {
    const rawPercent = (careerScores[career] / maxScore) * 100;
    careerScores[career] = mapScoreTo50to100(rawPercent);
  }

  // เรียงลำดับ Top 3
  const sortedCareers = Object.entries(careerScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([careerKey, score]) => ({
      key: careerKey,
      score,
      name: careerDescriptions[careerKey],
      url: careerUrls[careerKey],
    }));

  return sortedCareers;
}




















// // src/utils/analyze.js
// import { mapScoreTo50to100 } from './calculateScore';

// export function analyzeAnswers(answers) {
//   // ประกาศอาชีพ 45 ตัวล่าสุด
//   const careerScores = {
//     accountant: 0,
//     financialAnalyst: 0,
//     auditor: 0,
//     adminStaff: 0,
//     projectCoordinator: 0,
//     officeManager: 0,
//     itSupport: 0,
//     juniorDeveloper: 0,
//     databaseAdmin: 0,
//     logisticsPlanner: 0,
//     warehouseManager: 0,
//     transportOfficer: 0,
//     cabinCrew: 0,
//     reservationOfficer: 0,
//     airportCoordinator: 0,
//     marketer: 0,
//     storeManager: 0,
//     marketingAnalyst: 0,
//     translator: 0,
//     internationalBusinessOfficer: 0,
//     tradeOfficer: 0,
//     frontOfficeStaff: 0,
//     guestRelationsManager: 0,
//     hotelManager: 0,
//     travelAgent: 0,
//     tourGuide: 0,
//     tourismPlanner: 0,
//     fashionDesigner: 0,
//     brandManager: 0,
//     textileProductManager: 0,
//     nutritionist: 0,
//     assistantNutritionist: 0,
//     healthFoodSpecialist: 0,
//     interiorDesigner: 0,
//     householdManager: 0,
//     handicraftSpecialist: 0,
//     graphicDesigner: 0,
//     visualArtist: 0,
//     multimediaDesigner: 0,
//     softwareDeveloper: 0,
//     systemsAnalyst: 0,
//     networkAdmin: 0,
//     prOfficer: 0,
//     corporateCoordinator: 0,
//     eventOrganizer: 0,
//   };

//   // answerMapping 10 ข้อ x 6 ตัวเลือก ครอบคลุมครบ 45 อาชีพ
//   const answerMapping = {
//     q1: ['accountant', 'adminStaff', 'itSupport', 'logisticsPlanner', 'cabinCrew', 'marketer'],
//     q2: ['translator', 'frontOfficeStaff', 'travelAgent', 'fashionDesigner', 'nutritionist', 'networkAdmin'],
//     q3: ['systemsAnalyst', 'corporateCoordinator', 'projectCoordinator', 'juniorDeveloper', 'assistantNutritionist', 'householdManager'],
//     q4: ['financialAnalyst', 'officeManager', 'databaseAdmin', 'warehouseManager', 'guestRelationsManager', 'brandManager'],
//     q5: ['auditor', 'marketingAnalyst', 'transportOfficer', 'reservationOfficer', 'hotelManager', 'textileProductManager'],
//     q6: ['tradeOfficer', 'tourGuide', 'tourismPlanner', 'healthFoodSpecialist', 'multimediaDesigner', 'networkAdmin'],
//     q7: ['softwareDeveloper', 'systemsAnalyst', 'handicraftSpecialist', 'prOfficer', 'interiorDesigner', 'visualArtist'],
//     q8: ['juniorDeveloper', 'officeManager', 'cabinCrew', 'storeManager', 'frontOfficeStaff', 'graphicDesigner'],
//     q9: ['marketer', 'internationalBusinessOfficer', 'databaseAdmin', 'softwareDeveloper', 'fashionDesigner', 'itSupport'],
//     q10: ['guestRelationsManager', 'brandManager', 'handicraftSpecialist', 'eventOrganizer', 'airportCoordinator', 'hotelManager'],
//   };

//   const scoreWeights = [6, 5, 4, 3, 2, 1];

//   for (const [questionId, selectedIndex] of Object.entries(answers)) {
//     if (
//       answerMapping.hasOwnProperty(questionId) &&
//       selectedIndex >= 0 &&
//       selectedIndex < answerMapping[questionId].length
//     ) {
//       const career = answerMapping[questionId][selectedIndex];
//       careerScores[career] += scoreWeights[selectedIndex];
//     }
//   }

//   const maxScore = scoreWeights[0] * Object.keys(answerMapping).length;

//   for (const career in careerScores) {
//     const rawPercent = (careerScores[career] / maxScore) * 100;
//     careerScores[career] = mapScoreTo50to100(rawPercent);
//   }

//   const sortedCareers = Object.entries(careerScores)
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, 3);

//   return sortedCareers;
// }
