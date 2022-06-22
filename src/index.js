module.exports = function reverse (n) {
let result = 0;
let divideResult = 0;
n = Math.abs(n);
    while (n > 0) {
        divideResult = n % 10;
        result = result * 10 + divideResult;
        n = Math.trunc(n / 10);
    }
    return result;
}
