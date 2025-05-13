/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */


import { mostrarTarjetas } from './utils.js';


mostrarTarjetas();


let menu = document.querySelector("#menu");
let btlocation = document.querySelector("#location");
let btClose = document.querySelector("#cerrar");
let modal = document.querySelector("#modal");
let btGuests = document.querySelector("#guests");

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

//Botones de añadir y quitar adultos
let btadultplus = document.querySelector("#adultPlus");
let adultcont = document.querySelector("#contAdult");
btadultplus.addEventListener(("click"), function () {
    adultcont.innerHTML = parseInt(adultcont.innerHTML) + 1;
    contguests.value = adultcont.innerHTML
})
let btadultminus = document.querySelector("#adultMinus");
btadultminus.addEventListener(("click"), function () {
    if (parseInt(adultcont.innerHTML) > 0) {
        adultcont.innerHTML = parseInt(adultcont.innerHTML) - 1;
    }
    contguests.value = adultcont.innerHTML
})
//Botones de añadir y quitar niños
let btchildplus = document.querySelector("#childPlus");
let childcont = document.querySelector("#contChild");
let contguests = document.querySelector("#contGuests");


childcont.value = 0;
btchildplus.addEventListener(("click"), function () {
    childcont.value = parseInt(childcont.value) + 1;
    contguests.value = childcont.value
});



let btchildminus = document.querySelector("#childMinus");
btchildminus.addEventListener(("click"), function () {
    if (parseInt(childcont.value) > 0) {
        childcont.value = parseInt(childcont.value) - 1;
    }
    contguests.value = childcont.value
});

console.log(contguests.value);



// childcont.addEventListener("input", function () {
//     let childcontValue = childcont.value;
//     console.log(childcontValue);
// });

let inputLocation = document.querySelector("#inputlocation");
let sublocations = document.querySelector("#subLocations");
inputLocation.addEventListener("input", function () {
    let inputValue = inputLocation.value;
    sublocations.innerHTML = `  <div class="flex items-center gap-3">
                        <img class="w-[18px] h-[18px]" src="./src/images/icons/location-pointer.png" alt="location">
                        <p id="sugerencias" class="font-semibold text-[13px]">${inputValue}</p>
                    </div>`;
});


// //Desplegar guests en contador

// function guests() {
//     contguests.innerHTML = childcont.value
//     return contguests.innerHTML;

// }
// guests();

