/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */


// import { createElement } from 'react';
import { mostrarTarjetas } from './utils.js';
import { stays } from './stays.js';
console.log(stays[0].maxGuests)
mostrarTarjetas();

let menu = document.querySelector("#menu");
let btlocation = document.querySelector("#location");
let btClose = document.querySelector("#cerrar");
let modal = document.querySelector("#modal");
let btGuests = document.querySelector("#guests");
let btadultplus = document.querySelector("#adultPlus");
let adultcont = document.querySelector("#contAdult");
let btadultminus = document.querySelector("#adultMinus");
let btchildplus = document.querySelector("#childPlus");
let childcont = document.querySelector("#contChild");
let contguests = document.querySelector("#contGuests");
contguests.value = 0;
childcont.value = 0;

//botones para despelgar modales y cerrarlos
btGuests.addEventListener("click", function () {
    modal.classList.toggle("hidden");
});

btlocation.addEventListener("click", function () {
    modal.classList.toggle("hidden");
});

btClose.addEventListener("click", function () {
    modal.classList.toggle("hidden");
});

modal.addEventListener("click", function (evento) {
    if (evento.target.classList.contains("modal-entero")) {
        modal.classList.toggle("hidden");
    }
});

//Botones de añadir y quitar huespedes adultos

btadultplus.addEventListener(("click"), function () {
    adultcont.innerHTML = parseInt(adultcont.innerHTML) + 1;
    contguests.value = parseInt(contguests.value) + 1;
    localStorage.setItem("suma", contguests.value)
})

btadultminus.addEventListener(("click"), function () {
    if (parseInt(adultcont.innerHTML) > 0) {
        adultcont.innerHTML = parseInt(adultcont.innerHTML) - 1;
        contguests.value = parseInt(contguests.value) - 1;
        localStorage.setItem("suma", contguests.value)
    }
})
//Botones de añadir y quitar huespedes niños
btchildplus.addEventListener(("click"), function () {

    childcont.value = parseInt(childcont.value) + 1;
    contguests.value = parseInt(contguests.value) + 1;
    localStorage.setItem("suma", contguests.value)
});


let btchildminus = document.querySelector("#childMinus");
btchildminus.addEventListener(("click"), function () {
    if (parseInt(childcont.value) > 0) {
        childcont.value = parseInt(childcont.value) - 1;
        contguests.value = parseInt(contguests.value) - 1;
        localStorage.setItem("suma", contguests.value)
    }
});

let btsearch = document.querySelector("#search")

btsearch.addEventListener(("click"), function () {
    let huespedes = localStorage.getItem("suma")
    stays.forEach((stay) => {
        if (stay.maxGuests >= huespedes) {
            mostrarTarjetas()
        }
    })
})


let inputLocation = document.querySelector("#inputlocation");
let sublocations = document.querySelector("#subLocations");
inputLocation.addEventListener("input", function () {
    let inputValue = inputLocation.value;
    sublocations.innerHTML = `  <div class="flex items-center gap-3">
                        <img class="w-[18px] h-[18px]" src="./src/images/icons/location-pointer.png" alt="location">
                        <p id="sugerencias" class="font-semibold text-[13px]">${inputValue}</p>
                    </div>`;
});




