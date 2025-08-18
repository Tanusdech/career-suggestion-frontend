/**
 * แปลงคะแนนดิบ 0–100 เป็นคะแนนในช่วง 50–100
 * @param {number} rawScore คะแนนดิบ (0-100)
 * @returns {number} คะแนนในช่วง 50-100 (ปัด 1 ตำแหน่งทศนิยม)
 */
export function mapScoreTo50to100(rawScore) {
  const minScore = 50;
  const maxScore = 100;

  if (rawScore < 0) rawScore = 0;
  if (rawScore > 100) rawScore = 100;

  const scaledScore = (rawScore / 100) * (maxScore - minScore) + minScore;

  return Math.round(scaledScore * 10) / 10; // ปัดทศนิยม 1 ตำแหน่ง
}

/**
 * ปรับคะแนนตามอันดับ top 3
 * @param {number} score คะแนนที่แปลงแล้วจาก mapScoreTo50to100
 * @param {number} rank อันดับ 1,2,3
 * @returns {number} คะแนนใหม่หลังคูณ multiplier และจำกัดสูงสุด 94.3
 */
export function applyRankMultiplier(score, rank) {
  const multipliers = [1.5, 1.3, 1.1]; // top 1,2,3
  const multiplier = multipliers[rank - 1] || 1; // อันดับอื่น ×1
  let newScore = Math.round(score * multiplier * 10) / 10;

  // จำกัดคะแนนสูงสุดไม่เกิน 94.3
  if (newScore > 94.3) newScore = 94.3;

  return newScore;
}






















// // src/utils/calculateScore.js

// /**
//  * แปลงคะแนนดิบ 0–100 เป็นคะแนนในช่วง 50–100
//  * @param {number} rawScore คะแนนดิบ (0-100)
//  * @returns {number} คะแนนในช่วง 50-100 (ปัด 1 ตำแหน่งทศนิยม)
//  */
// export function mapScoreTo50to100(rawScore) {
//   const minScore = 50;
//   const maxScore = 100;

//   if (rawScore < 0) rawScore = 0;
//   if (rawScore > 100) rawScore = 100;

//   const scaledScore = (rawScore / 100) * (maxScore - minScore) + minScore;

//   return Math.round(scaledScore * 10) / 10; // ปัดทศนิยม 1 ตำแหน่ง
// }
