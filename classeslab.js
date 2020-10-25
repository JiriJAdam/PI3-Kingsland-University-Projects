//rectangle
class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    calcArea() {
        return this.width * this.height;
    }
}

//person
class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

//get persons


//circle
class Circle {
    constructor(radius) {
        // "radius is now === the num 2 from line 17
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    set diameter(diameter) {
        this.radius = diameter / 2;
        //console.log("this dot radius ", this);
    }
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

//point distance
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(point1, point2) {
        let distX = point1.x - point2.x;
        let distY = point1.y - point2.y;
        return Math.hypot(distX, distY);
    }
}

//cards
function main() {
    return (function() {
        let cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let suitsObj = {
            SPADES: "♠",
            HEARTS: "♥",
            DIAMONDS: "♦",
            CLUBS: "♣"
        };
        class Card {
            constructor(face, suits) {
                if (cardValues.indexOf(face) != -1) {
                    this._face = face;
                } else {
                    console.log("Error");
                }
                if (Object.values(suitsObj).indexOf(suits) != -1) {
                    this._suits = suits;
                } else {
                    console.log("Error");
                }
            }
            get face() {
                return this._face;
            }
            set face(faceValue) {
                if (cardValues.indexOf(faceValue) != -1) {
                    this._face = faceValue;
                }
            }
            get suits() {
                return this._suits;
            }
            set suits(suitsValue) {
                if (Object.values(suitsObj).indexOf(suitsValue) != -1) {
                    this._suits = suitsValue;
                } else {
                    console.log("Error");
                }
            }
        }
        return {
            Suits: suitsObj,
            Card: Card,
        }
    }());
}