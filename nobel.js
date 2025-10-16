import prizeData from "./data/nobel-prizes.json"  with { type: "json" };

let prizes = prizeData.nobelPrizes;
console.log(prizes.length);
let allYears = [];
for (p of prizes) {
  console.log(p.awardYear);
  allYears.push(p.awardYear);
}
console.log(allYears);
let uniqueYears = [];
/*    for (year of allYears) {
        if (uniqueYears.includes(year)) {
            // skip it
        } else {
            uniqueYears.push(year);
        }
    }
        */
for (year of allYears) {
  if (!uniqueYears.includes(year)) {
    uniqueYears.push(year);
  }
}
console.log(uniqueYears);
/* let's see how "filter" method works */
/* what prizes were awarded in 2025? */
let prizes2025 = prizes.filter(
  (p) => {
    return p.awardYear === "2025";
  }
  /* if awardYear is 2025, then that is true, and 
    it will 'pass' the filter (filter in).  otherwise, the false return will filter it  out. */
);
console.log(`how many prizes in 2025: ${prizes2025.length}`);

/* ok, now that we've seen filter, let's
   do it for each unique year! */

/* and now how to get prizes sorted for each year? */
let prizesByYear = [];
for (year of uniqueYears) {
  prizesInYear = prizes.filter((p) => {
    return p.awardYear === year;
  });
  console.log(`prizes in ${year} is ${prizesInYear.length}`);
  let yearData = {
    year: year,
    prizes: prizesInYear,
  };
  prizesByYear.push(yearData);
}
console.log(prizesByYear);
