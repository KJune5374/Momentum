// const loginForm=document.querySelector("#login-form")
// const loginInput = loginForm.querySelector("input")
// const loginButton = loginForm.querySelector("button")

// const loginInput = document.querySelector("#login-form input")
// const loginButton = document.querySelector("#login-form button")

// function buttonclick(){
//     console.log(loginInput.value)
// }

// loginButton.addEventListener("click", buttonclick)

// const loginInput = document.querySelector("#login-form input")
// const loginButton = document.querySelector("#login-form button")

// function buttonclick(){
//     const username = loginInput.value
//     if (username===""){
//         alert("이름을 적어주세요.")
//     }else if(username.length > 15) {
//         alert("이름이 너무 깁니다.")
//     }
// }

// loginButton.addEventListener("click", buttonclick)

// const loginForm = document.querySelector("#login-form")
// const loginInput = document.querySelector("#login-form input")

// const link = document.querySelector("a")

// function loginSubmit(event){
//     event.preventDefault()
//     // 브라우저가 기본적으로 행하는 기능들에 대한 정지 함수(preventDefault)
//     // 31행의 첫번째 (argument)로 발생된 event 정보를 제공.
    // const username = loginInput.value
    // console.log(event)
// }
// function linkclick(event){
//     event.preventDefault()
//     console.dir(event)
// }

// loginForm.addEventListener("submit", loginSubmit)
// link.addEventListener("click", linkclick)

// event.preventDefault 함수는 type, 클릭한 좌표, 그 외 필요한 정보 다수를 확인하고 싶을 때 사용.

const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME="hidden"
const USERNAME_KEY="username"

function loginSubmit(event){
    event.preventDefault()
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username)
}

loginForm.addEventListener("submit", loginSubmit)

function paintGreetings(username){
    greeting.innerText=`Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername===null){
    // form 보여주기
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", loginSubmit)
} else {
    // form 감추기
    paintGreetings(savedUsername)
}
