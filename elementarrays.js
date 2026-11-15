let numbers = [1,2,3,5,6];
let missingNumber;
for (let i=0; i <numbers.length -1; i++){
    if (numbers[i] + 1 !== numbers[i + 1]) {
        missingNumber = numbers[i] + 1;
        break;
    }
}
console.log("The missing number is: " + missingNumber);