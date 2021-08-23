document.querySelector('#load').addEventListener('click', load)

function load() {
	let url = 'https://jsonplaceholder.typicode.com/users'
	fetch(url) //делает запрос на удаленный сервер и возвращает промисс
		.then(function (response) {
			return response.json() //Приведение к формату json

		})
		.then(function (data) {
			let ol = document.querySelector('#list')
			let html = data.map(function (item) {
				return `<li>${item.name} (${item.email})</li>`
			})
			ol.insertAdjacentHTML('afterbegin', html.join(' '))

		})
}


