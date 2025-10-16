
let url = 'https://api.nobelprize.org/2.1/nobelPrizes?nobelPrizeYear=1980';

console.log(url);
let response = await fetch(url);
let data = await response.json();

console.log(data);
/* will also see this
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
*/



