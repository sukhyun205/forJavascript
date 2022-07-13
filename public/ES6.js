let bts = {
    name:"BTS",
    num:7,
}

// let name = bts.name;
// let num = bts.num;

let {name, num} = bts;

console.log(name,num)

let n = "kwon"
let a = 20

let person = {n,a}

console.log(person)

let prac = `prac prac ${person.n}`

console.log(`제 이름은 ${person.n}입니다. 나이는 ${person.a}입니다.`)

let arr = [1,2,3]

let bb = arr[0];

let [b] = arr;

console.log(b)

let aa = [1,2];
let bbb = [3,4];

let result = [...aa,...bbb];

console.log(result);

function fooo(){
    console.log("old")
}

let foo = ()=>"new";

fooo();
console.log(foo());

let age = 20;
let person2 = {
    name:"suk",
    age:30,
    getInfo(){console.log(this.age)}
}

person2.getInfo()

