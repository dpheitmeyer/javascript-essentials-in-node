/* use "let" to declare a variable
   arrays are lists of things, and are denoted by square brackets []
*/

let basket = ['pears','apples','oranges'];
console.log(basket);

console.log("=".repeat(20));

let sortedBasket = basket.sort();
console.log(sortedBasket);

/* or reverse() */
let reversedBasket = basket.reverse();
console.log(reversedBasket);

console.log(basket.length);

let message = `I have ${basket.length} fruits in my basket`;
console.log(message);

console.log("=".repeat(20));

/* you can address specific item positions in the array
   the first item is position 0 
   */
let firstItem = basket[0];
console.log(basket);
console.log(firstItem);
console.log(basket[1]);

let lastItem = basket[basket.length - 1];
console.log(lastItem);

console.log("=".repeat(20));
console.log("Push example:");

/* you can push an item onto the array */
basket.push('bananas');
console.log(basket);

console.log("=".repeat(20));

/* you can use map() to operate on each item of an array,
   and this produces a new array, leaving the original array
   unaltered */

let ucBasket = basket.map(
    (item) => {
        let ucItem = item.toUpperCase();
        return ucItem;
    }
);
console.log(basket);
console.log(ucBasket);

console.log("=".repeat(20));

/* and you can join() array items and produce a string */
let myBasketContents = basket.join(', ');
console.log(`I have ${myBasketContents} in my basket`);

/* and you can chain.methods.together */
let myBasketContentsSorted = basket.sort().join(', ');
console.log(`I have ${myBasketContentsSorted} in my basket`);
console.log("=".repeat(20));

/* split() to create an array from a string */
let newEnglandStates = 'MA,ME, NH, VT,RI,CT';
let newEnglandStatesList = newEnglandStates.split(',');
console.log(newEnglandStates);
console.log(newEnglandStatesList);
/* we can trim() */
console.log(newEnglandStates.split(',').map((i)=>i.trim()));

