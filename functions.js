var carName = 'Ford'
var carYear = 2015
var personYear = 1990
/* 
if (calcAge(carName) < 10) console.log('less than 10 years')
else console.log('More than 10 years')



if (calcAge(personYear) < 10) console.log('less than 10 years')
else console.log('More than 10 years') */
// *! Рефакторинг кода выше ^
function calcAge(year) {
	var currentYear = 2021
	var result = currentYear - year
	return result
}

function checkAndLogAge(year, howMuch, fn) {
	if (calcAge(year) < howMuch) console.log(`less than ${howMuch} years`)
	else console.log(`More than ${howMuch} years`)
}


function whatIsIt(name) {
	(name === carYear) ? console.log(`it's a car`) : console.log(`it's a man`)
}

checkAndLogAge(carYear, 20, whatIsIt(carYear))
checkAndLogAge(personYear, 5, whatIsIt(personYear))

sayHelloTo('vasya')
// *! Вызов функйии до её объявления будет работать только с function declaration, как в примере ниже. Из - за hoisting (всплытие переменных и функций).То есть интерпретатор проходится по коду перед выполнением и перемещает все переменные (объяленные через var, но не через let) и функции function declaration в начало кода
function sayHelloTo(name) {
	name = name.toLocaleUpperCase()
	console.log(`Hi, ${name}`)
}
// *! При таком объявлении функции(function expression) вызов этой функции до её объявления приведет к ошибке! Поскольку функция присвоена переменной перемещения этой функции в начало кода не произойдёт.
/* var sayHelloTo = function (name) {
	name = name.toLocaleUpperCase()
	console.log(`Hi, ${name}`)
} */

// *! rest & spread ES6

const form = document.querySelector('form')

form.addEventListener('submit', event => {
	event.preventDefault()
	const title = form.title.value
	const text = form.text.value
	const description = form.description.value

	saveForm(title, text, description)
})

// *!  ...Spread разворачивает параметры переданные в saveForm({ title, text, description }) и т.д.Их может быть бесконечное множество
// function saveForm(data) {
// 	const formData = {
// 		date: new Date().toLocaleDateString(),
// 		//title: data.title,
// 		//text: data.text,
// 		//description: data.description
// 		...data

// 	}
// 	console.log('Form data: ', formData)
// }

// *! ...Rest по сути выполняет деструктуризацию массива
function saveForm(...args) {

	const [title, text, description] = args

	const formData = {
		date: new Date().toLocaleDateString(),
		//title: data.title,
		//text: data.text,
		//description: data.description
		title, text, description
	}
	console.log('Form data: ', formData)
}

// *!  arrow functions ES6

// function getYearsFromWWII() {
// 	return new Date().getFullYear()
// 		- 1945
// }

// const getYearsFromDate = (year) => {
// 	return new Date().getFullYear() - year
// }

// getYearsFromDate(1989)

// const getYearsFromDate = year => {
// 	return new Date().getFullYear() - year
// }

// const getYearsFromDate = year => new Date().getFullYear() - year
// getYearsFromDate(1945)

const programmer = {
	age: 31,
	name: 'Denis',
	logNameWithTimeout: function () {
		setTimeout(() => {
			console.log(this.name)
		}, 1000)
	}
}
programmer.logNameWithTimeout()

//function () {} создаст контекст programmer
//а () => {} в свою очередь не создаст контекст на window, частью которого и является setTimeout
// *! default parameters ES6

const createPost = (title, text = 'default text', date = new Date().toLocaleDateString()) => {
	//date = date || new Date().toLocaleDateString() старый способ, пока не было параметров по умолчанию
	return { title, text, date } 	//В ES6 если ключ и значение совпадают, то значение можно опустить как в примере ниже
}

const post = createPost('Скоро новый год!')
console.log(post)