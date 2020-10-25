//add
function main(num) {
    return function(secondNum) {
        return secondNum + num;
    };
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));

//currency format
function reduceFuncParams(currencyFormatter) {
    let separator = ",";
    let symbol = "$";
    let symbolFirst = true;

    let dollarFormatter = value => currencyFormatter(separator, symbol, symbolFirst, value);
        return dollarFormatter;
}
function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += Math.trunc(value) + separator;
    if (symbolFirst) return symbol + ''+ result;
        else return result + '' + symbol;
}
let dollarFormatter = reduceFuncParams(currencyFormatter);
console.log(dollarFormatter(5345)); //$5345.00
console.log(dollarFormatter(3.1429)); //$3.14
console.log(dollarFormatter(2.709)); //$2.71
//Another way to do it
function main(currencyFormatter) {
    let separator = ",";
    let symbol = "$";
    let symbolFirst = true;
    let dollarFormatter = value => currencyFormatter(separator, symbol, symbolFirst, value);
    return dollarFormatter;
}

//filter employees
function main(jsonArray, criteria) {
    let employeeArray = JSON.parse(jsonArray);
    let searchCriteria = criteria.split('-')
        //searchCriteria[0] -->> key for gender
        //searcCriteria[1] ->> value of the key 'female'
    let employeeFilter = employeeArray.filter((employeeObject) => {
        return employeeObject[searchCriteria[0]] == searchCriteria[1]
    })
    for (let index in employeeFilter) {
        console.log(`${index}. ${employeeFilter[index].first_name} ${employeeFilter[index].last_name} - ${employeeFilter[index].email}`)
    }
}

//command processor
function main() {
    let string = "";

    return {
        append:(inputString) => {
            string += inputString;
        },
        removeStart:(num2Remove) => {
            string = string.substring(0, string.length - num2Remove);
        },
        removeEnd:(num2Remove) => {
            string = string.substring(0, string.length - num2Remove);
        },
        print:() => {
            console.log(string);
        }
    };
}
let firstZeroTest = main();
let secondZeroTest = main();
