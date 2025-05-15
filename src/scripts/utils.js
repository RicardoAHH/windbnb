/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */

import { stays } from './stays.js';
let contenedor = document.querySelector("#container");

//Funcion para mostrar las tarjetas en la pantalla 
export function mostrarTarjetas(array) {
    contenedor.innerHTML = "";
    let contador = 0
    array.forEach((stay) => {
        if (stay.beds !== null && stay.superHost == true) {
            contador += +1
            contenedor.innerHTML += `<div class="flex flex-col w-[330px] lg:w-[100%] lg:h-[300px] xl:h-[380px]">
                <div class="w-[100%] h-[228px] lg:h-[100%] items-center flex object-cover ">
                <img class="rounded-2xl object-cover w-[100%] h-[100%] lg:h-[250px] xl:h-[340px]"
                    src="${stay.photo}"
                    alt="photo"></div>
                <div class=" w-[100%] text-[14px] flex justify-between items-center pt-1 text-gray-500">
                    <span class="flex items-center">
                     <span class="text-black font-semibold border-1 py-1 px-2 rounded-xl mr-3">
                        <p>SUPERHOST</p>
                    </span>
                        <p>${stay.type}</p>
                        <p>, ${stay.beds} beds</p>
                    </span>
                    <span class="flex"><img class="w-[15px]" src="./src/images/icons/starroja.svg" alt="star">${stay.rating}</span>
                </div>
                <p class="font-semibold">${stay.title}</p>
            </div>`;
        } else if (stay.beds !== null && stay.superHost == false) {
            contador += +1
            contenedor.innerHTML += `<div class="flex flex-col w-[330px] lg:w-[100%] lg:h-[300px] xl:h-[380px]">
                <div class="w-[100%] h-[228px] lg:h-[100%] items-center flex object-cover ">
                <img class="rounded-2xl object-cover w-[100%] h-[100%] lg:h-[250px] xl:h-[340px]"
                    src="${stay.photo}"
                    alt="photo"></div>
                <div class=" w-[100%] text-[14px] flex justify-between items-center pt-1 text-gray-500">
                </span>
                    <span class="flex">
                        <p>${stay.type}</p>
                        <p>, ${stay.beds} beds</p>
                    </span>
                    <span class="flex"><img class="w-[15px]" src="./src/images/icons/starroja.svg" alt="star">${stay.rating}</span>
                </div>
                <p class="font-semibold">${stay.title}</p>
            </div>`;
        }
        else if (stay.beds == null && stay.superHost == true) {
            contador += +1
            contenedor.innerHTML += `<div class="flex flex-col w-[330px] lg:w-[100%] lg:h-[300px] xl:h-[380px]">
                <div class="w-[100%] h-[228px] lg:h-[100%] items-center flex object-cover ">
                <img class="rounded-2xl object-cover w-[100%] h-[100%] lg:h-[250px] xl:h-[340px]"
                    src="${stay.photo}"
                    alt="photo"></div>
             <div class=" w-[100%] text-[14px] flex justify-between items-center pt-1 text-gray-500">
                    <span class="flex items-center">
                     <span class="text-black font-semibold border-1 py-1 px-2 rounded-xl mr-3">
                        <p>SUPERHOST</p>
                    </span>
                        <p>${stay.type}</p>
                        <p></p>
                    </span>
                    <span class="flex"><img class="w-[15px]" src="./src/images/icons/starroja.svg" alt="star">${stay.rating}</span>
                </div>
                <p class="font-semibold">${stay.title}</p>
            </div>`;
        } else if (stay.beds == null && stay.superHost == false) {
            contador += +1
            contenedor.innerHTML += `<div class="flex flex-col w-[330px] lg:w-[100%] lg:h-[300px] xl:h-[380px]">
                <div class="w-[100%] h-[228px] lg:h-[100%] items-center flex object-cover ">
                <img class="rounded-2xl object-cover w-[100%] h-[100%] lg:h-[250px] xl:h-[340px]"
                    src="${stay.photo}"
                    alt="photo"></div>
                <div class=" w-[100%] text-[14px] flex justify-between items-center pt-1 text-gray-500">
                    <span class="flex">
                        <p>${stay.type}</p>
                        <p></p>
                    </span>
                    <span class="flex"><img class="w-[15px]" src="./src/images/icons/starroja.svg" alt="star">${stay.rating}</span>
                </div>
                <p class="font-semibold">${stay.title}</p>
            </div>`;
        }

    })
    if (contador <= 12) {
        numberstays.innerText = "",
            numberstays.innerText = contador
    } else {
        numberstays.innerText = "",
            numberstays.innerText = "12+ "
    }
}

