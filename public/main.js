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
                  <button onclick="deleteTask()">Delete</button>
               </div>
            </div>`
        }
        else{
            resultHTML += `<div class="task">
            <div>${taskList[i].taskContent}</div>
                <div>
                  <button onclick="toggleComplete('${taskList[i].ID}')">check</button>
                  <button onclick="deleteTask()">Delete</button>
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
            taskList[i].isComplete = !taskList[i].isComplete; //(@@중요)check버튼을 다시 클릭하면, taskList[i].isComplete속성을 반대의 논리값으로 바꿔줌.
            break;
        }
    }

    render(); //제일 많이 하는실수! render()열심히 만들고, 호출 안하는것!
    // console.log("clicked")
    // taskList[0].isComplete=true;
}

function randomIDgenerate(){
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

function deleteTask(){
    console.log("삭제기능test")
}
