//to do list project

//유저가 값(할일)을 입력할 수 있다.
//값 입력후, +버튼을 누르면, 일정추가
//delete버튼을 통해, 일정 삭제
//check버튼을 통해, 일정 완료, 밑줄로 완료처리
//1) check버튼을 누르면, taskList의 객체인 inComplete가 true로 변하고
//2) true 항목의 taskContent에 밑줄을 그어, 완료를 표시한다.
//3) false 항목은 그대로 유지.

//진행중 tab을 누르면, 언더바가 이동한다.
//done tab은 끝난 아이템만, not done은 도중인 아이템만
//all tab은, 다시 전체 아이템으로 돌아옴

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
addButton.addEventListener("click", addTask);
// let taskElement = document.getElementById("task-element");
let taskList =[];
let ID;

let tabs = document.querySelectorAll(".task-tabs div") //queryselectorall은 모든 속성을 다 가지고 옴
for(let i=1;i<tabs.length;i++){
    tabs[i].addEventListener("click", function(event){filter(event)});
}
console.log(tabs)

let mode='' //JS에서 초기화 방식 ''


function addTask(){
    // console.log("clicked") //clicked로 내가 원하는 부분에 접근했는지 체크가능
    // let taskContent = taskInput.value;

    let task = {ID:randomIDgenerate() ,taskContent:taskInput.value, isComplete:false}; //객체 생성

    taskList.push(task)
    console.log(taskList)
    // taskElement.textContent = taskContent;
    render();
}

function render(){

    let resultHTML = '';
    for(let i=0; i<taskList.length; i++){

        //check값을 다시 바꿔보려 시도한 삽질!
        // if(taskList[i].ID==toggleComplete(ID) && taskList[i].isComplete==true){
        //     taskList[i].isComplete=false;
        // }

        if(taskList[i].isComplete==true){
            resultHTML += `<div class="task">
            <div class="task-done">${taskList[i].taskContent}</div>
                <div>
                  <button onclick="toggleComplete('${taskList[i].ID}')">check</button>
                  <button onclick="deleteTask('${taskList[i].ID}')">Delete</button>
               </div>
            </div>`
        }
        else{
            resultHTML += `<div class="task">
            <div>${taskList[i].taskContent}</div>
                <div>
                  <button onclick="toggleComplete('${taskList[i].ID}')">check</button>
                  <button onclick="deleteTask('${taskList[i].ID}')">Delete</button>
               </div>
            </div>`
        }
        // resultHTML+=taskList[i]; 내 예상
    }
    document.getElementById("task-board").innerHTML = resultHTML;
    console.log(resultHTML)
}

function toggleComplete(ID){

    for(let i=0; i<taskList.length; i++){
        if(taskList[i].ID==ID){
            // taskList[i].isComplete=true;
            // let checkArea = document.getElementsByClassName("check-area");
            // checkArea="되돌리기";
            taskList[i].isComplete = !taskList[i].isComplete; //(@@중요)check버튼을 다시 클릭하면, taskList[i].isComplete속성을 반대의 논리값으로 바꿔줌.
            break;
        }
    }
    console.log(taskList)
    render(); //제일 많이 하는실수! render()열심히 만들고, 호출 안하는것!
    // console.log("clicked")
    // taskList[0].isComplete=true;
}

function randomIDgenerate(){
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

function deleteTask(ID){

    for(let i=0; i<taskList.length; i++){
        if(taskList[i].ID==ID){
            // taskList.pop(); //내꺼 //아 pop()은 뒤에서부터 지우기 때문에, 내가 원하는 특정한 것만 제거하는 데에는 알맞지 않네.
            taskList.splice(i,1); //쌤꺼, splice로 시작지점부터 1개만!(특정개수만) 지우겠다.
        }
    }

    console.log(taskList)
    render();
}

function filter(event){
    console.log("filtering 테스트", event.target.id) //event는 내가 지금 접근하는 곳의 모든 정보를 보여줌

    mode = event.target.id;

    if(mode=="all"){
        render();
    }
    else if(mode=="not-done"){

        let resultHTML = '';
        for(let i=0; i<taskList.length; i++){
    
            if(taskList[i].isComplete==false){
                resultHTML += `<div class="task">
                <div>${taskList[i].taskContent}</div>
                    <div>
                      <button onclick="toggleComplete('${taskList[i].ID}')">check</button>
                      <button onclick="deleteTask('${taskList[i].ID}')">Delete</button>
                   </div>
                </div>`
            }
        }
        document.getElementById("task-board").innerHTML = resultHTML;
        console.log(resultHTML)
    }
    else if(mode="done"){

        let resultHTML = '';
        for(let i=0; i<taskList.length; i++){
    
            if(taskList[i].isComplete==true){
                resultHTML += `<div class="task">
                <div class="task-done">${taskList[i].taskContent}</div>
                    <div>
                      <button onclick="toggleComplete('${taskList[i].ID}')">check</button>
                      <button onclick="deleteTask('${taskList[i].ID}')">Delete</button>
                   </div>
                </div>`
            }
        }
        document.getElementById("task-board").innerHTML = resultHTML;
        console.log(resultHTML)
    }

}
