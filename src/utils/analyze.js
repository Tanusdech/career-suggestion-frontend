// src/utils/analyze.js
import { mapScoreTo50to100 } from './calculateScore';

export function analyzeAnswers(answers) {
  const careerScores = {
    webDeveloper: 0,
    graphicDesigner: 0,
    marketer: 0,
    teacher: 0,
    engineer: 0,
    writer: 0,
    adminStaff: 0,
    psychologist: 0,
    researcher: 0,
    entrepreneur: 0,
    dataScientist: 0,
    contentCreator: 0,
    socialWorker: 0,
    translator: 0,
    lawyer: 0,
    doctor: 0,
    nurse: 0,
    architect: 0,
    chef: 0,
    photographer: 0,
    musician: 0,
    dataAnalyst: 0,
    gameDeveloper: 0,
    digitalMarketer: 0,
    accountant: 0,
    pilot: 0,
    firefighter: 0,
    journalist: 0,
    translatorInterpreter: 0,
    civilEngineer: 0,
    mechanicalEngineer: 0,
    electrician: 0,
    plumber: 0,
    graphicArtist: 0,
    eventPlanner: 0,
    softwareTester: 0,
    photographerEditor: 0,
    copywriter: 0,
    fashionDesigner: 0,
    socialMediaManager: 0,
    urbanPlanner: 0,
    counselor: 0,
    translatorEditor: 0,
    dentist: 0,
    pharmacist: 0,
    veterinarian: 0,
    librarian: 0,
    softwareEngineer: 0,
    qaEngineer: 0,
    systemAdministrator: 0,
    databaseAdministrator: 0,
    networkEngineer: 0,
    hrManager: 0,
    salesManager: 0,
    businessAnalyst: 0,
    consultant: 0,
  };

  // แม็ปคำตอบ 10 ข้อ x 6 ตัวเลือกตามคำถามแนวจิตวิทยาใหม่
  const answerMapping = {
    q1: ['graphicDesigner', 'hrManager', 'teacher', 'engineer', 'entrepreneur', 'researcher'],
    q2: ['writer', 'marketer', 'psychologist', 'adminStaff', 'researcher', 'contentCreator'],
    q3: ['teacher', 'webDeveloper', 'entrepreneur', 'marketer', 'writer', 'socialWorker'],
    q4: ['engineer', 'researcher', 'adminStaff', 'graphicDesigner', 'psychologist', 'translator'],
    q5: ['entrepreneur', 'marketer', 'webDeveloper', 'graphicDesigner', 'teacher', 'lawyer'],
    q6: ['psychologist', 'researcher', 'adminStaff', 'writer', 'engineer', 'doctor'],
    q7: ['graphicDesigner', 'webDeveloper', 'marketer', 'teacher', 'entrepreneur', 'nurse'],
    q8: ['researcher', 'engineer', 'adminStaff', 'psychologist', 'writer', 'architect'],
    q9: ['teacher', 'marketer', 'writer', 'graphicDesigner', 'webDeveloper', 'chef'],
    q10: ['entrepreneur', 'psychologist', 'adminStaff', 'researcher', 'engineer', 'photographer'],
  };

  const scoreWeights = [6, 5, 4, 3, 2, 1];

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

  for (const career in careerScores) {
    const rawPercent = (careerScores[career] / maxScore) * 100;
    careerScores[career] = mapScoreTo50to100(rawPercent);
  }

  const sortedCareers = Object.entries(careerScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return sortedCareers;
}
