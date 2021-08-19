//Conditional constructions - Условные выражения

var carName = 'Ford'
var currentYear = 2021
var carYear = 2008

var carAge = currentYear - carYear
if (carAge < 5) {
	console.log('Машине меньше 5 лет')
} else if (carAge >= 5 && carAge <= 10) {
	console.log('Машине от 5 до 10 лет')
} else {
	console.log(`Машине ${carName} - ${carAge} лет `)
}
// *! 0, null, NaN, undefined при проверке в конструции if - else приводится к значению false!
if (undefined) {
	console.log('Значение true')
} else {
	console.log('Значение false')
}

// *! Тернарный оператор.

(1 && false || false) ? console.log('True') : console.log('False') // false

var personAge = 14
var message

if (personAge < 18) {
	message = 'Еще не совершеннолетний'
} else {
	message = 'Человек совершеннолетний'
}

console.log(message)

var message = personAge < 18
	? 'Человек еще не совершеннолетний'
	: 'Человек совершеннолетний'

console.log(message)
// *! switch-case

var carColor = 'red'
if (carColor === 'green') {
	console.log('car color is green')
} else if (carColor === 'yellow') {
	console.log('car color is yellow')
} else if (carColor === 'red') {
	console.log('car color is red')
} else {
	console.log('car color is undefined')
}
carColor = 'green'

switch (carColor) {
	case 'green':
		console.log('car color is green')
		break
	case 'yellow':
		console.log('car color is yellow')
		break
	case 'red':
		console.log('car color is red')
		break
	default:
		console.log('car color is undefined')

}

