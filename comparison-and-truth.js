/* first, types */
let term = "Fall 2025";

console.log(term);
console.log(typeof(term));


if (term == "Fall 2025") {
    console.log(`term ${term} is the current term`);
} else {
    console.log(`term ${term} is NOT the current term`);
}

/* looks like a number, but is a string */
let year = "2025";
console.log(year);
console.log(typeof(year));


if (year == 2025) {
    console.log("we are in 2025");
} else {
    console.log("we are NOT in 2025");
}

let yearInteger = parseInt(year);
console.log("=".repeat(20));
console.log(typeof(yearInteger));
console.log("=".repeat(20));

let name1 = "David";
let name2 = "Mike";
if (name1 != name2 ) {
    console.log("that is expected");
}

console.log("=".repeat(20));
console.log("Using 'and' and 'or', or '&&' and '||'")
let isLoggedIn = false;
let user = "David"

isLoggedIn && console.log(`Hello ${user}`);

let firstName = "Michael";
let nickName = ''
console.log("=".repeat(20));
let greetingName = nickName || firstName;
console.log(`Greet as ${greetingName}`);