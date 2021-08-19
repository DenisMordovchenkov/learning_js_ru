var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers.push('Not a number')
numbers.push('New line')
for (let i = 0; i < numbers.length; i++) {
	console.log(`Элемент ${numbers[i]} имеет индекс - ${i}`)
	if (numbers[i] % 2 === 0) {
		console.log(numbers[i], '- Четное число')
	} else {
		continue// если получится другое условие выполняется пропуск данного значения и переход к следующей итерации
	}
}

console.log(`-----------------------------------------------------------------------------------------------------------------`)

for (let i = 0; i < numbers.length; i++) {
	//console.log(`Элемент ${numbers[i]} имеет индекс - ${i}`)
	if (typeof numbers[i] !== String) {
		console.log(numbers[i])
	} else {
		break// прерывание цикла при выполнение условия
	}
}

