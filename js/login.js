const wrap = document.querySelector(".wrap")
const login_sec = wrap.querySelector(".login")
const loginform = login_sec.querySelector("form")
const loginput = loginform.querySelector("input")
const h1 = login_sec.querySelector("h1")

// 1. 로그인
function loginfun(e) {
    e.preventDefault();
    const newname = loginput.value;
    loginput.value = "";
    loginform.classList.add("hidden")
    console.log(newname)
    setname(newname)
    h1event(newname)
}

function setname(yourname) {
    localStorage.setItem("username", yourname)
}

function h1event(name) {
    h1.innerText = `hi ${name}`
    h1.classList.remove("hidden")
}

const savedname = localStorage.getItem("username")
if (savedname == null) {
    loginform.classList.remove("hidden")
    loginform.addEventListener("submit", loginfun)
} else {
    h1event(savedname)
}

// 2.카운트다운

const count_sec = wrap.querySelector("section.count")
const h2 = count_sec.querySelector("h2")

function count() {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2,"0")
    const min = String(now.getMinutes()).padStart(2,"0")
    const sec = String(now.getSeconds()).padStart(2,"0")
    console.log()
    h2.innerText=`${hour}:${min}:${sec}`
}
setInterval(count,100)


// 3.투두리스트

const todo_sec=wrap.querySelector(".todo")
const todoform=todo_sec.querySelector("form")
const todoinput=todoform.querySelector("input")
const todoList=todo_sec.querySelector("ul")
let TODO=[]


todoform.addEventListener("submit",todoFun)

function todoFun(w){
    w.preventDefault();
    const newtodo=todoinput.value;
    todoinput.value="";
    const OBJ={
        id:Date.now(),
        text:newtodo,
    }
    
    TODO.push(OBJ) 
    //투두랑 OBJ는 오브젝트입니다
    // console.log(TODO)
    saveTODO(TODO)
    creaFun(OBJ)
}


function creaFun(OBJ){
    const li=document.createElement("li")
    li.id=OBJ.id;
    const span=document.createElement("span")
    span.innerText=OBJ.text;
    const btn=document.createElement("button")
    btn.innerText="x"
    btn.addEventListener("click",deletefun)
    li.appendChild(span)
    li.appendChild(btn)
    todoList.appendChild(li)
}

function deletefun(e){
    const li = e.target.parentElement;
    li.remove();
    console.log(li)
    TODO=TODO.filter((i)=>i.id!=li.id)
    saveTODO(TODO)
    

}

function saveTODO(savaLIST){
    localStorage.setItem("TODO",JSON.stringify(savaLIST))
}

const savedTODO=localStorage.getItem("TODO")
if(savedTODO!==null){
    TODO=JSON.parse(savedTODO)
    TODO.forEach(creaFun)
}


