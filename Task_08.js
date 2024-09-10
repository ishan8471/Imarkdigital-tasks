
//   8. Convert Temperature: Implement a function that converts temperatures between Celsius and Fahrenheit.





function convertTemperature(temp, scale) {
    let convertedTemp;
    
    if (scale === "C") {
        // Convert Celsius to Fahrenheit
        convertedTemp = (temp * 9/5) + 32;
        console.log(temp + "°C is " + convertedTemp + "°F");
    } else if (scale === "F") {
        // Convert Fahrenheit to Celsius
        convertedTemp = (temp - 32) * 5/9;
        console.log(temp + "°F is " + convertedTemp + "°C");
    } else {
        console.log("Please provide a valid scale: 'C' for Celsius or 'F' for Fahrenheit.");
    }

    return convertedTemp;
}

// Example usage:
convertTemperature(25, "C"); // Output: 25°C is 77°F
convertTemperature(77, "F"); // Output: 77°F is 25°C
