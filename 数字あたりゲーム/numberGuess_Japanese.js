//数字あたりゲーム

let inputArea = document.getElementById("input-area");
let resultArea = document.getElementById("result-area");
let commentArea = document.getElementById("comment-area");
let resetArea = document.getElementById("reset-area");
let chanceArea = document.getElementById("chance-area")
let chance=5;
let target = Math.floor((Math.random()*100)+1);
let history = [];
let answerArea = document.getElementById("answer-area")

resultArea.addEventListener("click",play);
resetArea.addEventListener("click", reset);
inputArea.addEventListener("focus",function(){inputArea.value="";})

console.log(`正解は${target}です。`)

function random(){
    target = Math.floor((Math.random()*100)+1);
    console.log(`正解は${target}です。`)
}

function play(){

    let userValue = inputArea.value; //이 함수 안에다 선언을 해줘야 변수를 알수있구나.
    let gameOver=false;

    if(userValue<1 || userValue>100){
        commentArea.textContent="1~100の数字を入力してください。";
        return; //chance가 감소되기전에 return으로 함수를 종료시켜버리는거임!
    }

    if(history.includes(userValue)){
        commentArea.textContent = "重複値は認めません。"
        return;
    }
    
    chance--;
    chanceArea.textContent = `残りの機会：${chance}回`;

    console.log(userValue)

    if(userValue<target){
        console.log("ターゲットより低いです。UP!!")
        commentArea.textContent="UP!!"
    }

    else if(userValue>target){
        console.log("ターゲットより高いです。DOWN!!")
        commentArea.textContent="DOWN!!"
    }

    else{
        console.log("正解!!")
        commentArea.textContent="正解です！！おめでとうございます。"
        resultArea.disabled=true;
    }

    if(chance<1){
        gameOver=true;
        commentArea.textContent="ゲームオーバー!! リセットボタンを押してください。"
        resultArea.disabled=true;
        answerArea.textContent=`正解は${target}でした~~`
    }

    history.push(userValue);
    console.log(history)
}

function reset(){
    resultArea.disabled=false;
    chance=5;
    commentArea.textContent="1~100の数字を入力してください。"
    chanceArea.textContent="残りの機会：５回"
    inputArea.value=""
    history=[];
    answerArea.textContent=""
    random();
}
