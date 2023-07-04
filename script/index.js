const btn = document.querySelector(".navBtn");
const nav = document.querySelector(".mNav");
const overlay = document.querySelector(".overlay")

const match = window.matchMedia("(max-width:700px)")

function closeNav(){
    nav.dataset.state="close"
    overlay.style.opacity="0"
    overlay.style.pointerEvents="none"
}

function openNav(){
    nav.dataset.state="open"
    overlay.style.opacity="1"
    overlay.style.pointerEvents="fill"
}

btn. addEventListener("click", (e)=>{
    if(match.matches===true){
        if(nav.dataset.state==="close"){
            openNav()
        }else{
            closeNav()
        }
    }
})
match.addEventListener("change", ()=>{
    closeNav()
})

document.body.addEventListener("click", (e)=>{
    if(e.target.matches(".overlay")){
        closeNav()
    }
})