const toDoForm = document.querySelector("#todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector("#todo-list")

const TODOS_KEY = "todos"
let toDos = []

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function delateToDo(event){
    const li = event.target.parentElement
    li.remove()
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    saveToDos()
}

function paintToDo(newTodo){
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span")
    span.innerText = newTodo.Text
    const button = document.createElement("button")
    button.innerText="X"
    button.addEventListener("click", delateToDo)
    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)
}

function handleToDoSubmit(event){
    event.preventDefault()
    const newTodo = toDoInput.value
    toDoInput.value=""
    const newTodoObj = {
        Text:newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj)
    paintToDo(newTodoObj)
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

// function sayHello(item){
//     console.log("This time of "+item)
// }

const savedToDos = localStorage.getItem(TODOS_KEY)

// if(savedToDos !==null){
//     const parsedToDos = JSON.parse(savedToDos)
//     console.log(parsedToDos)
//     parsedToDos.forEach((item => console.log("this is turn of ", item)));
// }

// 49의 arrow function(=>)은 40-42의 function을 short cut으로 만든 것.
// 두 예시에서 사용된 sayHello 함수는 forEach로 인해 n회 반복이 아니라
// array에 속한 각 element에 sayHello("element") 형태로, 각 1회씩 수행한다는 것.

if(savedToDos !==null){
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo);
}
