const sumAll = function(first_number, second_number) {
    if (first_number < 0 || second_number < 0) {
        return "ERROR";
    }

    if (typeof(first_number) != "number" || typeof(second_number) != "number") {
        return "ERROR";
    }
    
    if (first_number == second_number) {
        return first_number + second_number;
    }

    let lower = first_number;
    let upper = second_number;
    let sum = 0;
    let i;
        
    if (first_number > second_number) {
        lower = second_number;
        upper = first_number;
    }

    for (i = lower; i <= upper; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
