// 2. Find the largest number in an array (using a loop)
function findLargest(array) {
    let largest = 0;
    for(let i = 0; i < testArray2.length; i++)
    {
        if(testArray2[i] > largest)
        {
            largest = testArray2[i];
        }
    }
    console.log(largest);    
}

// Test for find largest
let testArray2 = [1, 4, 5, 4, 3]; // 5

// TODO: display the largest number in the array in the console
findLargest(testArray2);