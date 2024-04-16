const removeFromArray = function(array, ...values) {
    
    return array.filter(x => !values.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
