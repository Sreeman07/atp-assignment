// Function to search for a target element in an array
function find(arr, target) {

    // Loop through each element of the array
    for (let i = 0; i < arr.length; i++) {

        // Check if current element matches the target
        if (arr[i] === target) {

            // Return "found" if target exists in array
            return "found";
        }
    }

    // Return "not found" if target is absent
    return "not found";
}

// Array of numbers
let arr = [3, 2, 5, 3, 6];

// Call the function and print the result
console.log(find(arr, 2));
