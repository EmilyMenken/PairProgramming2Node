/* 4. Write a program that checks if a given string is a palindrome (using a loop).
A palindrome is a word, number, or other sequence of characters that reads the same forward and backward (assume there will be no spaces, tabs or punctuation).
*/

function checkPalindrome(textInput) {

    for (let i = 0; i < textInput.length / 2; i++) {
        if (textInput[i] !== textInput[textInput.length - 1 - i]) //compares the letters in the string
            {
            return false; 
        }
    }
    return true; 
}

// Testing
let testString = "racecar"; // true
let testString2 = "hello"; // false
//extra test to make sure it don't just look at the first and last letter
let testString3 = "ceramic"; //false

console.log(testString +": ");
console.log(checkPalindrome(testString)); // Expected res: true
console.log(testString2 +": ");
console.log(checkPalindrome(testString2)); // Expected res: false
console.log(testString3 +": ");
console.log(checkPalindrome(testString3)); //expected res: false