let numbers = [10,20,10,30,20,40,10];
let duplicatefound = false;

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]) {
            duplicatefound = true;
            break;
        }
    }
    if (duplicatefound) {
        break;
    }
}

if (duplicatefound) {
    console.log("Duplicate found.");
} else {
    console.log("No duplicates found.");
}