let numbers = [1, 5, 8];
numbers[1] = 10;
console.log(numbers);

let matrix = [
    ["hello", "world"],
    [3, 5, 7],
    ["sting", 10],
]
matrix[3] = ["my name", "is", "Danylo"];
console.log(matrix);


let numbersA = [1,5,8,9];
let total = 0;

for (let i = 0; i < numbersA.length; i ++) {
    total += numbersA[i];
}

console.log(total);

let numbersB = [1, 3, 7, 10, 2];

for (let i = 0; i < numbersB.length; i ++) {
    console.log(numbersB[i]);
}

let matrixA = ["str", "Danylo", "Mango", "Lviv", "world"]

for (let i = 0; i < matrixA.length; i++) {
    
        if (matrixA[i].length < 5) {
            continue;
        }

        console.log(matrixA[i]);

}

const numbersC = [51, 18, 13, 24, 7, 85, 19, 101, 1, 11];
let biggestNumber = numbersC[0];

for (let i = 0; i < numbersC.length; i++) {
    if (biggestNumber < numbersC[i]) {
        biggestNumber = numbersC[i];
    }
}

console.log(biggestNumber);

const numbersD = [51, 18, 13, 24, 7, 85, 19, 101, 1, 11];

for (let i = 0; i < numbersD.length; i++) {
    if (numbersD[i] % 2 !== 0) {
        continue;
    }
    console.log(numbersD[i]);  
}