let taskInput = document.getElementById("task-input");

let addButton = document.getElementById("add-button");
addButton.addEventListener("click",addTask);

let ID;
let isComplete;

let taskList = [];

let mode='';

// let tag = []; list에 넣는것이 아니라, querySlectorALL()을 이용하여 tag에 접근한다.
let tabs = document.querySelectorAll(".task-tabs div"); //querySelectorALL(.className)을 통해 NodeList의 형태로 내가 원하는 곳에 접근할수있다.
console.log(tabs)

for(let i=1; i<tabs.length; i++){
    tabs[i].addEventListener("click", function(event){filter(event)})
}

function filter(event){

    mode = event.target.id;

    console.log("test", event.target.id); //event를 이용해서, id인 all, ongoing, done에 접근

    let filterList=[];

    
    if(mode=="all"){
        render();
    }
    else if(mode=="ongoing"){

        for(let i=0; i<taskList.length; i++){
            if(taskList[i].isComplete==false){
                filterList.push(taskList[i]);
            }
        }
        console.log(filterList);
        render();
    }
    else if(mode=="done"){

        let resultHTML = '';

        for(let i=0; i<taskList.length; i++){
            if(taskList[i].isComplete==true){
                resultHTML += 
                `<div class="task">
                <div class="task-done">${taskList[i].taskContent}</div>
                    <div>
                        <button onclick="toggleComplete('${taskList[i].ID}')">check</button>
                        <button onclick="deleteTask('${taskList[i].ID}')">delete</button>
                    </div>
                </div>`
            }
        }
        document.getElementById("task-board").innerHTML = resultHTML;
        

    }

}


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
                    <button onclick="deleteTask('${taskList[i].ID}')">delete</button>
                </div>
            </div>`
        }
        else{

            resultHTML += 
            `<div class="task">
            <div>${taskList[i].taskContent}</div>
                <div>
                    <button onclick="toggleComplete('${taskList[i].ID}')">check</button>
                    <button onclick="deleteTask('${taskList[i].ID}')">delete</button>
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
            taskList[i].isComplete=!taskList[i].isComplete; //만약 다시클릭했을때, 되돌리고 싶다면, !not을 활용하면 된다.
            break;
        }
    }

    render();
}

function deleteTask(ID){

    for(let i=0; i<taskList.length; i++){
        if(taskList[i].ID==ID){
            taskList.splice(i,1);
            break;
        }
    }

    render();
}

