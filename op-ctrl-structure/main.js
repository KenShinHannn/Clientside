// array
// console.log('array')
// let items = ['coca-cola','array','soda']
// let arr
// console.log(arr?.[1])
// console.log(items?.[0])

// // object
// console.log('object')
// let student = {id:64130500083 , firstname:'Saharat'}
// let obj
// console.log(obj?.id)
// console.log(student?.id)


// for..of (array,String)
// console.log('-------for..of (array,String)--[array]-----')
// let items = [1,2,3,4,5,6,7]
// for(item of items){
//     console.log(item)
// }
// console.log('-------for..of (array,String)--[String]-----')
// const str='Hello World'
// for(s of str){
//     console.log(s)
// }

// for..in (object)
// console.log('---------for..in (object)---------')
// for(const prop in student){
//     console.log(student[prop])
// }



// // nullish coalescing
// console.log('----------nullish coalescing--------')
// let x = 1
// console.log(x??7) // ?? = x เป็น null แสดงค่าหลัง ?? ถ้าไม่ใช่แสดงค่าปกติของมัน



// let arr 
// arr = arr??[3]
// console.log(arr)

// if (arr == undefined || arr == null) {
//     arr = [3]
// }

// // Swtich
// let num1 = 1
// let grade
// switch (num1) {
//     case 1: grade = 'A'
//         break
//     case 2: grade = 'B'
//         break
//     case 3: grade = 'C'
//         break
//     case 4: grade = 'D'
//         break
// }
// console.log(grade)

// function isEvenNumber(x){
//     return x%2===0?true:false
// }
// console.log(isEvenNumber(5))

let a1 = 11;
let a2 = '11';

if (a1 === a2) {
    console.log(true)
} else {
    console.log(false)
}