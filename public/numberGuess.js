//랜덤번호를 지정
//유저가 input값을 입력하고, go버튼을 누르면
//if input==random, "맞췄습니다!"
//if input<random, "UP"
//if input>random, "DOWN"

//Reset버튼을 통해, 게임을 리셋
//기회 chance=5, if chance==0, 게임오버 (더이상 go버튼이 활성화되지않는다)
//유저가 1~100이외 값을 입력하면, "에러메세지", chance개수는 깍지않는다.
//중복값을 입력하면, "중복메세지", chance개수는 깍지않는다.


//정답 computerNum 랜덤번호를 지정
let computerNum = 0;
//result
let resultArea = document.getElementById("result-area")
//User input
let userInput = document.getElementById("user-input") //id는 반드시 copy해서 넣기
userInput.addEventListener("focus",function(){
    userInput.value="";
})
//button go
let playButton = document.getElementById("playButton")
playButton.addEventListener("click", play) //함수 play도 매개변수로 넣을수 있다는 점 중요@@, 매개변수로 함수를 넣을땐 ()를 넣지않는다. 왜? ()매개변수를 넣으면 함수가 바로 실행되어버리기 때문에. //addEventListener(클릭, 함수) 
//button reset
let resetButton = document.getElementById("reset-button")
resetButton.addEventListener("click", reset)
//
let commentArea = document.getElementById("comment-area")
//
let chanceArea = document.getElementById("chance-area")
//
let chance=5;
//
let history = []


function pickRandomNum(){
    computerNum = Math.floor((Math.random()*100)+1);
    console.log("정답은",computerNum,"(미리보기)")
    console.log("게임 시작!!")
}

function play(){
    let userValue = userInput.value; //유저가 입력한 값을 가져오고싶을땐, 변수.value로 호출
    console.log(userValue);
    
    let chanceValue = chanceArea.value;

    let gameOver=false; //gameOver가 여기있어야 reset이 정상적으로 되네

    if(userValue<1 || userValue>100){
        resultArea.textContent="エラ！！1~100の数字のみ";
        console.log(resultArea.textContent)
        return; //return으로 함수를 멈춰줘야, chance가 안깍인다.
    }

    //선생님 방법: .inclues(target)으로 좀더 수월하게 중복처리 가능
    if(history.includes(userValue)){
        resultArea.textContent="중복!!";
        return;
    }


    //중복값 처리 내 방법
    // for(let i=0; i<history.length; i++){
    //     if(userValue==history[i]){
    //         resultArea.textContent="入力値が重複します！！";
    //         console.log(resultArea.textContent)
    //         return
    //     }
    // }
    

    chance--; //아 클릭할때마다 1씩 줄게해야하는구나

    chanceValue = chance;

    chanceArea.textContent = `남은기회: ${chance}번`

    if(userValue<computerNum && userValue>0){
        resultArea.textContent="UP!!" //html에서 띄울 메세지를 변수 resultArea에 저장
        console.log(resultArea.textContent)
    }
    else if(userValue>computerNum && userValue<=100){
        resultArea.textContent="DOWN!!"
        console.log(resultArea.textContent)
    }
    else{
        commentArea.textContent="おめでとうございます！！"
        resultArea.textContent="正解!!"
        console.log(resultArea.textContent)
        playButton.disabled = true;
        chanceArea.textContent="";
    }

    history.push(userValue)
    console.log(history)

    if(chance<1){
        gameOver = true;
    }

    if(gameOver==true){
        resultArea.textContent="Game Over, Please press the reset button"
        playButton.disabled = true;
        chanceArea.textContent="";

    }

}

function reset(){
    playButton.disabled = false;
    userInput.value="";
    chanceArea.textContent="残りの機会:5"; //유저 입력값을 초기화하고,
    resultArea.textContent=""
    commentArea.textContent="1~100の数字を入力してください。"
    console.log(resultArea.textContent)
    pickRandomNum(); //새로운 랜덤숫자를 생성하는게 reset
    chance=5;
    history=[];
}

pickRandomNum()

//getelementsby 연습
// let arr_menu = document.getElementsByClassName("menu")
// console.log(arr_menu)

// let byID = document.getElementById("test")
// console.log(byID.innerHTML) //innerHTML로 보는게 구성요소 보기에는 제일 깔끔
// console.log(byID.innerText)
// console.log(byID.textContent)

