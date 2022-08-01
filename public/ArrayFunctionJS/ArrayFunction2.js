
let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein",
]

names.forEach((item)=>{console.log("forEach는 for문이다!!",item)})


let MapPrac = names.map((item)=>{return item})
console.log("Map:",MapPrac)

// let forEach = names.forEach((item)=>{console.log(item)});
// console.log(forEach) //forEach()는 그냥 for문대신 간단하게 출력하고 싶을때

// let printMap = names.map((item)=>{return item+"추가가능"})
// console.log(printMap) //map()은 배열안에 넣어서 for문대신 출력할때.

let CEO = [
    {name:"Steven Paul Jobs", age:20},
    {name:"Bill Gates", age:29},
    {name:"Mark Elliot Zuckerberg", age:20},
    {name:"Bob", age:29},
]

let CEOforEach = CEO.forEach((item)=>{console.log("forEach는 for문이야",item)})

let CEOMap = CEO.map((item)=>{
    return item.name //CEO가 아니라, 받아온 item을 기준으로 해야 반환됨
})
console.log("map:",CEOMap)

let someCEO = CEO.some((item)=>{
    let target = "S"
    return item.name.startsWith(target)
})
console.log("some: 조건에 만족하는 item이 하나라도 있는가?",someCEO)

let everyCEO = CEO.every((item)=>{
    return item.name.startsWith("S")
})
console.log("every: 모든 item이 조건을 만족하는가?",everyCEO)

let findCEO = CEO.find((item)=>{
    return item.name.startsWith("B")
})
console.log("find: 조건에 맞는것들 중 맨 첫번째거 하나만 반환: ",findCEO)

let CEOfilter = CEO.filter((item)=>{ //filter()는 조건에 true인 값만 return.
    return item.name.startsWith("B")
})
console.log("filter: 는 조건에 맞는거 다 반환",CEOfilter)

let findIndexCEO = CEO.findIndex((item)=>{
    return item.name.startsWith("B")
})
console.log("findIndex: 는 조건에 맞는 첫번째값의 index를 반환",findIndexCEO)





// for(let i=0; i<CEO.length; i++){
//     console.log(CEO[i].name)
// }

// let CEOMap = CEO.map((item)=>{
//     return item.name
// })
// console.log(CEOMap)



