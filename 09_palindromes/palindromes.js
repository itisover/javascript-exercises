const palindromes = function (str) {
    let punctuation = ` \\/!.,?`;
    let stripped_string = [...str].filter(char => !punctuation.includes(char))
                                .map((char) => char.toLowerCase());
    let reverse = stripped_string.slice().reverse();
    for (let i = 0; i < stripped_string.length; i++) {
        if (stripped_string[i] !== reverse[i]) {
            return false;
        }
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
