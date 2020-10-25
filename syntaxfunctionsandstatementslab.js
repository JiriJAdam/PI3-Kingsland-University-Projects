//string length
function main(str1, str2, str3) {

let strLength1 = Number(str1.length);

let strLength2 = Number(str2.length);

let strLength3 = Number(str3.length);

let sum = (strLength1 + strLength2 + strLength3);

let average = Math.floor(sum / 3);

console.log(sum);

console.log(average);

}

//math operations 
function main(num1, num2, str) {

let operation = eval(num1 + str + num2);

console.log(operation);

}

//sum of numbers n-m
function main(n, m) {

let num1 = +n;

let num2 = +m;

let result = 0;

for (let i = num1; i <= num2; i++) {
result += i;
}

console.log(result);

}

//largest number 
function main(num1, num2, num3) {

let result;



if (num1 >num2 && num1 > num3) {

result = num1;

} else if (num2 > num1 && num2 > num3) {

result = num2;

} else if (num3 > num1 && num3 > num2) {

result = num3;
}

console.log(`The largest number is ${result}.`);

}

//circle area
function main(input) {

let result;

let inputType = typeof(input);

if (inputType === 'number') {

result = Math.pow(input, 2) * Math.PI;

console.log(result.toFixed(2));

} else {

console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);

}

}

//square of stars
function main(n) {

squareOfStars(n);

}



function squareOfStars(n) {

for (let i = 1; i <= n; i++) {

let stars = "*";

for (let j = 1; j < n; j++) {

stars += " *";

}

console.log(stars);

}

}

//day of week
function main(day) {

dayOfWeek(day);

}



function dayOfWeek(day) {

switch (day) {

case 'Monday':

console.log(1);

break;



case 'Tuesday':

console.log(2);

break;



case 'Wednesday':

console.log(3);

break;



case 'Thursday':

console.log(4);

break;



case 'Friday':

console.log(5);

break;



case 'Saturday':

console.log(6);

break;



case 'Sunday':

console.log(7);

break;



default:

console.log('error');

}



}

//aggregate elements 
function main(elements) {

aggregateElements(elements);

}



function aggregateElements(elements) {

aggregate(elements,0, (a,b) => a + b);

aggregate(elements,0, (a,b) => a + 1 / b);

aggregate(elements,'', (a,b) => a + b);



function aggregate(arr, initVal, func) {

let val = initVal;

for (let i = 0; i < arr.length; i++)

val = func(val, arr[i]);

console.log(val.toFixed(4));

}

}

//words uppercase
function main(input) {

wordsUppercase(input);

}



function wordsUppercase(input) {

console.log(input.replace(/[^a-zA-Z]/g, "").toUpperCase().split(' ').join(', '));

}