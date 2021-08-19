console.log(42)
console.log(-42)
console.log(8 / 3)
console.log(1.5)
console.log(0xAB) //171
console.log(2e3)// 2000
console.log(NaN)
console.log(typeof NaN) //number
console.log(42 / 0) // infinity тоже число
// *! Методы у чисел
var fortyTwo = 42
var delta = 8 / 3
console.log(delta.toString())
console.log(fortyTwo.toString())
console.log(parseFloat(delta.toFixed(2))) //2.67
console.log(parseInt(delta.toFixed(2))) //2

console.log(delta.toFixed(2) + 4)  //'2.674'
console.log(+delta.toFixed(2) + 4)  //6.67
console.log(+(delta.toFixed(2) + 4))  //2.674

console.log(isNaN(NaN)) // true
console.log(isNaN(42)) // false
console.log(isFinite(1 / 0)) // false потому что проверка на Finite! не Infinite! Т.е. проверка на конечность
console.log(isFinite(999999999)) // соответcтвенно здесь будет true, потому что число Finite(конечно)

// *! Метод Math
var num = 2.4

console.log(Math.random())
console.log(Math.floor(num))// Округление в меньшую сторону
console.log(Math.ceil(num))// Округление в большую сторону