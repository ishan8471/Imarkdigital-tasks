
//2. Reverse a String: Create a function that takes a string as input and returns the reverse of that string.




function reverseString(str) {
    let reversed = '';  // Initialize an empty string to hold the reversed string

    // Iterate from the end of the string to the beginning
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];  // Append the current character to the reversed string
    }

    return reversed;  // Return the reversed string
}

// Example usage
const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(reversedString);  // Output: "olleh"
