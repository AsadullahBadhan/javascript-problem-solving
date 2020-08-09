function feetToMile(feet) {
    var mile = 0;
    if (feet < 0) {
        return 'Distance can not be a nagetive number';
    } else {
        mile = feet / 5280;
    }
    return mile;
}


function woodCalculator(chair, table, bed) {
    var totalWood = 0;
    if (chair < 0 || table < 0 || bed < 0) {
        return "Quantity can not be nagetive number"
    } else {
        totalWood = chair + table * 3 + bed * 5;
    }
    return totalWood;
}


function brickCalculator(floorNumber) {
    var buildingHeight = 0;
    if (floorNumber < 0) {
        return "Floor number can not be a nagetive number"
    }
    else if (floorNumber <= 10) {
        buildingHeight = floorNumber * 15;
    }
    else if (floorNumber <= 20) {
        buildingHeight = (floorNumber - 10) * 12 + 150;
    }
    else {
        buildingHeight = (floorNumber - 20) * 10 + 270;
    }

    return buildingHeight * 1000;
}

function tinyFriend(namesList) {
    var smallestName = "";
    var characterCount = [];
    for (var i = 0; i < namesList.length; i++) {
        var name = namesList[i];
        if (name.length <= 0) {
            return "Please enter some valid name, you should not let it empty"
        } else {
            characterCount.push(name.length);
        }
    }
    var lowest = Math.min.apply(null, characterCount);
    var index = characterCount.indexOf(lowest);
    smallestName = namesList[index];
    return smallestName;
}