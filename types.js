// *! Number
// *! String
// *! Boolean
// *! Object
// *! Null
// *! Undefined
// *! Всего в JS существует 6 типов данных
var number = 42
var string = 'Some message'
var isTrue = true || false
var obj = {
	a: 1,
	b: 2,
}
var nothing = null
var undef = undefined

console.log(number, string, isTrue, obj, nothing, undef)
console.log(typeof number)
console.log(typeof string)
console.log(typeof isTrue)
console.log(typeof obj)
console.log(typeof nothing) //Ошибка! Указано, что это объект!
console.log(typeof undef)
console.log(typeof function () { }) // Сделано для удобства. По сути это объект, но в консоли будет выведено "function"