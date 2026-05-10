//NPS segment response provided as integer 0-10 range
//Divided into three categories Promoters(9-10), Passivers(7-8), Detractors(0-6)
//Formula: NPS = (% of Promoters) - (% of Detractors)

function calculateNPS(responses) {
  if (!Array.isArray(responses) || responses.length === 0) {
    return 0;
  }
  let nPromoters = 0,
    validCount = 0,
    nDetractors = 0;
  for (let v of responses) {
    let score = v;

    if (
      typeof score !== "number" ||
      Number.isNaN(score) ||
      score < 0 ||
      score > 10
    ) {
      continue;
    }
    validCount++;

    if (score <= 10 && score > 8) {
      nPromoters++;
    }
    if (score <= 6 && score >= 0) {
      nDetractors++;
    }
  }
  if (validCount === 0) {
    return 0;
  }

  const NPS = ((nPromoters - nDetractors) / validCount) * 100;
  return Math.round(NPS);
}

console.log(
  calculateNPS([
    10,
    9, // Promoters (9-10)
    8,
    7, // Passives (7-8)
    6,
    5,
    0, // Detractors (0-6)
    "Amazing!", // INVALID (String)
    null, // INVALID (Null)
    undefined, // INVALID (Undefined)
    15, // INVALID (Out of range)
    -2, // INVALID (Out of range)
    NaN,
  ]),
);
