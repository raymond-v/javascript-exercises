const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z0-9]/g, '')
    let reverse = ''
    let normal = string.split('')
    for (let i = normal.length - 1; i >= 0; i--) {
        reverse += normal[i]
    }
    return string === reverse
};

// Do not edit below this line
module.exports = palindromes;
