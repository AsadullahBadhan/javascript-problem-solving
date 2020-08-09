function feetToMile(feet) {
    if (feet < 0) {
        return 'Distance can not be a nagetive number';
    } else {
        return feet / 5280;
    }
}

// console.log(feetToMile(5893));

function woodCalculator(chair, table, bed) {
    var totalWood = 0;
    if (chair < 0 || table < 0 || bed < 0) {
        return "Quantity can not be nagetive number"
    } else {
        totalWood = chair + table * 3 + bed * 5;
    }
    return totalWood;
}

// var result = woodCalculator(20, 5, 10);
// console.log(result);

