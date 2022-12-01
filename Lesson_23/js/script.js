"use strict";

// console.log("Я учу JS");

// let userAge;

// userAge = 25;

// console.log(userAge);

// let user;
// let userName;
// userName = "Вася";
// user = userName;

// console.log(user);

// let userHeight = 145 / 0;
// console.log(userHeight);

// let Username;
// console.log(typeof Username);

// let someString = "Hello";
// let someStringLower = someString.toLowerCase();
// console.log(someStringLower);

// console.log(someString.includes("o"));

// let someNum = 20;
// let someNotRoundNum = 25.4;

// console.log(Math.min(1, 2, -2.11, -2, 2, -2.104));

// let one = "10";
// let two = 5;
// console.log(typeof (one - two));

// console.log(Number(one));

// let result = 3 + (3 * 10) / 5;
// console.log(result);

// let varOne = 10;
// let varTwo = 10;

// if (varOne) {
//   console.log("varOne is true");
// }

console.log("Видео один :");

console.log("35" + -"22");

console.log("35" * "22");

// console.log('558' > 22++) infinity

let userCounter = 0;
let newUsers = userCounter++;
console.log(newUsers);

console.log((!false && 11) || (18 && !""));

console.log("Видео два :");

console.log("Видео три :");

// ---------------
let number = 1;

for (let number = 1; number < 6; ++number) {
  console.log(number);
}

while (number < 6) {
  console.log(number);
  number++;
}

do {
  console.log(number);
  number++;
} while (number < 6);

// ---------------

// let num = 8;
// while (num) {
//   console.log(num);
//   num--;
// }

// ---------------

let numbe = 0;
while (numbe < 3) {
  console.log(`Число: ${numbe}`);
  numbe++;
}

// ---------------

firstFor: for (let num = 0; num < 2; num++) {
  for (let size = 0; size < 3; size++) {
    if (size == 1) {
      break firstFor;
    }
    console.log(size);
  }
}

console.log("Видео четыре :");

let numTrue = 1.005 + Number.EPSILON;
let numOne = Math.round(numTrue * 100) / 100;
console.log(numOne);

let value = "135.58px";
console.log(parseFloat(value));

let value_two = 58 + "Фрилансер";
if (isNaN(58 + "Фрилансер") == true) {
  console.log(`Pезультат виразу NaN`);
}

let numMax = Math.max(10, 58, 39, -150, 0);
console.log(numMax);

let someNum = 58.858;
console.log(Math.floor(someNum));

console.log("Видео пять :");

let text2 = `Фрилансер`;
console.log(text2[5]);
// console.log(text2.slice(5, 6));

let text4 = "фрилансер";
console.log(text4.toUpperCase());

let text5 = "фрилансер";
let subText = text5.slice(3, 6);
console.log(subText);
