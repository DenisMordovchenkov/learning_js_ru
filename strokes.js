var personName = 'Виктор'

var message = `Человека зовут '${personName}'`

console.log(message)

var newMessage = 'Тестовая строка для работы с методами'

console.log(newMessage.toUpperCase())
console.log(newMessage.toLowerCase())
console.log(newMessage.charAt(2))
console.log(newMessage.length)
console.log(newMessage.indexOf('строка'))
console.log(newMessage.indexOf('Soul')) // Возвращает -1, если строка не найдена
console.log(newMessage.substr(newMessage.indexOf('для'), 10)) // 'для работы'
console.log(newMessage.substring(1, 3))//Не включает последний символ(не включает 3)

// *! Strokes ES6

const createLink = ({ path, name }) => `<a target="_blanck" href="${path}">${name}</a>`
const google = `<li>${createLink({ path: 'https://google.com', name: 'Google' })}</li>`
const yandex = `<li>${createLink({ path: 'https://ya.ru', name: 'Yandex' })}</li>`
const ul = document.querySelector('ul')
ul.insertAdjacentHTML('afterbegin', google)
ul.insertAdjacentHTML('afterbegin', yandex)

const strToLog = `
	Hello
	WOrld
		I am
			new tab
`
console.log(strToLog)