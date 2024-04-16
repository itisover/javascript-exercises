const repeatString = function(text, num) {
    let output_text = "";
    if (num < 0) {
        return "ERROR";
    }
    for(num; num > 0; num--) {
        output_text += text;
    }
    return output_text;
};

// Do not edit below this line
module.exports = repeatString;
