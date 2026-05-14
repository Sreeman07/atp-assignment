// Function to find the biggest number among three numbers
function bignum(a, b, c) {

    // Check if 'a' is greater than both 'b' and 'c'
    if (a > b && a > c)

        // Return if 'a' is the biggest
        return "a is big";

    // Check if 'b' is greater than 'c'
    else if (b > c)

        // Return if 'b' is the biggest
        return "b is big";

    else

        // Return if 'c' is the biggest
        return "c is big";
}

// Call the function with sample values
let res = bignum(3, 5, 1);

// Print the result
console.log(res);
