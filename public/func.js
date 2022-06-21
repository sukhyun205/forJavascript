
//1
function greet(name){
    console.log("hi i'm",name)
    return console.log("your name is",name)
}

function meetAt(year, month, date){

    if(arguments.length==1 && arguments[0]==year){
        return console.log(arguments[0]+"년")
    }

    if(arguments.length==2 && arguments[0]==year && arguments[1]==month){
        return console.log(arguments[0]+"년",arguments[1]+"월")
    }

    console.log(year+"/"+month+"/"+date)
}

//2
function findSmallestElement(input){
    

    for(let i=0; i<input.length; i++){
        let search = input[i]
        if(search==0){
            return console.log(0)
        }
    }

    let min = input[0]

    for(let i=1; i<input.length; i++){
        if(min>input[i]){
            min = input[i]
        }
    }
    return console.log(min)
}

//3
function neededMoney(money){
    
    if(money/50000>0){
        
    }


    let oman
    let man
    let ochen
    let chen
    let obeck
    let beck



}







//호출
greet("sukhyun")
meetAt(2022)
meetAt(2022,06)
meetAt(2022,06,21)

findSmallestElement([100,200,3,0,2,1])
findSmallestElement([100,200,3,10,2,1])


// let order = "치킨버거"

// function makeburger(type){
//     console.log("타입 확인")

//     return console.log("return이 나오면, 즉시 함수 종료")

//     console.log(order=="치킨버거"? "치킨버거 나왔습니다.":false)
// }

// makeburger(order)