// setTimeout(function () {
// 	alert('Я сработал спустя 2 сеунды')
// }, 2000)

// let interval = setInterval(() => {
// 	console.log('Я буду срабатывать каждые 5 секунд')

// }, 5000);

// setTimeout(() => {
// 	console.log('А теперь очистим интервал с помощью clearInterval')

// 	clearInterval(interval)

// }, 15000);


// *! Client -> Server -> Database <- Server <- Client

console.log('Request data...')

// setTimeout(() => {
// 	console.log('Request processing in progress...')
// 	setTimeout(() => {
// 		console.log('Forming a list of users...')
// 		setTimeout(() => {
// 			console.log('Preparing data for the client...')
// 			setTimeout(() => {
// 				console.log('Received data and display it')

// 			}, 1000);
// 		}, 1000);
// 	}, 2000);
// }, 4000);

// *! Promisses

let promise = new Promise(function (resolve, reject) {
	setTimeout(() => {
		console.log('Request processing in progress...')
		resolve()
	}, 4000);
})
	.then(function () {
		return new Promise(function (resolve, reject) {
			setTimeout(() => {
				let users = [
					{
						uid: 'id1',
						name: 'Maxim'
					},
					{
						uid: 'id2',
						name: 'Elena'
					}

				]

				reject('DataBase could not receive users list') // Тест для проверки работы метода catch()

				console.log('Preparing data for the client...', users)
				resolve(users) //передаем данные в качестве параметров resolve(), чтобы у следующего промиса был к ним доступ
			}, 3000)
		})
	})
	.then(function (dbUsers) {
		return new Promise(function (resolve, reject) {
			setTimeout(() => {
				let users = dbUsers.map(function (user) {
					return { id: user.uid, firstName: user.name, timeStamp: Date.now() }
				})
				console.log('Forming a list of users...')
				resolve(users)
			}, 2000)
		})
	})
	.then(function (users) {
		return new Promise(function (resolve, reject) {
			setTimeout(() => {
				console.log(users)

				console.log('Received data and display it')
				resolve()
			}, 1000)
		})
	})
	.catch(function (error) {
		console.error(error)
	})// Сработает, если вызван метод reject(). СОобщение, которое будет в него передано отобразится в методе Catch
	.finally(function () {
		console.log('Finally') //будет выполнен в влюбом случае.

	})
