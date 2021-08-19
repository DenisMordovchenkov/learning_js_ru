// *! Старые способы обращения к DOM API
/*
var h1 = document.getElementsByTagName('h1') // в единичном числе

var wrapper = document.getElementById('class_name') //Обращение без символов, то есть без #. Тоже в единичном числе. Потому что обращение к Element

var p = document.getElementsByClassName('text') //а тут без .   А здесь уже во вмножественном. ВОзвращает псевдомассив. Потому что Elements

console.log(document)

console.log(h1)
console.log(wrapper)
console.log(p) */

// *! Современные методы

var wrapper = document.querySelector('#class_name')
var p = document.querySelectorAll('.text')
var h1 = document.querySelector('h1')
var ul = document.querySelector('#class_name > div > div > ul')
var input = document.querySelector('input')


h1.innerHTML = '<h2 style="color: red">From JavaScript</h2>'
h1.innerText = 'Changed from JS'

console.log(input.value)
console.log(wrapper)
console.log(p)
console.log(h1)
console.log(h1.innerText)
console.log(ul)// h1.draggable = true
