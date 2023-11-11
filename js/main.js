const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const inputNombre = document.getElementById("nombre")
const inputApellido = document.getElementById("apellido")
const inputEmail = document.getElementById("email")
const textareaCatedra = document.getElementById("catedra")



let nombre = ''
let apellido = ''

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})



const btn = document.getElementById('boton')
btn.addEventListener('click', () => {
    saludarUsuario(nombre,apellido)
})


inputNombre.addEventListener('change', () => {
    if(inputNombre.value) {
       inputNombre.style = "background-color: #D2E0FB;" 
       nombre = inputNombre.value
    }
})

inputApellido.addEventListener('change', () => {
    if(inputApellido.value) {
       inputApellido.style = "background-color: #D2E0FB;" 
       apellido = inputApellido.value
    }
})

inputEmail.addEventListener('change' , () => {
    if(inputEmail.value) {
        inputEmail.style = "background-color: #D2E0FB;"
        email = inputEmail.value
    }
})

textareaCatedra.addEventListener('change' , () => {
    if(textareaCatedra.value) {
        textareaCatedra.style = "background-color: #D2E0FB;"
        catedra = textareaCatedra.value
    }
})



function saludarUsuario(nombre,apellido) {
    alert(`${nombre} ${apellido}, gracias por suscribirte.`)
}
