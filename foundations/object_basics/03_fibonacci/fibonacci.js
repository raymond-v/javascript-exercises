const fibonacci = function(index) {
    if (index == 0) {
        return 0
    } else if (index < 0) {
        return 'OOPS'
    }
    let next = 1
    let current = 1
    for (let i = 2; i < index; i++) {
        current = current + next
        next = current - next
    }
    return current
};

// Do not edit below this line
module.exports = fibonacci;
