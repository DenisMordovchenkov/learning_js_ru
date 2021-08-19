// *! Объекты. Основной тип данных в JS!

var person = {
	//Ключ : значение
	name: 'Василий',
	year: 1990,
	family: [
		'Елена',
		'Игорь'
	],
	car: {
		year: 2010,
		model: 'Ford',
	},
	//Это уже метод
	calculateAge: function () {
		this.age = 2021 - this.year // this указывает непосредственно на конекст вызова, в данном случае объекта person. А this.age в данном случае еще и добавит ключ age со значением высчитаного выражения в объект person
		console.log(`${this.name} - ${this.year} года рождения, значит ему ${this.age}`)
	}
}

console.log(person)
console.log(person.name) //Доступ по ключу
console.log(person['year']) // так тоже можно и даже нужно при названии ключа, в котором присутствуют пробелы

var field = 'car'
console.log(person[field]['year']) // либо вызов через точку person[field].year

person.year = 1993
console.log(person.year)
console.log(person)

person.calculateAge()
console.log(person.age)

// *! Объекты и прототипы

var car = {
	name: 'Ford',
	year: 2015,
	person: {
		name: 'vasya',
		surname: 'Vasin'

	}
}


console.log([].__proto__ === Array.prototype)
console.log(Array.__proto__ === Object.__proto__)
console.log(Array.__proto__ === Object.prototype)

console.log(car.__proto__ === Object.prototype)

function Car(name, year) {
	this.name = name
	this.year = year

}

Car.prototype.getAge = function () {
	return new Date().getFullYear() - this.year
}

Car.prototype.color = 'black'
var ford = new Car('capri', 2015)

var bmw = new Car('535', 2019)
console.log(ford)
console.log(bmw)
console.log(bmw.getAge())
console.log(ford.color)
console.log(bmw.color)
bmw.color = 'red'
console.log(bmw.color)

// *! Взаимодействие с объектами

var dodge = Object.create({
	calculateDistancePerYear: function () {
		// Создание метода в прототипе объекта
		// this ниже указывает на нашу переменную в которую мы записываем созданный объект
		Object.defineProperty(this, 'distancePerYear', {
			value: Math.ceil(this.distance / this.age),// задаем значение ключаб который передаем в качестве параметра в defineProperty!
			enumerable: false, // параметры объект. Данный означает возможность перебора циклами
			writable: false, // возможность перезаписи
			configurable: false // возможность удалить и т.д.
		})
		return this.distancePerYear
	}
}, {
	name: {
		enumerable: true,
		writable: false,
		configurable: false,
		value: 'Dodge'
	},
	model: {
		enumerable: true,
		writable: false,
		configurable: false,
		value: 'Charger'
	},
	year: {
		enumerable: true,
		writable: false,
		configurable: false,
		value: 2015
	},
	distance: {
		enumerable: true,
		writable: true,
		configurable: false,
		value: 120500
	},
	age: {
		enumerable: true,
		get: function () {
			console.log('Получаем возраст...')
			return new Date().getFullYear() - this.year
		},
		set: function () {
			console.log('Устанавливаем значение:')
		}
	}
})
dodge.calculateDistancePerYear() // в переборе ниже не отобразится данный метод, если в параметрах у него указано enumerable: false
for (var key in dodge) {
	if (dodge.hasOwnProperty(key)) {
		console.log(key, dodge[key])
	}

}
// *! Итерация ключей объекта

var person = {
	name: 'Denis',
	age: 31,
	job: 'front-end'
}

for (var key in person) {
	console.log(person[key])
}
// for... in... перебирает также ключи из прототипа объекта. Поэтом нужно либо использовать проверку на hasOwnProperty либо пользоваться другим перебором

// ES 6 
Object.keys(person).forEach(function (key) {
	console.log(person[key])
})
// *! Оператор Object.keys затрагивает только собственные значения и не идет по прототипу!

// *! Objects ES6

const createHouse = (roof = 'плоская', windows = 6, doors = 4, stages = 1) => ({ roof, windows, doors, stages })
//Если мы используем стрелочную функцию и хотим вернуть объект с сокращением (без использования return) то объект надо обернуть в круглые скобки ()

const newHouse = createHouse('Косая')

console.log(newHouse)
const yearField = 'year'
const smallHouse = {
	name: 'townhouse',
	['porch' + 'back']: true,
	[yearField]: 2021,
	logFields() {
		//деструктуризация this
		const { name, porchback, year } = this //избавляет от дублирования this в коде ниже
		console.log(name, porchback, year)
	}
	//можно динамически задавать ключи в []
}
console.log(smallHouse)
smallHouse.logFields()

const { name } = smallHouse

console.log(name)

