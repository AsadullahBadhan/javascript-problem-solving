function feetToMile(feet) {
    var mile = 0;
    if (feet < 0) {
        return 'Distance can not be a nagetive number';
    } else {
        mile = feet / 5280;
    }
    return mile;
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

function brickCalculator(floorNumber) {
    var height = 0;
    if (floorNumber < 0) {
        return "Floor number can not be a nagetive number"
    }
    else if (floorNumber <= 10) {
        height = floorNumber * 15;
    }
    else if (floorNumber <= 20) {
        height = (floorNumber - 10) * 12 + 150;
    }
    else {
        height = (floorNumber - 20) * 10 + 270;
    }

    return height * 1000;
}

var brick = brickCalculator(14);
console.log(brick);