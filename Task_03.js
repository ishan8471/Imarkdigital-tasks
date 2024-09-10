
/*  3. Find the Largest Number in an Array: Write a function that takes an array of numbers 
as input and returns the largest number in the array.*/

function findLargestNumber(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    
    // Initialize the largest number with the first element of the array
    let largest = arr[0];
    
    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Compare current element with the largest found so far
        if (arr[i] > largest) {
            largest = arr[i];  // Update the largest number if current element is greater
        }
    }
    
    return largest;  // Return the largest number found
}

// Example usage
const numbers = [5, 12, 8, 21, 7];
const largestNumber = findLargestNumber(numbers);
console.log(largestNumber);  // Output: 21


