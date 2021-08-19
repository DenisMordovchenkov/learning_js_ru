document.querySelector('#alert')
	.addEventListener('click', function () {
		alert('Вы кликнули по кнопке')
	})

document.querySelector('#confirm')
	.addEventListener('click', function () {
		var decision = confirm('Вы уверены в том, что хотите нажать на кнопку?')
		if (decision) alert('Вы кликнули по кнопке Ok')
		else alert('Вы кликнули по кнопке cancel')
	})

document.querySelector('#prompt')
	.addEventListener('click', function () {
		var age = prompt('Введите свой возраст: ', '22')
		age > 20
			? alert('U can go')
			: alert('U shall not pass')
	})

console.warn('console.warn')
console.info('console.info')
console.error('console.error')

throw new Error('Error') //Останавливает выполнение кода
