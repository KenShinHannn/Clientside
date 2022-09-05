// console.log('Saharat Kanuenghade')
// console.log('Int201 client Side Programming')
// setTimeout(function cb(){
//     console.log("Vanila JavaScript")
// }, 3000)
// //setTimeout(fn, millisecond)
// console.log('Hello World')
// console.log('Bye Bye')

// function add(n1, n2){
//     return n1+n2
// }
// add(10, 20)
// console.log(add(10, 20))

// 1.can assign function to variable
// let กำนหนด scope(ขอบเขต) ของตัวแปล
// let sum=add
// console.log(sum(20, 30))
// console.log(typeof sum)

// 2.can assing function to parameter

// function multiply(n1, n2){
//     return n1*n2
// }
// function divide(n1, n2){
//     return n1/n2
// }
// function subtract(n1, n2){ //ลบ
//     return n1-n2
// }
// function calculator(n1, n2, oper){
//     return oper(n1, n2)
// }
// console.log(calculator(50, 20, add))
// console.log(calculator(50, 20, subtract))
// console.log(calculator(50, 20, multiply))
// console.log(calculator(50, 20, divide))

// function saySomething(msg){
//     return msg
// }

// function doSomething(){
//     return saySomething
// }

// let doIt=doSomething() //let doIt=saySomething
// console.log(typeof doIt)
// console.log(doIt('Hello'))

// let num1=10
// let num2=20.57
// let num3=1n

// console.log(typeof num1)
// console.log(typeof num2)
// console.log(typeof num3)

// String
// let str1='Hello'
// let str2="Good bye"
// let str3=`Greeting with ${str1} and say goodbye with ${str2}` //backticks //${variableName} ดึงค่าตัวแปลมาแสดงค่าได้
// console.log(typeof str1)
// console.log(typeof str2)
// console.log(typeof str3)
// let aLetter ='\u0041'
// console.log(aLetter)
// let emoji=String.fromCodePoint('0x1F603')
// console.log(typeof emoji)
// // boolean
// let absent=true
// let leave=false
// console.log(typeof absent)
// console.log(typeof leave)
// // symbol
// let sym1=Symbol('id')
// let sym2=Symbol('id')
// console.log(typeof sym1)
// console.log(typeof sym2)
// console.log(sym1==sym2)
// // null
// let unknowObj=null
// console.log(typeof unknowObj)

// // undefined
// let unAssign=undefined
// let x
// console.log(typeof unAssign)
// console.log(typeof x)

// object
// let student= {stdId:64102540,firstname:'Somchai', lastname:'Rakdee', absent:false}// {key:value, key:value, key:value}
// student.lastname="Jaidee"
// console.log(typeof student)
// console.log(student)

let students=['Somsir', 'Sompong', 'Somsak']
students[0]='Sakchai'
console.log(typeof students)
console.log(students)
console.log(students[2])
console.log(students[students.length-1]) //students[3]
console.log(students.length)

// function add(){
// }
// console.log(typeof add)