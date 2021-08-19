var message = 'Hello JS'
var Message = 'Это уже другая переменная'
var helloMessage = 'Hello again'
var $ = 'Допустимо'
var _ = 'Также допустимо'
//  с цифры начинать имя переменной нельзя!
console.log(message, Message)

// *! const & let ES6
for (var i = 0; i < 5; i++) {
	setTimeout(function () {
		console.log(i)
	}, 2000)
} // Из-за задержки в 2 мс, цикл уже отработает и в i фактически уже будет 5, поэтому и вывод равен 5 5 5 5 5

for (let i = 0; i < 5; i++) {
	setTimeout(function () {
		console.log(i)
	}, 2000)
} // отличие let в том, что оно работает только внутри блока. То есть внутри блока инициализируется i = 0 и передается далее в setTimeout. И потом снова в блоке i = 1 и т.д.

const HEX = '#FFAABB' // const не дает изменить переменную
//HEX = 'random'

document.querySelector('h1').style.color = '#000' //?

const arr = [1, 2, 3, 4, 5]
arr.unshift(4) // но массив объявленный через const мы может изменять с помощью методов
