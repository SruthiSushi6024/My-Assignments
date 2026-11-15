let numbers = 121;
let reversedNumbers = 0;
let originalNumbers = numbers;

while (numbers > 0) {
    let digit = numbers % 10;
    reversedNumbers = reversedNumbers * 10 + digit;
    numbers = Math.floor(numbers / 10);
}

if (originalNumbers === reversedNumbers) {
    console.log(originalNumbers + " is a palindrome.");
} else {
    console.log(originalNumbers + " is not a palindrome.");
}
