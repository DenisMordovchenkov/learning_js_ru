let validation = function (login, password) {
	(login === 'login' && password === 'password')
		? console.log('U were logged in')
		: console.log('wrong password or login')
}