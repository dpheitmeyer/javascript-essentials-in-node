import prizes from './data/nobel-prizes.json' with { type: "json" };

console.log(prizes.nobelPrizes.length);

/* Use .filter() */
const prizes2025 = prizes.nobelPrizes.filter(
   (p)=>{
      return p.awardYear === '2025';
   });
console.log(prizes2025.length)