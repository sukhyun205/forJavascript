for(let i=1; i<=10; i++){
    if(i%2==1){
        console.log(i)
    }
}

for(let i=0; i<10; i+=2){
    console.log(i+1)
}

for(let i=2; i<10; i++){
    for(let j=1; j<10; j++){
        console.log(i+"*"+j+"="+i*j)
    }
}

//별찍기

for(let i=1; i<5; i++){
    console.log("*".repeat(i))
}

console.log("\t")

for(let i=4; i>0; i--){
    console.log("*".repeat(i))
}

console.log("\t")

for(let i=4; i>0; i--){
    console.log("*".repeat(5-i))
}

console.log("\t")
//거꾸로 별찍기
for(let i=4; i>0; i--){
    console.log(" ".repeat(5-i) + "*".repeat(i)) 
}

console.log("\t")

let fruit = ['apple','banana','grape']

for(let i=0; i<fruit.length; i++){
    console.log(fruit[i])
}








