let names = [
    {name:"suk", age:21},
    {name:"hyun", age:22},
    {name:"kwon", age:20},
    {name:"kang"}
]

names.forEach(function printName(item){
    console.log(item)
})

names.forEach((item,index)=>{
    console.log(item,index)
})

let data = names.map((item)=>{
    return item.age <= 30;
    // return `${item.name}은 ${item.age}살이다.`;    
})
console.log(data)

let data2 = names.filter((item)=>{
    return item.name.startsWith("k"); //startWith("string")은 문자만 필터할수있구나
})
console.log("filter: ", data2)

let data3 = names.some((item)=>{ //some은 s로 시작하는 문자가 있으면 true 반환
    return item.name.startsWith('s');
})
console.log(data3)

let data4 = names.every((item)=>{ //every는 모든 item에 조건이 맞으면 true 반환
    return item.name.length>0
})
console.log(data4)

let data5 = names.find((item)=>{ //find는 filter와 달리 맨 첫번째 하나만 가져온다. 만약 정렬되어있는 자료라면 첫번째 걸 찾아올수있겠네, 아니라면 filter()가 더 유용할듯
    return item.name.startsWith("k")
})
console.log("find: ", data5)

let data6 = names.findIndex((item)=>{
    return item.name.startsWith("kang")
})
console.log("findIndex:", data6)


// function printNames(){
//     for(let i=0; i<names.length; i++){
//         console.log(names[i])
//     }
// }

// let printNames2 = () => {
//     console.log(data)
// }

// console.log(printNames2)