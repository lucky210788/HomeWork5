var matrix = [
    ['.', '.', '.', '*', '.', '.', '.', '.', '*', '*', '.', '.', '.', '.', '.'],
    ['*', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '*', '.'],
    ['.', '.', '*', '.', '*', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['*', '.', '.', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.'],
    ['*', '*', '.', '.', '.', '.', '*', '*', '.', '*', '.', '.', '.', '.', '.'],
    ['.', '.', '*', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.'],
    ['.', '*', '*', '.', '*', '*', '.', '.', '.', '*', '.', '.', '.', '*', '*'],
    ['.', '.', '.', '.', '*', '.', '.', '*', '.', '*', '.', '.', '.', '.', '.'],
    ['.', '*', '.', '*', '.', '.', '*', '*', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '*', '*', '.', '*', '*', '.', '.', '.', '*', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '*', '.', '.', '*', '.', '*', '.', '.', '.', '.', '.'],
    ['*', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '*', '.'],
    ['.', '.', '*', '.', '*', '*', '.', '.', '.', '.', '.', '.', '.', '*', '.'],
    ['.', '.', '*', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
];

var animal = '@';
var animalPositionX = 5;
var animalPositionY = 5;

matrix[animalPositionX][animalPositionY] = animal;
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

// вывод массива
function printMatrix(arr) {
    var outPut = "";
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        var l = arr[i].length;
        for (var j = 0; j < l; j++) {
            outPut += arr[i][j] + " ";
        }
        outPut += "\n";
    }
    console.log(outPut);
}

printMatrix(matrix);

function motionAnimal(y) {
    var step = randomInteger(-1, 1);
    y = y + step;
    if (y < 0) {
        y = -y;
        return y;
    }
    if (y > 14) {
        y--;
        return y;
    }
    else {
        return y;
    }
}

setInterval(function () {
    console.clear();
    matrix[animalPositionX][animalPositionY] = '.';
    var way = randomInteger(0, 2);                          //куда идти?
    if (way == 1) {                                         //влево вправо
        var tempY = animalPositionY;
        animalPositionY = motionAnimal(animalPositionY);
        if (matrix[animalPositionX][animalPositionY] == '*') {
            animalPositionY = tempY;
        }
        matrix[animalPositionX][animalPositionY] = animal;
    }
    else if (way == 2) {                                    //вверх вниз
        var tempX = animalPositionX;
        animalPositionX = motionAnimal(animalPositionX);
        if (matrix[animalPositionX][animalPositionY] == '*') {
            animalPositionX = tempX;
        }
        matrix[animalPositionX][animalPositionY] = animal;
    }
    else {                                                  //по диагонали
        var tempY = animalPositionY;
        var tempX = animalPositionX;
        animalPositionX = motionAnimal(animalPositionX);
        animalPositionY = motionAnimal(animalPositionY);
        if (matrix[animalPositionX][animalPositionY] == '*') {
            animalPositionX = tempX;
            animalPositionY = tempY;
        }
        matrix[animalPositionX][animalPositionY] = animal;
    }
    printMatrix(matrix);
}, 300);