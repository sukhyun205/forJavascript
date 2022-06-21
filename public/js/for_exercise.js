//1
let sum=0;
for(let i=1; i<101; i++){
    sum+=i
}
console.log("1~100합="+sum+'\t')

//2
for(let i=1; i<101; i++){
    if(i%2==1){
        console.log(i)
    }
}
console.log('\t')

//3 369문제

for(let i=1; i<=50; i++){
    let stringValue = i.toString();
    let result = ""
    for(let j=0; j<stringValue.length; j++){
        if(stringValue[j]=="3" || stringValue[j]=="6" || stringValue[j]=="9"){
            result+="짝"
        }
    }
    // let r = result.length>0? console.log(result):console.log(i)
    console.log(result.length>0? result:i) //result의 길이가 0보다 커? 크면 result출력하고, 아니면 i출력해
    // if(result.length>0){
    //     console.log(result)
    // }else{
    //     console.log(i)
    // }
}


// if(i/3==11||i/3==12||i/3==13)
// for(let i=1; i<51; i++){
//     if(i/3==11){
//         console.log("짝짝")
//     }
//     if(i/3==12){
//         console.log("짝짝")
//     }
//     if(i/3==13){
//         console.log("짝짝")
//     }
//     else if(i%3==0){
//         console.log("짝")
//     }
//     else{
//         console.log(i)
//     }
// }

//4 소수 판별하기
let n =13
let r = true

for(let i=2; i<n; i++){ //핵심은 1과 자신 이외의 수로 나눈 나머지값이 0이 되어버리면, 소수가 아니라는 것!
    if(n%i==0){
        r = false
    }
}

console.log(r)
