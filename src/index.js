module.exports = function reverse(num) {
   return Number(Math.abs(num).toString().split('').reverse().join(''));
}