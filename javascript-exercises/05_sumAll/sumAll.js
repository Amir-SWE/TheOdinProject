const sumAll = function(a,b) {
    if (a<0 || b<0) {
        return "ERROR"
    }
    else if (typeof(b) != 'number' || typeof(a) != 'number') {
        return "ERROR"
    }
    let sum = 0;
    smallNum = a;
    largeNum = b;
    if (a>b) {
        smallNum = b;
        largeNum = a;
    }
    for(i=smallNum;i<largeNum+1;i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
