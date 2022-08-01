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
];

//map
let toUpperCase = names.map((item)=>{
    return item.toUpperCase();
})
console.log(toUpperCase)

let printFirstName = names.map((item)=>{
    let splitName = item.split(' ');
    return splitName[0]
})
console.log(printFirstName)

let getInitial = names.map((item)=>{
    let splitName = item.split(' ');
    let initial = '';

    splitName.forEach((letter)=>
        initial += letter[0]
    )
    return initial //아 return을 안에 집어넣을때만 {}가 필요한거구나.
})
console.log(getInitial)

//filter
let printSameName = names.filter((item)=>{
    return item.includes('a')
})
console.log(printSameName)

let printDoubleName = names.filter((item)=>{
    let splitName = item.split('');

    return splitName.some((letter,index)=> //아 some을 쓰는이유는 조건에 맞는 true만 return을 해주기 위함이다.
        letter == splitName[index+1]
    )
})
console.log(printDoubleName)

let NameLength = names.some((item)=>{
    return item.length>=20
})
console.log(NameLength)

let NameIncludeP = names.some((item)=>{
    let splitName = item.split(' ')
    splitName.pop();

    return splitName.some(item=>
        item.toLocaleLowerCase().includes('p')
    ) 
})
console.log(NameIncludeP)

//every
console.log(names.every((item)=>{
    return item.length>20;
}))

console.log(names.every((item)=>{
    return item.includes('a')
}))

//find
console.log(names.find((item)=>{
    return item.length>=20
}))

console.log(names.find((item)=>{
    let splitName = item.split(' ');
    return splitName.find((item)=>
        item.length>2
    )
}))

//findIndex
console.log(names.findIndex((item)=>{
    return item.length>=20;
}))

console.log(names.findIndex((item)=>{
    splitName = item.split(' ');
    return splitName.find((item)=>
    item.length>2)
}))



