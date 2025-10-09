/* define functions with the "function" keyword */
function double(n) {
    return 2*n;
}
console.log("double a value");
console.log(double(2));
let newValue = double(687);
console.log(newValue);
console.log(double('david'));

console.log("=".repeat(20));

/* there is the "arrow" notation to define functions */
const square = (n) => {return n*n};

function anotherSquare(n) {
    return n*n;
}

console.log(square(80));

console.log("-".repeat(20));

let numbers = [2,4,6,8];
let squareNumbers = numbers.map(
    (n) => {return n*n }
)
console.log(numbers);
console.log(squareNumbers);



