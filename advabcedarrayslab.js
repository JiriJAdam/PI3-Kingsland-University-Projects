//sum first last 
function main(arr) {
    let n1 = Number(arr[0]);
    let n2 = Number(arr[arr.length - 1]);
    console.log(n1 + n2);
}

//even position element
function main(arrayStr) {
    let result = [];

    for (let i in arrayStr) {
        if (i % 2 == 0) {
            result.push(arrayStr[i]);
        }
    }
    console.log(result.join(" "));
}

//Negative / Positive Numbers
function main(arr) {
    arr = arr.map(Number);

    let result = [];

    for (element of arr) {
        if(element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }
    }
    result.forEach(el => console.log(el));
}

//Last K Numbers Sequence 
function main(length, k) {
    let result = [1];

    for (let i = 1; i < length; i++) {
        let current = result.slice(k * -1)
        .reduce((a, b) => a + b);
        result[i] = current;
    }
    console.log(result.join(' '));
}

//Process Odd Numbers
function main(arr) {
    let result = arr
    .filter((arr, x) => x % 2 == 1) 
    .map(x => 2 * x)
    .reverse();
    console.log(result.join(' '));
}

//Smallest Two Numbers
function main(arr) {
    arr = arr.map(Number);
    console.log(arr.sort((a,b) => a-b).slice(0,2).join(" "));
}

//Biggest Element
function main(arr) {
    let el1 = arr[0];
    let el2 = arr[1];
    let newArr = el1.concat(e12);
    console.log(Math.max(...newArr));
}

//Diagonal Sums
function main(input) {
    matrixDiagonalSum(input);
}

function matrixDiagonalSum(input) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = input[0].length - 1;
    input.forEach(array => {
        firstDiagonal += array[firstIndex++];
        secondDiagonal += array[secondIndex--];
    });
    console.log(`${firstDiagonal} ${secondDiagonal}`);
}

//Equal Neighbors
function main(matrix) {
    let neighbors = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row < matrix.length - 1) {
                if (matrix[row][col] == matrix[row + 1][col]) {
                    neighbors++;
                }
            }
            if (col < matrix[row].length) {
                if (matrix[row][col] == matrix[row][col + 1]) {
                    neighbors++;
                }
            }
        }
    }
    console.log(neighbors);
}