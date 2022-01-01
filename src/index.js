module.exports = function reverse (n) {
    n = (n < 0) ? n*(-1) : n;
    const str = String(n);
    const reverse = str.split('').reverse().join('');
    return reverse;
}