var a = document.querySelector('a')
var oldHref = a.getAttribute('href') // ПОлучение аттрибута по ключевому слову
var attr = a.getAttribute('title')

a.setAttribute('href', 'http://ya.ru') // Изменение аттрибута, первым параметром аттрибут, вторым - на что хотим поменять
a.setAttribute('title', 'go to yandex')
a.textContent = 'Yandex'

console.log(attr)
console.log(a)
console.log(a.attributes)