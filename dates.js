var date = new Date()
console.log(date.getDate())
console.log(date.getMonth())
console.log(date.getFullYear())

//console.log(date.setDate(20)) // time stamp время в миллисекундах с 1 января 1970 года до 2020 года
//console.log(date.getDate()) // получение заданного setDate() времени
console.log(date.getUTCDate())
console.log(date.getTime()) // time stamp время в миллисекундах с 1 января 1970 года до времени создания этого штампа
var date1 = new Date(3600 * 24 * 1000)
var date2 = new Date(3600 * 24 * 1000 * 365)
var date3 = new Date(3600 * 24 * 1000 * 19000)

console.log(date1, date2, date3)