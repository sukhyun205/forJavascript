let person = [{name:"kwon",age:15, license:true},{name:"suk",age:19}]

if(person[0].age>20){
    if(person[0].license==true){
        console.log("운전가능")
    }
    else{
        console.log("면허부터따라")
    }
}
if(person[0].age<20){
    console.log("나이부터먹어라")
}



if(person[1].age>=20){ //기본 조건 if 필수
    console.log("가능")
}
else if(person[1].age>18){ //else if 추가조건 선택
    console.log("오토바이 가능")
}
else{ //else 앞의 조건이 모두 false일 경우 선택
    console.log("불가능")
}

console.log("문제1.")
user = {name:"kwon",age:20,num:-1}

if(user.num<0){
    console.log("음수")
}
else if(user.num>0){
    console.log("양수")
}
else{
    console.log("0")
}

console.log("문제2.")
let score = 100

if(score>=90 && score<=100){
    console.log("A")
}
else if(score>=80 && score<90){
    console.log("B")
}
else if(score>=70 && score<80){
    console.log("C")
}
else if(score>=60 && score<70){
    console.log("D")
}
else if(score>=0 && score<60){
    console.log("F")
}
else{
    console.log("wrong number")
}

console.log("문제3.")
let skills = ["html", "css", "JS", "React"]

if(skills.includes("JS") && skills.includes("React")){
    console.log("합격")
}
else if(skills.includes("JS") || skills.includes("React")){
    console.log("예비")
}
else{
    console.log("탈락")
}
