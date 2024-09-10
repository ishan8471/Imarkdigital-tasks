//  6. Count Vowels: Create a function that counts the number of vowels in a given string.


function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
    
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Compare each character manually to each vowel
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                count++;
            }
        }
    }
    
    return count;
}

// Example usage:
let inputString = "Hello, World!";
console.log(countVowels(inputString));  // Output: 3
