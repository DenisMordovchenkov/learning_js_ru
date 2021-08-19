Array.prototype.someMethod = function () {
	var newMassive = []

	for (key in this) {
		if (typeof this[key] === 'number') {
			newMassive.push(this[key] ** 2)
		} else if (typeof this[key] === 'string') {
			newMassive.push(this[key].repeat(2))
		}
	}

	return newMassive
}

let someMassive = [1, 2, 3, 'four', 5, 6, 'seven']

console.log(someMassive.someMethod())
