//  4. Create a program to filter one array with another array object.


function filterArray(arr1, arr2) {
    // Create a Set from arr2 for efficient lookups
    const set2 = new Set(arr2);
    
    // Filter arr1 based on whether elements are in set2
    const filteredArray = arr1.filter(element => set2.has(element));
    
    return filteredArray;
}

// Example usage
const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [4, 5, 6, 7, 8];
const result = filterArray(array1, array2);

console.log(result);  // Output: [4, 5, 6]
