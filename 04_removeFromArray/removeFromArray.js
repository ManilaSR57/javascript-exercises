const removeFromArray = function(arr, ...args) {
    if (Array.isArray(args)) {
        return arr.filter(x => !args.includes(x));
    }
    return arr.filter(x => x !== args);
};

// Do not edit below this line
module.exports = removeFromArray;
