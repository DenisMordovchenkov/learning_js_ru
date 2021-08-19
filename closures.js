// *! Замыкания это способность языка создавать локальную область видимости данных и впоследствии исользовать эти данные, без возможности изменить их извне

var createCounter = function (counterName) {
	var counter = 0 // переменная замкнута

	return {
		increment: function () {
			counter++
		},
		decrement: function () {
			counter--
		},
		getCounter: function () {
			return counter
		}
	}
}

var counterA = createCounter('counterA')
var counterB = createCounter('counterB')
counterA.increment()
counterA.increment()


counterB.decrement()
counterB.decrement()
counterB.decrement()

console.log(counterA.getCounter())
console.log(counterB.getCounter())
