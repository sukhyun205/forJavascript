//to do list project

//유저가 값(할일)을 입력할 수 있다.
//값 입력후, +버튼을 누르면, 일정추가
//delete버튼을 통해, 일정 삭제
//check버튼을 통해, 일정 완료, 밑줄로 완료처리
//진행중 tab을 누르면, 언더바가 이동한다.
//done tab은 끝난 아이템만, not done은 도중인 아이템만
//all tab은, 다시 전체 아이템으로 돌아옴

let taskInput = document.getElementById("task-input");

let addButton = document.getElementById("add-button");
addButton.addEventListener("click", addTask);

// let taskElement = document.getElementById("task-element");

let taskList =[];

function addTask(){
    // console.log("clicked") //clicked로 내가 원하는 부분에 접근했는지 체크가능
    let taskContent = taskInput.value;
    taskList.push(taskContent)
    console.log(taskList)
    // taskElement.textContent = taskContent;
    render();
}

function render(){
    let resultHTML = '';
    for(let i=0; i<taskList.length; i++){
        // resultHTML+=taskList[i]; 내 예상
        resultHTML += `<div class="task">
        <div>${taskList[i]}</div>
            <div>
              <button>check</button>
              <button>Delete</button>
           </div>
        </div>`
    }
    document.getElementById("task-board").innerHTML = resultHTML;
    console.log(resultHTML)
}
