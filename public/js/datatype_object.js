//int, String, boolean등을 포괄할 수 있는 데이터 타입이 object타입

let patient = {
    name:"sukhyun",
    age:"20",
    disease:"cold"
}

console.log(patient)
console.log(patient["age"],patient.age)
console.log(patient["name"])
console.log(patient.name)

//배열리스트 arrlist[]안에 객체{}를 넣으면
let arrlist = [{name:"kwon",age:20},{name:"suk",age:30}]

let arrlist2 = [{},{},{}] //배열list[]안에 객체{}삽입

console.log(arrlist)
console.log(arrlist2)

console.log("list1 name: "+arrlist[0].name,"list2 age"+arrlist[1].age)

console.log(arrlist[0]["age"])

console.log("첫번째 객체 이름은",arrlist[0].name,"이다.")
console.log("두번째 객체의 나이는",arrlist[1].age,"살이다")