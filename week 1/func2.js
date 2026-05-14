// Function to calculate the sum of all elements in an array
function addsum(arr) {

    // Initialize sum variable
    let sum = 0;

    // Loop through each element in the array
    for (i = 0; i < arr.length; i++) {

        // Add current element to sum
        sum += arr[i];
    }

    // Return the final sum
    return sum;
}

// Array of numbers
let arr = [3, 2, 5, 3, 6];

// Call the function and print the result
console.log(addsum(arr));
