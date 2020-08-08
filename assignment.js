// 1.feetToMile(feet){
// }
// 2.woodCalculator(chiar, table, khat){
// return total amount of wood.

// chair = 1;
// table = 3;
// khat = 5;
// }

// 3.brickCalculator(floor){
// return total amount brick needed for the building

// frist10 = 15feet;
// second10 = 12feet;
// rest = 10feet;
// each feet need 1000 brick;
// }

// 4.tinyFriend(array){
// array of string will given return the smallest string;
// }

function feetToMile(feet) {
    if (feet < 0) {
        return 'Distance can not be a nagetive number';
    } else {
        return feet / 5280;
    }
}

// console.log(feetToMile(5893));

function woodCalculator(chiar, table, bed) {
    var totalWood = 0;
    totalWood = chiar + table * 3 + bed * 5;
    return totalWood;
}

var result = woodCalculator(1, 5, 1);
console.log(result);