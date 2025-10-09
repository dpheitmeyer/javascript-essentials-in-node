let cscie12Info =    {
      "code": "CSCI 12",
      "title": "Fundamentals of Web Application Development",
      "crn": "15078",
      "meets": "W 8:10-10:10p",
      "instr": "David P. Heitmeyer",
      "start_date": "2025-09-02",
      "term": "Fall 2025",
      "end_date": "2025-12-20",
      "catalog_url": "https://courses.dce.harvard.edu/?details&srcdb=202601&crn=15078",
      "meeting_times": [
        {
          "meet_day": "2",
          "start_time": "2010",
          "end_time": "2210"
        }
      ],
      "subject_code": "CSCI",
      "sort_string": "csci00012"
    };
console.log(cscie12Info);


/* you can access by key */
console.log(cscie12Info['title']);

/* iterate over object with for..in */
for (const key in cscie12Info) {
   console.log(`key   is ${key}`);
   console.log(`value is ${cscie12Info[key]}`);
   console.log('--');
}
console.log('='.repeat(15));

const keys = Object.keys(cscie12Info);
console.log(keys);

const entries = Object.entries(cscie12Info);
console.log(entries);