/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */


// import { createElement } from 'react';
import { mostrarTarjetas } from './utils.js';
import { stays } from './stays.js';
mostrarTarjetas(stays);


let btlocation = document.querySelector("#location");
let btClose = document.querySelector("#cerrar");
let modal = document.querySelector("#modal");
let btGuests = document.querySelector("#guests");
let btadultplus = document.querySelector("#adultPlus");
let adultcont = document.querySelector("#contAdult");
let btadultminus = document.querySelector("#adultMinus");
let btchildplus = document.querySelector("#childPlus");
let childcont = document.querySelector("#contChild");
let btchildminus = document.querySelector("#childMinus");
let contguests = document.querySelector("#contGuests");
let btsearch = document.querySelector("#search")
let inputLocation = document.querySelector("#inputlocation");
let sublocations = document.querySelector("#subLocations");
contguests.value = 0;
childcont.value = 0;
localStorage.setItem("suma", 0)
localStorage.setItem("city", "")
localStorage.setItem("country", "")

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

btchildminus.addEventListener(("click"), function () {
    if (parseInt(childcont.value) > 0) {
        childcont.value = parseInt(childcont.value) - 1;
        contguests.value = parseInt(contguests.value) - 1;
        localStorage.setItem("suma", contguests.value)
    }
});

//Boton para buscar filtrando 
btsearch.addEventListener(("click"), function () {
    let huespedes = localStorage.getItem("suma")
    let ciudad = localStorage.getItem("city")

    if (huespedes != 0 && ciudad != "") {
        let filtrado = stays.filter((stay) => stay.maxGuests >= huespedes && stay.city == ciudad || stay.city == inputLocation.value)
        mostrarTarjetas(filtrado)
        modal.classList.toggle("hidden");
    } else if (huespedes == 0 && ciudad != "") {
        let filtrado = stays.filter((stay) => stay.city == ciudad || stay.city == inputLocation.value)
        mostrarTarjetas(filtrado)
        modal.classList.toggle("hidden");
    } else if (huespedes != 0 && ciudad == "") {
        let filtrado = stays.filter((stay) => stay.maxGuests >= huespedes)
        mostrarTarjetas(filtrado)
        modal.classList.toggle("hidden");
    } else if (huespedes == 0 && ciudad == "") {
        modal.classList.toggle("hidden");
        mostrarTarjetas(stays)
    }
})

//Boton para las locaciones 

inputLocation.addEventListener("input", function () {
    if (inputLocation.value == "") {
        sublocations.innerHTML = "";
        localStorage.setItem("city", "")
        localStorage.setItem("country", "")
    } else {
        const entrada = inputLocation.value.toLowerCase();
        stays.forEach((stay) => {
            if (stay.city.toLowerCase().startsWith(entrada)) {
                sublocations.innerHTML = `
                        <div class="flex items-center gap-3">
                            <img class="w-[18px] h-[18px]" src="./src/images/icons/location-pointer.png" alt="location">
                            <p id="sugerencias" class="font-semibold text-[13px]">${stay.city},${stay.country}</p>
                        </div>`;
                localStorage.setItem("city", stay.city)
                localStorage.setItem("country", stay.country)
            }

        })

    }
})

//boton para copiar la sugerencia de locacion al input 
sublocations.addEventListener("click", function () {
    let ciudad = localStorage.getItem("city")
    let pais = localStorage.getItem("country")
    inputLocation.value = `${ciudad},${pais}`
})





