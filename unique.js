import prizeData from "./data/nobel-prizes.json" with { type: "json" };

console.log(Object.keys(prizeData));

let prizes = prizeData.nobelPrizes;
console.log(prizes.length);
let allYears = [];
for (const p of prizes) {
  allYears.push(p.awardYear);
}
let uniqueYears = [];
console.log(allYears);
for (const year of allYears) {
  if (!uniqueYears.includes(year)) {
    uniqueYears.push(year);
  }
}
console.log("Unique years from .includes and .push");
console.log(uniqueYears);

console.log("Unique years from array --> Set --> array");
let uniqueA = Array.from(new Set(prizes.map(p => p.awardYear)));
console.log(uniqueA);

console.log("Unique years from array --> Set --> array, except using the spread ... operator");
let uniqueB = [... new Set(prizes.map(p=>p.awardYear))];
console.log(uniqueB);