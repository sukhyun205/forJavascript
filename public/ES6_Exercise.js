//1
// let name="noona's fruit store"
// let fruits = ["banana","apple","mango"]
// let address="Seoul"

// let store = {name,fruits,address}
// console.log(store)

//2
console.log(`제 가게 이름은 ${name}입니다. 위치는 ${address}에 있습니다.`)

//3
function calculate(obj){    // 함수 안을 바꾸시오
    // let abc = obj;
    // let {a,b,c} = abc;
    let {a,b,c} = obj;
    return a+b+c
}
console.log(calculate({a:1,b:2,c:3}))

//4
let name="noona store"
let fruits = ["banana","apple","mango"]
let address={
    country:"Korea",
    city:"Seoul"
}

function findStore(obj){
    return name=="noona store" && address.city == "Seoul"
}
console.log(findStore({name,fruits,address}))

//5
function getNumber(){
    let array = [1,2,3,4,5,6]    // 여기서부터 바꾸시오
    let first = array[0]
    let third = array[2]
    let forth = array[3]
    return {first,third,forth}
}
console.log(getNumber()) //  결과값 { first: 1, third: 3, forth: 4 }

//6
function getCalendar(first, ...rest) {
    return (
      first === "January" &&
      rest[0] === "Febuary" &&
      rest[1] === "March" &&
      rest[2] === undefined
    );
  }
  console.log(getCalendar("January","Febuary","March")); // 여기를 바꾸시오

//7
function getMinimum(){
    let a = [45,23,78]
    let b = [54,11,9]
    return Math.min(...a) // 여기를 바꾸시오
}
console.log(getMinimum())

let aa = [45,23,78]

function findMin(){
    let min = aa[0];
    for(let i=0; i<aa.length; i++){
        if(min>aa[i]){
            min=aa[i];
        }
    }
    return min;
}

console.log(findMin(aa))

//8
let sumNumber =()=> {
    // 여기서부터 바꾸시오
    const sum = function (a, b) {
      return a + b;
    };
    return sum(40, 10);
}

console.log(sumNumber())

//9
let SumNumber =()=>{
    //여기를 바꾸시오
    return addNumber(1)(2)(3);
    function addNumber(a) {
      return function (b) {
        return function (c) {
          return a + b + c;
        };
      };
    }
  }
console.log(SumNumber());

let SumNumBer =()=>{
    let addNumber =(a)=>(b)=>(c)=> a+b+c;
    return addNumber(1)(2)(3);
}
console.log(SumNumBer())



