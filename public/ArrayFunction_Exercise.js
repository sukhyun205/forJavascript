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

// for(let i=0; i<names.length; i++){
//     console.log(names[i].split(' '))
// }

// names.forEach((item)=>{
//     console.log(item.toUpperCase())
// })

// for(let i=0; i<dataMap.length; i++){
    
//     console.log(dataMap[i].split(' ')[0]);
// }

let upperCaseName = names.map((item)=>item.toUpperCase())
console.log(upperCaseName)

let printFirstName = names.map((item)=>item.split(' ')[0])
console.log(printFirstName)

let getInitial = names.map((item)=>{
    let splitName = item.split(" ");
    let initial = "";
    console.log(splitName)

    for(let i=0; i<names.length; i++){
        initial += item[0]
    }
    return initial;
})
console.log(getInitial)




