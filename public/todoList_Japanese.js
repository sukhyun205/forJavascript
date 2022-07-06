let taskInput = document.getElementById("task-input");

let addButton = document.getElementById("add-button");
addButton.addEventListener("click",addTask);

let ID;
let isComplete;

let taskList = [];

function addTask(){

    let task = {ID:randomIDGenerator(),taskContent:taskInput.value,isComplete:false};

    taskList.push(task);

    console.log(taskList)

    render();
}

function randomIDGenerator(){
    return Math.random().toString(36).substr(2, 16);
}

function render(){
    let resultHTML = '';


    for(let i=0; i<taskList.length; i++){

        if(taskList[i].isComplete==true){

            resultHTML += 
            `<div class="task">
            <div class="task-done">${taskList[i].taskContent}</div>
                <div>
                    <button onclick="toggleComplete('${taskList[i].ID}')">check</button>
                    <button>delete</button>
                </div>
            </div>`
        }
        else{

            resultHTML += 
            `<div class="task">
            <div>${taskList[i].taskContent}</div>
                <div>
                    <button onclick="toggleComplete('${taskList[i].ID}')">check</button>
                    <button>delete</button>
                </div>
            </div>`
        }


    }
    document.getElementById("task-board").innerHTML = resultHTML;
    console.log(resultHTML)
}

function toggleComplete(ID){

    for(let i=0; i<taskList.length; i++){
        if(ID==taskList[i].ID){
            taskList[i].isComplete=true;
            break;
        }
    }

    render();
}