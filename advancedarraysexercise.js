//Print an Array with a Given Delimiter
function main(arrOfStrings) {
    printArrWithDelimiter(arrOfStrings);
}

function printArrWithDelimiter(arrOfStrings) {
    let delimiter = arrOfStrings.pop();
    console.log(arrOfStrings.join(delimiter));
}

//Print Every N-th Element from an Array
function main(arrOfStrings) {
    printEveryNthElement(arrOfStrings);
}

function printEveryNthElement (arrOfStrings) {
    let n = +(arrOfStrings.pop());
    for (i = 0; i < arrOfStrings.length; i += n) {
        nthElementsArr = arrOfStrings[i];
        console.log(nthElementsArr);
    }
}

//Add and Remove Elements from an Array
function main(input) {
    let result = [];
    let number = 1;

    for (let command of input) {
        if (command == "add") {
            result.push(number);
        } else {
            result.pop();
        }
        number++;
    }
    if (result.length == 0) {
        console.log("Empty");
    } else {
        result.forEach(element => console.log(element));
    }
}

//Rotate Array
function main(arrOfStrings) {
    rotateElementsInArray(arrOfStrings);
}

function rotateElementsInArray(arrOfStrings) {
    let rotationNum = arrOfStrings.pop();
    let i = 0;

    while (i < rotationNum) {
        arrOfStrings.unshift(arrOfStrings.pop());
        i++;
    }
    console.log(arrOfStrings.join(' '));
}

//Extract Increasing Subsequence from an Array
function main(numArr) {
    numArr = numArr.map(Number);
    let result = [];
    let biggest = numArr[0];

    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] >= biggest) {
            result.push(numArr[i]);
            biggest = numArr[i];
        }
    }
    console.log(result.join('\n'));
}