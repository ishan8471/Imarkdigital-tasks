/*   10. Remove Duplicates from Array: Create a function that takes an array as input 
and returns a new array with all duplicate elements removed,
 preserving the original order of elements.*/


 function removeDuplicates(arr) {
    let uniqueArray = [];
    
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // If the element is not already in the uniqueArray, add it
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    
    return uniqueArray;
}

// Example usage:
let arr = [1, 2, 3, 2, 4, 1, 5];
console.log(removeDuplicates(arr));  // Output: [1, 2, 3, 4, 5]
