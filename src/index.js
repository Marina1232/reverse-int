module.exports = function reverse(n) {
    let i = 0;
    let result = "";
    let absNum = Math.abs(n);
    let strNumber = absNum.toString();

    while (i < strNumber.length) {
        result = `${strNumber[i]}${result}`;
        i += 1;
    }
    return result;
};
