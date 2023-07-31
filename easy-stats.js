let stats = {
 // function that finds the min value in an array
 min: function (array) {
    let smallest = array[0];
    for (let i = 1; i < array.length; i++) {
       if (array[i] < smallest) {
          smallest = array[i];
       }
    }
    return smallest;
 },
 // function that finds the max value in an array
 max: function (array) {
    let largest = array[0];

    // TODO: you will need to write logic here
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
           largest = array[i];
        }
    }
    return largest;
 },
 // function that finds the sum of the values in an array
 sumOfValues: function (array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
       total += array[i];
    }
    return total;
 },
 // function that finds the mean (average) of the values in an array
 mean: function (array) {

    // TODO: you will need to write logic here
        let total = 0;
        for (let i = 0; i < array.length; i++) {
           total += array[i];
        }
        let average = total / array.length;
        return average;
    }
};

module.exports = stats;