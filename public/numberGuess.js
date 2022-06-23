//랜덤번호를 지정
//유저가 input값을 입력하고, go버튼을 누르면
//if input==random, "맞췄습니다!"
//if input<random, "UP"
//if input>random, "DOWN"

//Reset버튼을 통해, 게임을 리셋
//기회 chance=5, if chance==0, 게임오버 (더이상 go버튼이 활성화되지않는다)
//유저가 1~100이외 값을 입력하면, "에러메세지", chance개수는 깍지않는다.
//중복값을 입력하면, "중복메세지", chance개수는 깍지않는다.

let computerNum = 0;

function pickRandomNum(){
    computerNum = Math.random();

    console.log("정답:",Math.floor((computerNum*100)+1)+"입니다.")
}

pickRandomNum()


// console.log(document.getElementsByClassName("menu"))

// function NumberGuess(count){

// }

// let input;
// let chance = 5;

// for(let i=0; i<chance; i++){



// }



