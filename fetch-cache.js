import eleventyFetch from "@11ty/eleventy-fetch";

async function getNobelPrizeData() {
  let url = "https://api.nobelprize.org/2.1/nobelPrizes?nobelPrizeYear=1990";
  let data = await eleventyFetch(url, 
    {
      duration: "1d",
      type: "json"
    }
  );
  return data;
}

let prizesData = await getNobelPrizeData();
console.log(prizesData);
