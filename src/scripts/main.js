/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { stays } from './stays.js';

let contenedor = document.querySelector("#container");
function mostrarTarjetas() {
    contenedor.innerHTML = "";
    stays.forEach((stay) => {
        contenedor.innerHTML += `<div class="flex flex-col max-w-[330px] ">
                <img class="rounded-2xl"
                    src="${stay.photo}"
                    alt="photo">
                <div class=" w-[100%] text-[14px] flex justify-between items-center pt-1 text-gray-500">
                    <span class="flex">
                        <p>${stay.type}</p>
                        <p>, ${stay.beds} beds</p>
                    </span>
                    <span class="flex"><img class="w-[15px]" src="./src/images/icons/starroja.svg" alt="star">${stay.rating}</span>
                </div>
                <p class="font-semibold">${stay.title}</p>
            </div>`;
    })
}

mostrarTarjetas();