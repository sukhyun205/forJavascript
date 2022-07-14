let names = [
    {name:"kwon", age:20},
    {name:"suk", age:21},
    {name:"hyun", age:22}
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
    return item.startsWith("k"); 
})
console.log(data2)

let data3 = names.some((item)=>{
    return item.startsWith("s");
})
console.log(data3)



// function printNames(){
//     for(let i=0; i<names.length; i++){
//         console.log(names[i])
//     }
// }

// let printNames2 = () => {
//     console.log(data)
// }

// console.log(printNames2)