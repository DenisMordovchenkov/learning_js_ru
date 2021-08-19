document.querySelector('button')
	.addEventListener('click', function () {
		var inputValue = document.querySelector('input').value
		var obj = {
			text: inputValue
		} // *! СОздаем объект в котором будет храниться наше значение.Объект имеет смысл, когда у нас будет несколько значений. Здесь просто в качестве примера
		localStorage.setItem('headerText', JSON.stringify(obj)) //Записываем в localStorage текстовое представление нашего объекта. В формате JSON.
	})
// *! HeaderText просто название нашего ключа, в котором будет хранится значение в localStorage.

//DOMCOntentLoaded вызывается, когда полностью прогружается DOM-дерево, используется как доп защита

document.addEventListener('DOMContentLoaded', function () {
	console.log('Loaded') //Просто проверка на работу события DOMCOntentLoaded
	var obj = JSON.parse(localStorage.getItem('headerText'))
	// Преобразуем из формата JSON наш объект, хранящийся в localeStorage


	obj.text && obj.text.trim() // *! Если obj.text существует и не равен null, undefined и т.д., а trim() - проверка на пробелы, тоесть убирает пробелы перед проверкой на наличие строки.
		? document.querySelector('h1').textContent = obj.text // *! Записываем в заголовок то, что нам пришло из localStorage по ключу 'text'
		: null // *! Иначе ничего не делать, то есть не меняем заголовок!
})