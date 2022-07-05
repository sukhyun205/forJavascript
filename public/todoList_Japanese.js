let taskInput = document.getElementById("task-input");

let addButton = document.getElementById("add-button");
addButton.addEventListener("click",addTask);



let taskList = [];

function addTask(){

    let task = {taskContent:taskInput.value};

    taskList.push(task);

    console.log(taskList)

    render();
}

function render(){
    resultHTML = '';

    for(let i=0; i<taskList.length; i++){
        resultHTML += 
        `<div class="task">
        <div>${taskList[i].taskContent}</div>
            <div>
                <button>check</button>
                <button>delete</button>
            </div>
        </div>`
    }
    document.getElementById("task-board").innerHTML = resultHTML;
    console.log(resultHTML)
}