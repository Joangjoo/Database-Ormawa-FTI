const toogleButton = document.querySelector(".toogleButton")
const toogleMenu = document.querySelector(".navigation-menu")

toogleButton.addEventListener("click", () =>{
    toogleMenu.classList.toggle("hidden")
})

const navbar = document.querySelector("nav")
const list = document.querySelector("ul")

function scrollTop(){
    if(window.scrollY > 10){
        navbar.classList.add("bg-secondary")
        navbar.classList.add("radius")
        navbar.classList.add("transisi")
        navbar.classList.remove("bg-transparent")
    }
    else{
        navbar.classList.remove("bg-secondary")
        navbar.classList.remove("transisi")
        navbar.classList.add("transisi2")
        navbar.classList.add("bg-transparent")
    }
}

window.addEventListener("scroll",scrollTop)




