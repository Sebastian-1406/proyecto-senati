let boton = document.getElementById("boton-expandir")
let menu = document.querySelector(".menu-contenedor")
let body = document.querySelector("body")
let numero = 0

boton.addEventListener("click", (event) => {
    if(numero == 0){
        menu.classList.add("menu-activado")
        boton.classList.add("boton-activo")
        body.classList.add("overflow")
        numero++
    }else {
        menu.classList.remove("menu-activado")
        boton.classList.remove("boton-activo")
        body.classList.remove("overflow")
        numero--
    }
})