/* use "let" to declare a variable */
let courseCode = 'CSCI E-12';
let courseTerm = 'Fall 2025';
let courseTitle = 'Fundamentals of Web Application Development';

console.log(courseTitle);

/* you can concatenate strings with the + operator */
let message = courseCode + ', ' + courseTitle + ', ' + courseTerm;
console.log(message);

/* but mostly you'll see a template literal used with backticks 
   backticks `.  Backticks share a keyboard key with the ~ character,
   which is often to the left of the 1/! and under the escape.
   backticks ` are NOT single quotes '
   */
let message2 = `${courseCode}, ${courseTitle}, ${courseTerm}`;
console.log(message2);

/*
< > - HTML
` ` - JS literals
" "  - strings / html attribute values
' '  - strings
{ }  - CSS; JS
( )  - JS; CSS
[ ]  - JS; CSS
*/

/* you may see "var" insteald of "let".  Use "let" */
var schoolName = 'Harvard University';
console.log(schoolName);

/* what about "const"?  it can't be changed by another assignment statement;
   this signals intent that it won't change */
const YEAR_FOUNDED = 1636;
/* can't do this:
YEAR_FOUNDED = 1638;
*/
console.log(YEAR_FOUNDED);