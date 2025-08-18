// src/utils/careerData.js
export const careerList = [
  'accountant','auditor','taxConsultant','marketer','adminStaff','officeManager','hrManager','salesManager','businessAnalyst','entrepreneur',
  'webDeveloper','softwareEngineer','systemAdministrator','databaseAdministrator','networkEngineer','softwareTester','qaEngineer','dataAnalyst','dataScientist','digitalMarketer','gameDeveloper','itSupport','uiuxDesigner',
  'logisticsOfficer','supplyChainAnalyst','warehouseManager',
  'flightAttendant','airTrafficController',
  'graphicDesigner','graphicArtist','fashionDesigner','textileTechnologist','patternMaker','photographer','photographerEditor','contentCreator','socialMediaManager','copywriter','eventPlanner','painter','sculptor','actor','musician',
  'hotelManager','frontOfficeManager','tourGuide','travelConsultant',
  'chef','nutritionist','foodScientist',
  'journalist','translator','translatorInterpreter','translatorEditor','broadcaster','filmEditor','prOfficer',
  'consultant','csrManager','trainingSpecialist'
];

// ถ้าคุณใช้ cluster ก็สร้าง mapping แยกด้วย
export const clusterMapping = {
  finance: ['accountant','auditor','taxConsultant'],
  business: ['marketer','adminStaff','officeManager','hrManager','salesManager','businessAnalyst','entrepreneur'],
  tech: ['webDeveloper','softwareEngineer','systemAdministrator','databaseAdministrator','networkEngineer','softwareTester','qaEngineer','dataAnalyst','dataScientist','digitalMarketer','gameDeveloper','itSupport','uiuxDesigner'],
  logistics: ['logisticsOfficer','supplyChainAnalyst','warehouseManager'],
  aviation: ['flightAttendant','airTrafficController'],
  design: ['graphicDesigner','graphicArtist','fashionDesigner','textileTechnologist','patternMaker','photographer','photographerEditor','contentCreator','socialMediaManager','copywriter','eventPlanner','painter','sculptor','actor','musician'],
  hospitality: ['hotelManager','frontOfficeManager','tourGuide','travelConsultant'],
  food: ['chef','nutritionist','foodScientist'],
  media: ['journalist','translator','translatorInterpreter','translatorEditor','broadcaster','filmEditor','prOfficer'],
  consulting: ['consultant','csrManager','trainingSpecialist']
};
