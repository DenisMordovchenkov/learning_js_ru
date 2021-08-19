/* var person = {
	age: 28,
	name: 'Maxim',
	job: 'front-end',
	displayInfo: function (ms) {
		var self = this // явно присваиваем переменной ключевое слово this со значением нашего объекта. Решение с помощью замыкания
		setTimeout(function () {
			//debugger
			console.log(`name: ${self.name}, job: ${self.job}, age: ${self.age}`)
		}, ms)

	}
}

person.displayInfo(5000) */


var person = {
	age: 28,
	name: 'Maxim',
	job: 'front-end',
	displayInfo: function (ms) {
		setTimeout(function () {
			//debugger
			console.log(`name: ${this.name}, job: ${this.job}, age: ${this.age}`)
		}.bind(this), ms)// привязка this к конкретному значение, в нашем случае к person

	}
}

person.displayInfo(5000)

// *! Привязка контекста подробнее

function printObject(objName) {
	console.log(`printing object: ${objName}`)
	for (var key in this) {
		(this.hasOwnProperty(key))
			? console.log('[' + key + ']', this[key])
			: null
	}
}

var programmer = {
	name: 'Denis',
	job: 'Fullstack',
	age: 31,
	parents: [
		'Anna',
		'Alexander'
	]
}

var car = {
	name: 'Honda',
	model: 'NSX',
	year: 2020
}

/* printObject(programmer)
var printProgrammer = printObject.bind(programmer)

printProgrammer('programmer') */
printObject.call(car, 'Car')
printObject.bind(car, 'Car')()
printObject.apply(programmer, ['Programmer'])