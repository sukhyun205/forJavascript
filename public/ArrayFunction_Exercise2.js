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

// names.forEach((item)=>{console.log(item.toUpperCase())})


//1 map
let toUpperCaseMap = names.map((item)=>{
    return item.toUpperCase();
})
console.log(toUpperCaseMap)

let printNameMap = names.map((item)=>{
    return item.split(' ')[0];
})
console.log(printNameMap)

let getInitial = names.map((item)=>{
    let initial = "";
    let splitName = item.split(' ');

    splitName.forEach((item)=>{
        initial += item[0];
    })
    return initial;
})
console.log(getInitial)

//2 filter
let filterName = names.filter((item)=>{
    return item.includes('a');
})
console.log("filter문제1:",filterName)

// let filterName2 = names.filter((item)=>{
//     let splitName = item.split("");

//     return splitName.some((letter, index)=>
//         letter == splitName[index+1]
//     )
// })
// console.log("filter문제2:",filterName2)
