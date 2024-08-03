// Write a JavaScript function to remove duplicate numbers from an array of numbers.

const numbers = [23, 54, 55, 67, 43, 55, 23, 43];


function removeDuplicate(arr) { // I write out my function and pass in an arr in the parameter.
    return arr.filter((item, index) => arr.indexOf(item) === index); // I use the filter method to return an array that pass the test an empty array if no element pass the test.
}
 console.log(removeDuplicate(numbers));

