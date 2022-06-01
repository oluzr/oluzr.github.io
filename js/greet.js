const meet=document.querySelector(".meet")
const firbg=meet.querySelector(".fir_bg")
const loginform=firbg.querySelector("form")
const loginput=loginform.querySelector("input")
const hi=document.querySelector("h1.greet span")
const namezone=document.querySelector(".login p span.yourname")


function loginfun(e){
    e.preventDefault();
    const newname=loginput.value;
    loginput.value="";
    console.log(newname)
    savename(newname)
    meet.classList.add("hide")
    greetfun(newname)
}

function savename(name){
    localStorage.setItem("username",name)

} // save name


function greetfun(name){
    hi.innerText=name
    namezone.innerText=name
}

const savedname=localStorage.getItem("username")
if(savedname!==null){
    greetfun(savedname)

}else{
    meet.classList.remove("hide")
    loginform.addEventListener("submit",loginfun)
}



const name_reset=document.querySelector("section.login input")

name_reset.addEventListener("click",resetFun)

function resetFun(e){
    e.preventDefault();
    localStorage.removeItem("username")
    location.reload()
}

