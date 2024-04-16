const reverseString = function(text) {
    let buffer = "";
    let i;
    for(i = text.length - 1; i >= 0; i--) {
        buffer += text[i];
    }
    return buffer;
};

// Do not edit below this line
module.exports = reverseString;
