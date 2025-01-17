// 3. Remove duplicates from an array (using a loop). FYI: array.includes(element) checks if an element is in an array


function removeDuplicates(array) {

  let node3Array = []; 
  
  //loop for removing duplicates 
  for (let i = 0; i < array.length; i++) { 
      if (!node3Array.includes(array[i])) {
        node3Array.push(array[i]); 
      }
  }
  return node3Array; 
}

//testing
let testArray3 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; // expected res [1, 2, 3, 4, 5]
console.log(removeDuplicates(testArray3)); //calling removeDuplicates