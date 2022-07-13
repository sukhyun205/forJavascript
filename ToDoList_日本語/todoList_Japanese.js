let taskInput = document.getElementById("task-input");

let addButton = document.getElementById("add-button");
addButton.addEventListener("click",addTask);

let ID;
let isComplete;

let taskList = [];
let filterList=[];

let mode="all";

// let tag = []; list에 넣는것이 아니라, querySlectorALL()을 이용하여 tag에 접근한다.
let tabs = document.querySelectorAll(".task-tabs div"); //querySelectorALL(.className)을 통해 NodeList의 형태로 내가 원하는 곳에 접근할수있다.
console.log(tabs)

for(let i=1; i<tabs.length; i++){
    tabs[i].addEventListener("click", function(event){filter(event)})
}

function filter(event){

    mode = event.target.id;

    filterList=[];

    console.log("test", event.target.id); //event를 이용해서, id인 all, ongoing, done에 접근

    if(mode=="all"){
        console.log(taskList);
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

        for(let i=0; i<taskList.length; i++){
            if(taskList[i].isComplete==true){
                filterList.push(taskList[i]);
            }
        }
        console.log(filterList);
        render();
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
    let list = [];

    // list = taskList; //이렇게 해도 되고, mode="all"로 디폴트로 all을 넣어도되고

    if(mode=="all"){
        list = taskList;
    }
    else if(mode=="ongoing" || mode=="done"){
        list = filterList;
    }

    for(let i=0; i<list.length; i++){

        if(list[i].isComplete==true){

            resultHTML += 
            `<div class="task">
            <div class="task-done">${list[i].taskContent}</div>
                <div>
                    <button onclick="toggleComplete('${list[i].ID}')">check</button>
                    <button onclick="deleteTask('${list[i].ID}')">delete</button>
                </div>
            </div>`
        }
        else{

            resultHTML += 
            `<div class="task">
            <div>${list[i].taskContent}</div>
                <div>
                    <button onclick="toggleComplete('${list[i].ID}')">check</button>
                    <button onclick="deleteTask('${list[i].ID}')">delete</button>
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

