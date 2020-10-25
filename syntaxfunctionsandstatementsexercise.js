//fruit
function main(type, weight, pricePerk) {

let weightInKg = (weight / 1000).toFixed(2);

let money = (weightInKg * pricePerk).toFixed(2);

console.log(`I need $${money} to buy ${weightInKg} kilograms ${type} .`);

}

//greatest common divisor
function main(x, y) {

gcd_two_numbers(x,y);

}



function gcd_two_numbers(x, y) {

if ((typeof x !== 'number') || (typeof y !== 'number'))

return false;

x = Math.abs(x);

y = Math.abs(y);

while (y) {

var t = y;

y = x % y;

x = t;

}

console.log(x);

}

//same numbers
function main(input) {

checkSameNum(input);

}



function checkSameNum(input) {



input = String(input);



let result = true;

let sum = 0;

let firstDigit = input[0];



for (let i = 0; i < input.length; i++) {

sum += +input[i];



if (input[i] !== firstDigit) {

result = false;

}

}

console.log(result);

console.log(sum);

}

//time to walk
function main(steps, meters, speed) {

let stepsNumber = Number(steps);

let stepsMetersHr = Number(meters);

let studentSpeed = Number(speed);



let distanceMeters = stepsNumber * stepsMetersHr;

let speedMetersSec = studentSpeed / 3.6;

let time = distanceMeters / speedMetersSec;

let rest = Math.floor(distanceMeters / 500);



let timeMin = Math.floor(time / 60);

let timeSec = Math.round(time - (timeMin * 60));

let timeHr = Math.floor(time / 3600);



if (timeHr < 10) {

console.log(timeHr + "0:" + (timeMin + rest) + ":" + timeSec);

} else {

console.log(timeHr + ":" + (timeMin + rest) + ":" + timeSec);

}

}

//calorie object
function main(arr) {

let obj = {};



for (let i = 0; i < arr.length; i += 2) {

obj[arr[i]] =arr[i + 1];

}

console.log(obj);

}