// towns to json
function main(input) {
	let newArr = [];
	let finalArr = [];
	input.map((item) => {
		let tempItem = item.split("|");
		tempItem.shift();
		tempItem.pop();
		let trimItem = tempItem.map((x) => {
			return x.trim();
		});
		let fixedItem = trimItem.map((y) => {
			if (typeof y === "number") {
				return y;
			} else {
				return y;
			}
		});
		newArr.push(fixedItem);
	});

	let townKeys = newArr.shift();

	class ATown {
		constructor(town, lat, long) {
			this.Town = town;
			this.Latitude = lat;
			this.Longitude = long;
		}
	}
	for (town of newArr) {
		finalArr.push(
			new ATown(
				town[0],
				Number(Number(town[1]).toFixed(2)),
				Number(Number(town[2]).toFixed(2))
			)
		);
	}
	console.log(JSON.stringify(finalArr));
}

//score to html
function main(input) {
    scoreToHTMLTable(input);
}

function scoreToHTMLTable(input) { //['[{"name":"Peter","score":479},   {"name":"George","score":205}]']
    let scoreArr = JSON.parse(input);
    let html = "<table>\n";
    html += "  <tr><th>name</th><th>score</th></tr>\n";

    function htmlEscape(key) {
        const encoded = encodeURIComponent(key);
        return encoded;
    }
    for (let score of scoreArr) {
        html += `  <tr>`;
        html += `<td>${htmlEscape(score['name'])}</td>`;
        html += `<td>${htmlEscape(score['score'])}</td>`;
        html += `</tr>\n`;
    }
    console.log(html + "</table>");
}

//json to html table
function main(input) {
    jsonToHtml(input);
} //['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']
function jsonToHtml(input) {
    var arr = JSON.parse(input);
    // [{Name: 'Tomatoes & Chips', Price: 2.35}, { Name: 'J&B Chocolate', Price: 0.96 }]
    var html = "<table>
  <tr>".trim();
    //<table>
    //  <tr>
    makeKeyRow(arr);
    makeValueRow(arr);
    function makeKeyRow(arr) {
        for (let key of Object.keys(arr[0])) ////need to use for of to get keys of the object within the array.  If you tried arr with out [0], you will only get index numbers.
            //key = Name, Price
            html += `<th>${key}</th>`;
        html += "</tr>
";
    }
    function makeValueRow(arr) {
        for (let obj of arr) {
            //[{Name: 'Tomatoes & Chips', Price: 2.35}, { Name: 'J&B Chocolate', Price: 0.96 }]
            html += '  <tr>';
            for (let value of Object.keys(obj)) {
                //obj = {Name: 'Tomatoes & Chips', Price: 2.35} , { Name: 'J&B Chocolate', Price: 0.96 }
                //Object.keys(obj) = Name: , Price:
                //obj[value] = Tomatoes & Chips
                html += `<td>${htmlEscape(obj[value])}</td>`;
            }
            html += '</tr>
';
        }
        console.log(html + "</table> ".trim());
    }
    function htmlEscape(key) {
        const encoded = encodeURIComponent(key);
        return encoded;
    }
}

//sum by town
function main(input) {
    let townTotal = {};
    for (i = 0; i < input.length; i += 2) {
        if (!townTotal[input[i]]) {
            townTotal[input[i]] = Number(input[i + 1]);
        } else {
            townTotal[input[i]] += Number(input[i + 1]);
        }
    }
    console.log(JSON.stringify(townTotal));
}

//count words in a text
function main(inputArray) {
    stringArrToObjectWithCount(inputArray);
}

function stringArrToObjectWithCount(inputArray) {
    let result = {};
    for (const str of inputArray) { //["JS devs use Node.js for server-side JS.-- JS for devs"]
        let matches = str.match(/\w+/g);
        //['JS', 'devs', 'use', 'Node', 'js', 'for', 'server', 'side', 'JS', 'JS', 'for', 'devs']
        for (const word of matches) {
            //filling object, setting key (word) and value (count by setting it to 1 or ++ if word is found)
            if (result[word]) {
                result[word]++; //if the word exists in "result object", increment value
            } else {
                result[word] = 1; //if the word does not exist in object, set to 1
            }
        }
    }
    console.log(JSON.stringify(result)); //stringify
}

//populations in towns
function main(arrOfStrings) {
    let popCount = {};
    const toRemove = /\<-> | \<-> /gm;
    for (place of arrOfStrings) {
        let tempPlaceArr = place.replace(toRemove, "  ").split("  ");
        if (!popCount[tempPlaceArr[0]]) {
            popCount[tempPlaceArr[0]] = Number(tempPlaceArr[1]);
        } else {
            popCount[tempPlaceArr[0]] += Number(tempPlaceArr[1]);
        }
    }
    for (let key of Object.keys(popCount)) {
        console.log(`${key}: ${popCount[key]}`);
    }
}

//city markets
function main(input) {
    let towns = new Map();
    for (let sale of input) {
        let [town, product, quantityPrice] = sale.split(/\s*->\s*/);
        let [quantity, price] = quantityPrice.split(/\s*:\s*/);

        let income = Number(quantity) * Number(price);

        if (!towns.has(town)) {
            towns.set(town, new Map());
            towns.get(town).set(product, income)
        } else {
            if (!towns.get(town).has(product)) {
                towns.get(town).set(product, income);
            } else {
                towns.get(town).set(product, town.get(product) + income);
            }
        }
    }


    let print = '';

    for (let [index] of towns) {
        print += (`Town - ${index}\n`);
        for (let [product, price] of towns.get(index)) {
            print += (`$$$${product} : ${price}\n`);
        }
    }
    console.log(print);
}

//lowest prices in cities
function main(input) {
    let Products = new Map();

    for (let i = 0; i < input.length; i++) {
        let current = input[i].split(/\s+\|\s+/g);
        let town = current[0];
        let product = current[1];
        let price = current[2];

        if (!Products.has(product)) {
            Products.set(product, new Map);
            Products.get(product).set(town, Number(price))
        }
    }
    for (let [product, towns] of Products) {
        let minPrice = Number.MAX_VALUE;
        let minPriceTown = 0;
        for (let [town, price] of towns) {
            if (price < minPrice) {
                minPrice = price;
                minPriceTown = town;
            }
        }
        console.log(`${product} -> ${minPrice} (${minPriceTown})`);
    }
}

//extract unique words 
function main(arr) {
    let uniqueWordsExtract = new Set();
    for (let str of arr) {
        let words = str.toLowerCase().split(/\W/).filter(x => x !== "");
        for (let word of words) {
            uniqueWordsExtract.add(word);
        }
    }
    let uniqueWordsArray = [];
    for (str of uniqueWordsExtract) {
        uniqueWordsArray.push(str);
    }
    console.log(uniqueWordsArray.join(', '));
}
