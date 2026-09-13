const findTheOldest = function(array) {
    const person = array.reduce((biggest, current) => {
        if (((current.yearOfDeath ?? new Date().getFullYear()) - current.yearOfBirth) > ((biggest.yearOfDeath ?? new Date().getFullYear()) - biggest.yearOfBirth)) {
            return current
        } else {
            return biggest
        }
    })
    return person
};

// Do not edit below this line
module.exports = findTheOldest;
