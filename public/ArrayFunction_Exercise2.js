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
    return splitName[0];
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
console.log("map 이니셜얻기",getInitial)

//2 filter
let filterinclude = names.filter((item)=>{
    return item.includes('a');
})
console.log("'a'포함filter :",filterinclude)

let filterSameletter = names.filter((item)=>{
    let splitName = item.split('');
    splitName.some((letter,index)=> 
    console.log("letter: ",letter,"index: ",index) //아 한글자한글자 계속 비교하는거구나
    )


    return splitName.some((letter,index)=> 
    letter == splitName[index+1]
)

})
console.log("중복글자 filtering: ",filterSameletter)