console.log("문제2.")
let score = 0

if(score>=90 && score<=100){
    console.log("A")
}
if(score>=80 && score<90){
    console.log("B")
}
if(score>=70 && score<80){
    console.log("C")
}
if(score>=60 && score<70){
    console.log("D")
}
else if(score>=0 && score<60){
    console.log("F")
}
else if(score<0 || score>100){
    console.log("wrong number")
}