//Create an array
let fruits = ["apples", "oranges", "peaches", "kiwis"];

fruits.forEach(fruit =>{
    console.log(fruit);
});

/*Create an array of numbers
- use forEach to print out all numbers
- find the sum of all the elements in the array
- add 1 to each element in the array and print the result as a new array
*/
let numbers = [1, 3, 5, 7];

//part 1
numbers.forEach(number => {
    console.log(number);
});

//part 2
let sum = 0;
numbers.forEach(number => {
    sum += number;
});
console.log(sum);

//part3
let newArr = [];
numbers.forEach(number => {
    newArr.push(number += 1);

});
console.log(newArr);

