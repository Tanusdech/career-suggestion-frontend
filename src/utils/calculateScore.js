// src/utils/calculateScore.js

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
