// define a array of numbers
let numbers = [10,20,30,40,50];
// create a variable to store sum
let sum = 0 ;
// loop through each element in the array and add it to sum
numbers.forEach(function(number){
    sum = sum + number;
})
console.log(sum);

// method 2
// define array of marks
let marks = [100,200,300];
// define a variable to store the initial marks
let total = 0;
// create a function to increment the total variable
const adder = (mark) =>{
    total += mark;
}

// pass a reference to the forEach helper
marks.forEach(adder);
// print the total marks
console.log(total);