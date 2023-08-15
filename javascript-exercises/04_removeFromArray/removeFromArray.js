const removeFromArray = function(array) {
    let newArray = [];
    let counter = 0;
    for (const element of array) {
        for (i=1;i<arguments.length;i++) {
            if (element === arguments[i]) {
                counter++;
            }   
        }
        if (counter < 1) {
            newArray.push(element);
        }
        counter = 0;
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
