/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */


import { mostrarTarjetas } from './utils.js';


mostrarTarjetas();

let fondo = document.querySelector("#fondo");
let menu = document.querySelector("#menu");
let icon = document.querySelector("#icono");
let header2 = document.querySelector("#header2");
let header1 = document.querySelector("#header1");
let btClose = document.querySelector("#cerrar");


let btGuests = document.querySelector("#guests");

//Boton de Guests para desplegar menu 
btGuests.addEventListener("click", function () {
    fondo.classList.toggle("hidden");
    menu.classList.toggle("hidden");
    icon.classList.toggle("hidden");
    header2.classList.toggle("hidden");
    header1.classList.toggle("hidden");
})

//Boton de close para cerrar menu
btClose.addEventListener("click", function () {
    menu.classList.toggle("hidden");
    fondo.classList.toggle("hidden");
    icon.classList.toggle("hidden");
    header1.classList.toggle("hidden");
    header2.classList.toggle("hidden");
});
//Botones de añadir y quitar adultos
let btadultplus = document.querySelector("#adultPlus");
let adultcont = document.querySelector("#contAdult");
btadultplus.addEventListener(("click"), function () {
    adultcont.innerHTML = parseInt(adultcont.innerHTML) + 1;
})
let btadultminus = document.querySelector("#adultMinus");
btadultminus.addEventListener(("click"), function () {
    if (parseInt(adultcont.innerHTML) > 0) {
        adultcont.innerHTML = parseInt(adultcont.innerHTML) - 1;
    }
})
//Botones de añadir y quitar niños
let btchildplus = document.querySelector("#childPlus");
let childcont = document.querySelector("#contChild");
btchildplus.addEventListener(("click"), function () {
    childcont.innerHTML = parseInt(childcont.innerHTML) + 1;
});
let btchildminus = document.querySelector("#childMinus");
btchildminus.addEventListener(("click"), function () {
    if (parseInt(childcont.innerHTML) > 0) {
        childcont.innerHTML = parseInt(childcont.innerHTML) - 1;
    }
});

//Desplegar guests en contador
// let contguests = document.querySelector("#contGuests")
// function guests() {
//     contguests.innerHTML = childcont.textContent + adultcont.textContent + ` guests`
// }
// guests();
