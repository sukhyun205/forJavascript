//if, else문만 있을때 삼항다항식으로 1줄로 깔끔하게 짤수있다.

let n = 2

if(n==1){
    console.log(1)
}else if(n==2){
    console.log(2)
}else{
    console.log("out of range")
}

let result = n==1? n:"out of range"
console.log(result)

let menu = [{name:"kwon", age:20},{},{}]
let answer = menu[0].name=="suk"? "트루":"false"
console.log(answer)

let food = "햄버거"
let answer2 = food =="햄버거"? "햄버거좋아":"다 싫어"
console.log(answer2)


// if(menu==1){
//     console.log("메뉴보기")
// }else if(menu==2){
//     console.log("더하기")
// }else if(menu==3){
//     console.log("빼기")
// }else{
//     console.log("종료")
// }

//switch case문은 조건이 명확한 숫자일때만 사용가능하기 때문에, 용도가 키오스크 메뉴 정도로 한정적이다.
// switch(menu){
//     case 1:
//         console.log("메뉴보기")
//         break;
//     case 2:
//         console.log("더하기")
//         break;
//     case 3:
//         console.log("빼기")
//         break;
//     default:
//         console.log("종료")
// }