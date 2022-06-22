
//1
function greet(name){
    console.log("hi i'm",name)
    return console.log("your name is",name);
}

function meetAt(year, month, date){

    //삼항다항식으로 작성
    // arguments.length==1 && arguments[0]>2000? console.log(arguments[0]+"년"):console.log("유효한 년도와 월을 입력해주세요. (2000년도이상, 12월이하)")

    if(arguments.length==1 && arguments[0]>2000){
        console.log(arguments[0]+"년")
    }

    // arguments.length==2 && arguments[0]>2000 && arguments[1]<=12? console.log(arguments[0]+"년",arguments[1]+"월"):console.log("유효한 년도와 월을 입력해주세요.")

    else if(arguments.length==2 && arguments[0]>2000 && arguments[1]<=12){
        console.log(arguments[0]+"년",arguments[1]+"월")
    }

    else{
        console.log(year+"/"+month+"/"+date)
    }



}

//2
function findSmallestElement(input){

    for(let i=0; i<input.length; i++){
        let search = input[i];
        if(search==0){
            return console.log("배열 내",search,"값이 있습니다.")
        }
    }

    let min = input[0];

    for(let i=1; i<input.length; i++){
        if(min>input[i]){
            min = input[i];
        }
    }
    return console.log(min)
}

//3
function MoneyChange(money){

    unitOfMoney = [50000,10000,5000,1000,500,100]; //돈 단위 value값을 넣은 배열 생성

    for(let i=0; i<unitOfMoney.length; i++){

        let unit = parseInt(money/unitOfMoney[i]);
        console.log(unitOfMoney[i],"X",unit)
        money=money-(unitOfMoney[i]*unit);

    }

    //이렇게 귀찮게 일일이 쓰지않고, 위처럼 하나의 for문으로 간결하게 내가 짰다!!
    // let oman = parseInt(money/50000) //5만원보다 작으면 oman=0
    // if(oman>=1){
    //     money=money-(oman*50000)
    // }

    // let man = parseInt(money/10000)  //man=1
    // if(man>=1){
    //     money=money-(man*10000) //1보다 크니까 이제 남은 money=2500원
    // }

    // let ochen
    // let chen
    // let obeck
    // let beck = money/100
    
    // console.log("50000 X "+oman)
    // console.log("10000 X "+man)
}



//호출
//1
greet("sukhyun")
meetAt(2022)
meetAt(2022,06)
meetAt(2022,06,21)
//2
findSmallestElement([100,200,3,0,2,1])
findSmallestElement([100,200,3,10,2,1])
//3
MoneyChange(67300)

//백틱을 `` 활용하여, 변수를 보다 직관적으로 확인할 수 있다.
function meetAt_refer(year,month,date){
    let todayYear = year;
    let todayMonth = month;
    let todayDate = date;

    if(todayYear){
        return `${todayYear}년입니다.`
    }
}
console.log(meetAt_refer(2022))
