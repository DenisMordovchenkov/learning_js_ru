// var box1 = document.querySelector('#box1')
// var box2 = document.querySelector('#box2')

// box1.classList.add('red')

// var hasClass = box2.classList.contains('blue')

// if (hasClass) {
// 	box2.classList.replace('blue', 'red')
// } else {
// 	box2.classList.add('blue')
// }

// *! Classes ES6

// RootElement <= Box <= Instance
// RootElement - базовый класс.
class RootElement {
	constructor(tagName = 'div') {
		this.$el = document.createElement(tagName)
		this.$el.style.marginBottom = '20px'
	}

	randomColor() {
		function getRandom(min, max) {
			return Math.floor(Math.random() * (max - min) + min)
		}
		const colors = ['green', 'yellow', 'black', 'grey', 'red', 'pink']
		return colors[getRandom(0, colors.length)]
	}

	hide() {
		this.$el.style.opacity = '0'
		this.$el.style.transition = '0.8s'
	}

	show() {
		this.$el.style.opacity = '1'
		this.$el.style.transition = '0.8s'
		this.$el.style.background = this.randomColor()
		console.log(this.randomColor, this)
	}

	append() {
		document.querySelector('.wrapper').insertAdjacentElement('beforeend', this.$el)
	}
}

class Box extends RootElement {
	constructor(color, size = 150, tagName) {
		super(tagName)
		this.color = color
		this.size = size
	}
	create() {
		this.$el.style.background = this.color
		this.$el.style.width = this.$el.style.height = `${this.size}px`

		this.append()


		return this
	}

}

class Circle extends RootElement {
	constructor(color, size, tagName) {
		super(tagName)
		this.color = color
		this.size = size
	}

	create() {
		this.$el.style.borderRadius = '50%'
		this.$el.style.background = this.color
		this.$el.style.width = this.$el.style.height = `${this.size}px`


		this.append()
		return this
	}
}

const redBox = new Box('red', 100, 'div').create()
const blueBox = new Box('blue').create()

const coloredCircle = new Circle('blue', 150).create()


coloredCircle.$el.addEventListener('mouseenter', () => {
	coloredCircle.hide()
})

coloredCircle.$el.addEventListener('mouseleave', () => {
	coloredCircle.show()
})

blueBox.$el.addEventListener('mouseenter', () => {
	blueBox.hide()
})

blueBox.$el.addEventListener('mouseleave', () => {
	blueBox.show()
})


redBox.$el.addEventListener('mouseenter', () => {
	redBox.hide()
})

redBox.$el.addEventListener('mouseleave', () => {
	redBox.show()
})