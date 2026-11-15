let text ="javascript";
let result = "";
for (let i = 0; i < text.length; i++) {
    if (i%2 === 0) {
        result += text[i].toUpperCase();
    } else {
        result += text[i];
    }   
}

console.log(result);