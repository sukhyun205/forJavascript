//변수나 함수를 최상단으로 끌어올리는것이 "호이스팅"
const unchangable = "변하지 않는 것이 const 바꾸고싶지않은 비밀번호같은 값을 const변수에 할당"

// var color = "red"//var은 변수선언이 중복인데도 에러처리를 안하네.. 이전 문법이며 var은 쓰지말자

let color = "red2" 
let color2 = "pink"
// console.log(color2,color)

//const는 고정값을 위한 변수, let은 object처럼 int, string, boolean포함 변수

let n = 10
n = 10 + n
// console.log(n)

let pwd = 2
pwd = pwd>10
// console.log(pwd)


//3.변수와 자료형 문제
//문제1
let a = 1
let b = 2
console.log(a,b)

let temp = a
a = b
b = temp
console.log(a,b)
//문제2
console.log(4**3)
console.log(1/0)
console.log(5==5)

let a2 = 10
let b3 = "10"
console.log(a2===b3) // ===은 type이 같으면 true
console.log(true||true)
console.log(!true) //!true = not true






