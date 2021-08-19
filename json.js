var person = {
	name: `Denis`,
	age: 31,
	car: {
		model: 'Honda'
	},
	job: `Frontend`,
	parents: [`Anna`, `Alexander`]
}
var str = JSON.stringify(person) // stringify преобразует объект в текстовый форман json
console.log(str)

console.log(JSON.parse(str)) // Дейтсвие обратное stringify из текстового формата json получаем готовый объект