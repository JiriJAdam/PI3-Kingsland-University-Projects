//data class
class Request {

    constructor(method, uri, version, message){
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false; 
    }
    
}


//tickets
// Write a program that manages a database of tickets. A ticket has a destination, a price and a status. Your
// program will receive two arguments - the first is an array of strings for ticket descriptions and the second is a string,
// representing a sorting criterion. The ticket descriptions have the following format:
// <destinationName>|<price>|<status>
// Store each ticket and at the end of execution return a sorted summary of all tickets, sorted by either destination,
// price or status, depending on the second parameter that your program received. Always sort in ascending order
// (default behavior for alphabetical sort). If two tickets compare the same, use order of appearance. See the examples
// for more information.

//['Philadelphia|94.20|available',   'New York City|95.99|available',   'New York City|95.99|sold',   'Boston|126.20|departed'], 'destination'
function main(ticketArr, sortCriteria) {
    const outputArr = [];

    for(let ticket of ticketArr){
        let [destination, price, status] = ticket.split('|');
    
        class Ticket {
            constructor(destination, price, status) {
                this.destination = destination;
                this.price = price;
                this.status = status;
            }
        }
    
        let newTicket = new Ticket(destination, price, status);
        outputArr.push(newTicket);
    
        sortCriteria == "destination" ? outputArr.sort(sortByDestination) :
        sortCriteria == "price" ? outputArr.sort(sortByPrice) :
        sortCriteria == "status" ? outputArr.sort(sortByStatus) : 0;
    }   
    function sortByDestination(a, b){
        return a.destination.localeCompare(b.destination);
    }
    function sortByPrice(a, b){
        return Number(a.price) - Number(b.price);
    }
    function sortByStatus(a, b){
        return a.status.localeCompare(b.status);
    } 
    console.log(outputArr);
}

main(['Philadelphia|94.20|available',   'New York City|95.99|available',   'New York City|95.99|sold',   'Boston|126.20|departed'], 'destination' );
//[
//     Ticket { destination: 'Boston', price: '126.20', status: 'departed' },
//     Ticket {
//       destination: 'New York City',
//       price: '95.99',
//       status: 'available'
//     },
//     Ticket {
//       destination: 'New York City',
//       price: '95.99',
//       status: 'sold'
//     },
//     Ticket {
//       destination: 'Philadelphia',
//       price: '94.20',
//       status: 'available'
//     }
//]

//unity
class Rat { /// *** obj constructor and functions within
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }
    getRats() {
        return this.unitedRats;
    }
    toString() {
        let names = this.name;
        if (this.unitedRats.length) {
            for (let i = 0; i < this.unitedRats.length; i++) {
                names += `\n##${this.unitedRats[i].name}`;
            }
        }
        return names;
    }
    unite(otherRat) {
        this.unitedRats.push(otherRat);
        //console.log(unitedRats);
    }
}

//length limit


class Stringer {

    constructor(innerString, innerLength) {

        this.innerString = innerString;

        this.innerLength = innerLength;

        this.preservedVal = innerString;

        this.modLength = innerLength;

    }

    toString() {

            let strCompare = this.preservedVal;

            let strLen = strCompare.length;

            // console.log(this.modLength)

            // console.log(this.innerLength)

            // console.log(this.innerString)

            if (Number(this.modLength) === 0) {

                this.innerString = '...';

            } else if (Number(this.modLength) < Number(this.innerLength)) {

                let minusNum = (Number(this.innerLength) - Number(this.modLength) - 1);

                let modWord = this.innerString;

                let otherVar = modWord.slice(0, minusNum);

                this.innerString = otherVar + "...";

            }

            if (Number(this.modLength) >= strLen) {

                this.innerString = this.preservedVal;

            }

            return this.innerString;

    }  

    increase(num) {

        let addNum = (Number(this.modLength) + num);

        if (addNum > Number(this.innerLength)) {

            addNum = Number(this.innerLength);

        }

        this.modLength = addNum

    }

    decrease(num) {

        let minusNum = (Number(this.modLength) - num);

        if (minusNum < 0) {

            minusNum = 0;

        }

        this.modLength = minusNum;

    }

}

let test = new Stringer("Test", 5);

console.log(test.toString()); //Test

test.decrease(3);

console.log(test.toString()); //Te...

test.decrease(5);

console.log(test.toString()); //...

test.increase(4);

console.log(test.toString()); //Test



//sorted list
// Implement a class, which keeps a list of numbers, sorted in ascending order. It must support the following

// functionality:

//  add(element) - adds a new element to the collection

//  remove(index) - removes the element at position index

//  get(index) - returns the value of the element at position index

//  size - number of elements stored in the collection

// The correct order of the elements must be kept at all times, regardless of which operation is called. Removing and retrieving elements shouldn't work if the provided index points outside the length of the collection (either throw an error or do nothing). Note the size of the collection is not a function.

// What to submit?

// You are only required to submit the List class. No need to include the codes from the example.

// Class Signature: class List

class List {

    constructor() {

        this.arr = [];

        this.size = 0;

    }

    add(element) {

        this.arr.push(element);

        this.arr.sort((a, b) => a - b);

        this.size++;

        return this.arr;

    };

    remove(index) {

        if (index >= 0 && index < this.arr.length) {

            this.arr.splice(index, 1);

            this.arr.sort((a, b) => a - b);

            this.size--;

            return this.arr;

        }

    }

    get(index) {

        if (index >= 0 && index < this.arr.length) {

            return this.arr[index];

        }

    }

}

                                        

let list = new List();                                      

list.add(5);                                                

list.add(6);

list.add(7);

console.log(list.get(1)); //6

list.remove(1);

console.log(list.get(1)); //7

// Input / Output

// All functions that expect input will receive data as parameters. Functions that have validation will be tested with both valid and invalid data. Any result expected from a function should be returned as it's result.

// Your add and remove functions should return a class instance with the required functionality as it's result.

// What to submit?

// You are only required to submit the List class. No need to include the codes from the example above.

// Class Signature: class List