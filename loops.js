let basket = ["bananas", "pears", "apples", "oranges"];
console.log(basket);

/* for..of */
console.log("Try using for..of");
/* iterate or loop over an array with for..of */
for (item of basket) {
  console.log(item.toUpperCase());
}

console.log("=".repeat(20));

console.log("Try using .forEach()");
/* or forEach() */
basket.forEach((item) => {
  console.log(item);
});
console.log("=".repeat(20));

console.log("Try using .forEach() and getting index value");
basket.forEach((item, index) => {
   console.log(`Item ${index} is ${item}`)
});

/* remember that .map() is also a way to iterate
in a special case way 
*/