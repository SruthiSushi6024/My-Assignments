let string1 = "listen";
let string2 = "silent";

string1 = string1.toLowerCase().replace(/\s/g, "");
string2 = string2.toLowerCase().replace(/\s/g, "");

let isAnagram = true;

if (string1.length !== string2.length) {
    isAnagram = false;
} else {
    for (let i = 0; i < string1.length; i++) {
        let count1 = 0;
        let count2 = 0;

        for (let j = 0; j < string1.length; j++) {
            if (string1[i] === string1[j]) {
                count1++;
            }
            if (string1[i] === string2[j]) {
                count2++;
            }
        }
        if (count1 !== count2) {
            isAnagram = false;
            break;
        }
    }
}
if (isAnagram) {
    console.log(string1 + " and " + string2 + " are anagrams.");
} else {
    console.log(string1 + " and " + string2 + " are not anagrams.");
}