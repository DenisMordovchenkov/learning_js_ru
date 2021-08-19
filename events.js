var button = document.querySelector('button')
var h1 = document.querySelector('h1')
var input = document.querySelector('input')

function buttonHandler() {
	console.log('clicked')
	h1.textContent = input.value
}

h1.addEventListener('mouseenter', function () {
	this.style.color = 'red'
	this.style.backgroundColor = 'black'
})

h1.addEventListener('mouseleave', function () {
	this.style.color = 'black'
	this.style.backgroundColor = null
})

button.addEventListener('click', buttonHandler)
// *! Всплытие и погружение
var divs = document.querySelectorAll('div')

for (var i = 0; i < divs.length; i++) {
	divs[i].addEventListener('click', function (event) {
		event.stopPropagation() //Останавливает событие на элементе, на котором произошел клик!
		console.log(this.getAttribute('id'))
	})//, false || true )опциональный параметр, который меняет всплытие на погружение)
}

// *! Еще примеры с событийностью

var link = document.querySelector('a')

link.addEventListener('click', handleLinkClick)

function handleLinkClick(event) {
	event.preventDefault() // отключает переход по ссылке, по сути можно сделать из ссылки кнопку
	var div = divs[1]
	div.style.display = div.style.display === 'none'
		? 'flex'
		: 'none'
	console.log(div.style.display)
}

// *! Делегирование событий

var p = document.querySelectorAll('p')

/* for (var i = 0; i < p.length; i++) {
	p[i].addEventListener('click', function (event) {
		event.target.style.color = 'blue'
	})
} */

// *!Способ обработки событий использованный выше очень ресурсоемкий. Чем больше объектов надо обработать, тем выше нагрузка на сервер и клиента. Поэтому нужно использовать способ указанный ниже. Обработка событий на странице с выборкой по тегу, классу или id

document.getElementById('wrapper')
	.addEventListener('click', function (event) {
		var tagNAme = event.target.tagName.toLowerCase()

		event.target.style.color = tagNAme === 'p'
			? 'blue'
			: 'red'

		event.target.style.color = event.target.classList.contains('color') === true
			? 'red'
			: 'none'
	})

// *! getElementById самый быстрый метод при работе с DOM деревом, поэтому из старых методов лучше использовать его при работе с блоками, где присутствует id.В остальных случаях лучше использовать querySelector!


