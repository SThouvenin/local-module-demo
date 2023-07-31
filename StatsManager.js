class StatsManager {
    min(array) {
        let smallest = array[0];
        for (let i = 1; i < array.length; i++) {
           if (array[i] < smallest) {
              smallest = array[i];
           }
        }
        return smallest;
     }
    
     max(array) {
        let largest = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > largest) {
               largest = array[i];
            }
        }
        return largest;
     }

     sumOfValues(array) {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
           total += array[i];
        }
        return total;
     }

     mean(array) {
    
            let total = 0;
            for (let i = 0; i < array.length; i++) {
               total += array[i];
            }
            let average = total / array.length;
            return average;
        }
    }

module.exports = StatsManager;
