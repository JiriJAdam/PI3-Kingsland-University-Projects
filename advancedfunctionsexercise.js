//sort array 
function main(inputArray, order) {
    let sortOrder = choice(order)
    
    console.log(inputArray.sort(sortOrder));

}

function choice(order) {
    switch(order) {
        case "asc":
            return (a, b) => a - b;
        case "desc":
            return (a, b) => b - a;
    }
}

//argument info
function main(arguments) {
    
}

//functional sum
function main(a){
    console.log((function () {
        let sum = a;

    return function add(number) {
        sum += number;
        add.toString = function () {
            return sum;
        };
        return add;
    }
    }))();
}

//personal bmi
function main(name, age, weight, height) {
    let kilograms = "";
    let centimeters = "";
    let underweight = "";

    if underweight <= 18.5 {

    }
}

//vector math