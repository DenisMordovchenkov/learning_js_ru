var num1 = 12
var num2 = 8

console.log('+:', num1 + num2) // 20
console.log('-:', num1 - num2) // 4
console.log('*:', num1 * num2) //96
console.log('-/', num1 / num2) //1.5

var str1 = 'Hello'
var str2 = 'World'

console.log('+:', str1 + ' ' + str2) //HelloWorld

console.log('1 + 2:', 1 + '2') //12
console.log('str1 + num1:', str1 + num1) //Hello12

console.log('Boolean + str:', true + str2) // trueWorld
console.log('true + 1:', true + 1) // 2
console.log('false + 1:', false + 1) // 1

// *! Приоритет операций

var result = 12 - 6 / 3 // 10

var isGreater = 20 - 6 * 3 >= 4
var isGreater2 = 20 - 6 * 3 >= 1
//             3    13  14  11 , чем выше значение приорета, тем он раньше выполняется.
// () имеют самый высокий приоритет!

console.log('12 - 6 / 3:', result) //Приоритеты работают как и в математике
console.log('20 - 6 * 3 >= 4:', isGreater) //false
console.log('20 - 6 * 3 >= 1:', isGreater2) //true

console.log('5 % 2:', 5 % 2) // 1
console.log('8 % 3:', 8 % 3) //2

var i = 1
i += 1
console.log('i:', i)

console.log('5 > 3:', 5 > 3) //true
console.log('3 < 2:', 3 < 2) //false

console.log('4 == 4:', 4 == 4)
console.log(`4 == '4':`, 4 == '4') // true потому, что нестрогое сравнение работает с помощью приведения типов. Поэтому перед сравнением он приводит строку 4 к цифре 4
console.log(`4 === '4':`, 4 === '4') // false тут же еще равнивается тип данных