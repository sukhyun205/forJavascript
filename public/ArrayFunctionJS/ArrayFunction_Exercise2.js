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

//1 map
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
    let initial = "";

    splitName.forEach((item)=>{
        initial += item[0];
    })

    return initial
})
console.log(getInitial)

//2 filter
let filterinclude = names.filter((item)=>{
    return item.includes('a')
})
console.log(filterinclude)

let filterDouble = names.filter((item)=>{
    let splitName = item.split('');

    return splitName.some((letter,index)=>letter == splitName[index+1])
})
console.log(filterDouble)

//3 some
let someLength = names.some((name)=>{
    return name.length>=20;
})
console.log("이름길이가 20자이상? some: ",someLength)

let someinclude = names.some((item)=>{
    let splitName = item.split(' ');
    splitName.pop(); //아 pop()을 해서 성을 제외시키는 거구나!!!!!

    return splitName.some(item=>
        item.includes('P'||'p'))
})
console.log("私のsome P포함: ",someinclude)

console.log("講義のsome: ",names.some((item)=>{
    let splitName = item.split(' ');
    splitName.pop();
    console.log("test: ",splitName)

    let includeP = "";

    splitName.some(eachName=>
        includeP += eachName.toLocaleLowerCase().includes('p')
        )
    return includeP;
}))

//every
console.log("every:",names.every((item)=>{
    return item.length>20;
}))

console.log("Does every name inclues 'a'?: ", names.every((item)=>{
    return item.includes('a')
}))

//find
console.log("이름이 20자 이상인 사람이름: ",names.find((item)=>{
    return item.length>=20;
}))

console.log("have middlename: ",names.find(item=>
    item.split(' ').length>=3 //아 find는 조건에 해당하는 첫번째 값만 return한다 그랬다
))

console.log("have middlename: ",names.find((item)=>{
    let splitName = item.split(' ');
    let haveMiddleName = "";

    splitName.forEach((item)=>{
        haveMiddleName += item.length>2;
    })

    return haveMiddleName;
}))

//findIndex
let indexNumber = names.findIndex((item)=>{
    return item.length>=20;
})
console.log(indexNumber)

console.log("haveMiddleName's index: ",names.findIndex(item=>{
    return item.split(' ').length>=3;
}))



//1 map
// let toUpperCase = names.map((item)=>{
//     return item.toUpperCase();
// })
// console.log(toUpperCase)

// let printFirstName = names.map((item)=>{
//     let splitName = item.split(' ');
//     return splitName[0];
// })
// console.log(printFirstName)

// let getInitial = names.map((item)=>{
//     let splitName = item.split(' ');
//     let initial = "";

//     splitName.forEach((item)=>{
//         initial += item[0];
//     })

//     return initial
// })
// console.log("map 이니셜얻기",getInitial)

//2 filter
// let filterinclude = names.filter((item)=>{
//     return item.includes('a');
// })
// console.log("'a'포함filter :",filterinclude)

// let filterSameletter = names.filter((item)=>{
//     let splitName = item.split('');
//     splitName.some((letter,index)=> 
//     console.log("letter: ",letter,"index: ",index) //아 한글자한글자 계속 비교하는거구나
//     )


//     return splitName.some((letter,index)=> 
//     letter == splitName[index+1]
// )

// })
// console.log("중복글자 filtering: ",filterSameletter)