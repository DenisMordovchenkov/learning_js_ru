// *! Массивы это Объекты в JS, которые содержат в себе n-ое количество других элементов.

var cars = [
	'Ford',
	'Mazda',
	'KiA',
	'BMW'
]

console.log(cars)
console.log(cars.length)
console.log(cars[1])
console.log(cars[1].length)

var any = [42, 'apple', { a: 1 }]

console.log(any)

cars.push('Audi') //Добавление элемента в конец массива
console.log(cars)

var audi = cars.pop() // удаление последнего элемента из массива, причем если привоить значение этого выражения в переменную, то удаленный элемент будет присвоен нашей переменной

console.log(cars)
console.log(audi)

var ford = cars.shift() // Удаление первого элемента, также с возможностью присвоения удаленного элемента в переменную!

console.log(cars)
console.log(ford)


cars.unshift(audi) // вставляет на первую, или нужную позицию элемент. Сдвигает список, что очень ресурсозатратно.

console.log(cars)

console.log(cars.indexOf('KiA')) // иет индекс элемента с учетом регистра, иначе вернет -1

var index = cars.indexOf('KiA')
var kia = cars[index]
console.log(kia)


// *! Методы массивов

var str = `1,2,3,4,5,6,7,8`
var array = str.split(',') // Создает массив из строки по разделителю
console.log(`Длина массива ${array.length}`)
// console.log(array.join(';')) //join наоборот, создает строку из массива тоже по разделителю
// console.log(array.reverse()) // reverse возвращает перевернутый массив, то есть меняет существующий!

array.splice(1, 0, '1.5')

var newArray = array.concat([1, 2])//concat может как обьединять массивы, создавая новый, так и просто копировать существующий. Без сслки на прежний объект(массив)

// console.log(newArray)

var objArray = [
	{ name: 'Max', age: 27 },
	{ name: 'Elena', age: 17 },
	{ name: 'Victor', age: 20 }
]

console.log(objArray)

var foundPerson = objArray.find(function (person) { //person по сути это item в перебираемом массиве
	console.log(person)
	return person.age === 20 // если данное выражение true, то данный объект и записывается в нашу переменную foundPerson
}) //Метод find работает как цикл, он проходит по всему массиву и итерирует его

console.log(foundPerson)

var oddArray = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function (i) {
	return i % 2 !== 0
})
// метод filter также проходит по массиву и возвращает новый массив с учетом параметров указанных в переданной в него функции.
console.log(oddArray)
console.log(array)

var numArray = array.map((i) => {
	return i * 2 // метод map преобразует строковый массив к числам и оперирует с ними
})

console.log(numArray)
console.log(array)
var newArray = array.filter((i) => {
	return i % 2 !== 0 // не преобразует в числа, но производит сравнение по текущему условию и выводит результат
})

console.log(newArray)
