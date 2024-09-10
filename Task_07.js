
/*  7. Find Missing Number: Given an array containing n distinct
 numbers taken from 0, 1, 2, ..., n, write a function 
 to find the one number that is missing from the array.*/




function findMissingNumber(arr) {
    let n = arr.length; // As the array is of length n and contains numbers from 0 to n
    let totalSum = (n * (n + 1)) / 2;
    let arrSum = 0;

    // Calculate the sum of the elements in the array
    for (let i = 0; i < n; i++) {
        arrSum += arr[i];
    }

    // The missing number is the difference between totalSum and arrSum
    return totalSum - arrSum;
}

// Example usage:
let arr = [3, 0, 1];
console.log(findMissingNumber(arr));  // Output: 2
