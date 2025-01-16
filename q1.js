
//Code Authors: Xalli Bell and Emily Menken

//new comment

// 1. Calculate the sum of all numbers in an array (using a loop)

function sumArray(array) {
    let arraySum = 0;
    for(let i = 0; i < array.length; i++)
    {
        arraySum = arraySum + array[i];    
    }
    console.log(arraySum);
}

// Test for sum array
let testArray = [1, 2, 3, 4, 5]; // 15

// TODO: display the sum of the array in the console

sumArray(testArray);