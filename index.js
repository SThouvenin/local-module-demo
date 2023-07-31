// // bring in the exported stats object
// let stats = require("./easy-stats.js");

// // create an array that we want to get statistics for
// let numbers = [62, 65, 88, 60, 53, 34, 31, 37];

// // use the min function that is a member of the stats object
// let minNum = stats.min(numbers);
// console.log("Minimum number: " + minNum);

// // use the sumOfValues function 
// let sumNums = stats.sumOfValues(numbers);
// console.log("Sum of numbers: " + sumNums);

// let maxNum = stats.max(numbers);
// console.log("Largest of numbers: " + maxNum);

// let averageNums = stats.mean(numbers);
// console.log("Average numbers: " + averageNums);




// bring in the exported StatsManager class
let StatsManager = require("./StatsManager.js");

// create an instance of the StatsManager class
let stats = new StatsManager();

// create an array that we want to get statistics for
let numbers = [62, 65, 88, 60, 53, 34, 31, 37];

// use the min function that is a member of the stats object
let minNum = stats.min(numbers);
console.log("Minimum number: " + minNum);

// use the sumOfValues function 
let sumNums = stats.sumOfValues(numbers);
console.log("Sum of numbers: " + sumNums);

let maxNum = stats.max(numbers);
console.log("Largest of numbers: " + maxNum);

let averageNums = stats.mean(numbers);
console.log("Average numbers: " + averageNums);

