//배열
//slice(3,10) 3번index부터 10미만 데이터에 접근하기
//splice(3, 10) 3번 데이터부터 10개의 값 '잘'라'내'기'(중요)

let fruit = ["apple","banna","bled","ewkdk"]

fruit.pop() //끝 element삭제 pop()
console.log(fruit)
fruit.push("pineapple") //뒤부터 데이터 삽입 push("data")
console.log(fruit)

console.log(fruit.includes("apple")) //데이터가 있는지 확인하는 includes("data")

console.log(fruit.indexOf("apple")) //데이터가 있는 위치의 index를 받아오는 indexOf("data")

console.log(fruit.slice(1,3)) //원래 배열에서 기존 배열은 건들이지 않고, 새로운 배열을 만들어내는 slice(index, index)
fruit.splice(2,2) //원래 배열에서 splice(index, 자를개수)만큼 element를 빼오는 splice(index, 개수)

console.log(fruit)

//5.배열문제
let animals= [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur", 
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Grasshopper",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Moose",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum", 
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit", 
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Sandpiper",
    "Sardine",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Tiger",
    "Toad",
    "Whale",
    "Wildcat",
    "Wolf",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]

animals.pop()
animals.push("Dog")
animals.push("Mosquito", "Mouce", "Mule")

console.log(animals.includes("Human"))
console.log(animals.includes("Cat"))
animals[animals.indexOf("Red deer")] = "Deer" //arr[arr.indexOf]를 활용해서 찾고자하는 위치의 데이터에 접근할 수 있다 (중요)
console.log(animals.indexOf("Spider"))
animals.splice(81,3) //81번 데이터부터 3개의 데이터를 별도로 잘라내기

animals.splice(animals.indexOf("Tiger"),2) //Tiger와 Toad 잘라내기 ㅋㅋ

console.log(animals)

let newarr = animals.slice(animals.indexOf("Baboon"), animals.indexOf("Bison")+1) //바분~비슨까지 데이터 복사해서 newarr에 저장
console.log(newarr)