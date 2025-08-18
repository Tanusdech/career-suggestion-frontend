// src/utils/analyze.js
import { mapScoreTo50to100, applyRankMultiplier } from './calculateScore';
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

  // เรียงลำดับ Top 3 และ apply multiplier ตามอันดับ
  const sortedCareers = Object.entries(careerScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([careerKey, score], index) => ({
      key: careerKey,
      score: applyRankMultiplier(score, index + 1), // index 0 = top1
      name: careerDescriptions[careerKey],
      url: careerUrls[careerKey],
    }));

  return sortedCareers;
}
