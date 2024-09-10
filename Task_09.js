
//  9. Generate Fibonacci Sequence: Write a function that generates the first n numbers of the Fibonacci sequence.



function generateFibonacci(n) {
    let fibSequence = [];

    if (n <= 0) {
        return fibSequence; // Return an empty array if n is 0 or less
    }

    // The first Fibonacci number
    fibSequence.push(0);

    if (n === 1) {
        return fibSequence; // Return [0] if n is 1
    }

    // The second Fibonacci number
    fibSequence.push(1);

    // Generate the rest of the Fibonacci sequence
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }

    return fibSequence;
}

// Example usage:
console.log(generateFibonacci(5));  // Output: [0, 1, 1, 2, 3]
console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
