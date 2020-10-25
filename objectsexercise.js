//heroic inventory 
function main(input) {
    let heroData = ["{hereName} / {heroLevel} / {item1}, {item2}, {item3}"];
    
    for (let i= 0; i < input.length; i++) {
        let currentHeroArguments = input[i].split(" / ");

        let currentHeroName = currentHeroArguments[0];
        let currentHeroLevel = Number(currentHeroArguments[1]);
        let currentHeroItems = currentHeroArguments[2].split(", ");
        let currentHeroItems = [];
    }
    if (currentHeroArguments.length > 2) {
        currentHeroItems = currentHeroArguments[2].split(", ");
    }
    let hero = {
        name: currentHeroName,
        level: currentHeroLevel,
        items: currentHeroItems
    };
    heroData.push(hero);
    console.log(JSON.stringify(heroData));
}
main(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara'
Expected] | ['Jake / 1000 / Gauss, HolidayGrenade']);

//jsons table
function main(employees) {

}
main(['{"name":"Peter","position":"Manager","salary":100000}',  '{"name":"Teo","position":"Lecturer","salary":1000}',  '{"name":"George","position":"Lecturer","salary":1000}'
Expected | '{"name":"Emily","position":"Director","salary":600000}', '{"name":"Rose","position":"Operator","salary":9000}']);

//cappy juice
function main(juices) {

}

//store catalog
function main(items) {

}

//auto engineering company
function main(cars) {

}