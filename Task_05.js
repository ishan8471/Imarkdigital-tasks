
//   5. Calculate Factorial: Write a function that calculates the factorial of a given number.



// Iterative Approach


/*function factorialIterative(n) {
    // Handle edge case where n is less than 0
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }

    // Start with a result of 1
    let result = 1;

    // Multiply result by every number from 1 to n
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

// Example usage
console.log(factorialIterative(5));  // Output: 120*/




//  Recursive Approach


function factorialIterative(n) {
    // Handle edge case where n is less than 0
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }

    // Start with a result of 1
    let result = 1;

    // Multiply result by every number from 1 to n
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

// Example usage
console.log(factorialIterative(5));  // Output: 120
