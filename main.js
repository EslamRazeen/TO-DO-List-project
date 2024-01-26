let input = document.querySelector(".the-input");
let plus = document.querySelector(".plus")
let container = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let delete_all = document.querySelector(".delete-all");
let parentSpan = document.querySelector(".tasks-content");

window.onload = function(){
    input.focus();
}


let arr  = [];
// localStorage.clear();



plus.onclick = function(){
    if(input.value === ''){
        console.log("Empty");
    }
    else{

        ToDoList(input.value);

    }
    check();
}



function check(){

    if(!parentSpan.childElementCount){

        parentSpan.style.backgroundColor = "white";
        delete_all.style.display = "none";

    }
    else{

        parentSpan.style.backgroundColor = "#F6F6F6";
        delete_all.style.display = "block";
        
    }

}



function countOfTask(){
    tasksCount.innerHTML = parentSpan.childElementCount;
}



if(localStorage.length){
    
    for(let [key , value ] of Object.entries(localStorage)){

        ToDoList(key);

    }

}
else{
    check();
}







function ToDoList(val){

    let text = document.createTextNode(val);
    let span = document.createElement("span");
    let spanText = document.createTextNode("Delete");
    span.appendChild(spanText);
    span.className = "delete";
    let mainSpan = document.createElement("span");
    mainSpan.appendChild(span);
    mainSpan.appendChild(text);
    mainSpan.className = "task-box";
    
    parentSpan.appendChild(mainSpan);


    if(parentSpan.childElementCount){
        span.onclick = function(){
            span.parentElement.remove();
            localStorage.removeItem(span.parentElement.textContent.slice(6));
            countOfTask();
        }
    }

    localStorage.setItem(val , val);

    countOfTask();

    input.value = "";
    input.focus();

}





delete_all.onclick = function(){

    localStorage.clear();
    parentSpan.innerHTML = '';
    countOfTask();
    check();
}