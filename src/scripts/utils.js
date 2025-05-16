/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */

import { stays } from './stays.js';
let contenedor = document.querySelector("#container");
let inputLocation = document.querySelector("#inputlocation");
let sublocations = document.querySelector("#subLocations");
let staysin = document.querySelector("#staysin")

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

function search(e) {
    let huespedes = localStorage.getItem("suma")
    let ciudad = localStorage.getItem("city")

    if (huespedes != 0 && ciudad != "") {
        let filtrado = stays.filter((stay) => stay.maxGuests >= huespedes && stay.city == ciudad || stay.city == inputLocation.value)
        traerskeleton();
        setTimeout(() => {
            mostrarTarjetas(filtrado);
        }, 2500);
        staysin.innerText = `Stays in ${ciudad}, Finland`;
        modal.classList.toggle("hidden");
    } else if (huespedes == 0 && ciudad != "") {
        let filtrado = stays.filter((stay) => stay.city == ciudad || stay.city == inputLocation.value)
        traerskeleton();
        setTimeout(() => {
            mostrarTarjetas(filtrado);
        }, 2500);
        staysin.innerText = `Stays in ${ciudad}, Finland`;
        modal.classList.toggle("hidden");
    } else if (huespedes != 0 && ciudad == "") {
        let filtrado = stays.filter((stay) => stay.maxGuests >= huespedes)
        traerskeleton();
        setTimeout(() => {
            mostrarTarjetas(filtrado);
        }, 2500);
        staysin.innerText = `Stays in Finland`;
        modal.classList.toggle("hidden");
    } else if (huespedes == 0 && ciudad == "") {
        staysin.innerText = `Stays in Finland`;
        modal.classList.toggle("hidden");
        traerskeleton();
        setTimeout(() => {
            mostrarTarjetas(stays);
        }, 2500);
    }
}

function traerskeleton() {
    contenedor.innerHTML = "",
        stays.forEach((stay) => {
            contenedor.innerHTML += `<div role="status" class="flex flex-col w-[330px] lg:w-[100%] lg:h-[300px] xl:h-[380px] p-4  rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
    <div class="flex items-center justify-center h-48 lg:h-90 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
    </div>
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
       <span class="sr-only">Loading...</span>
</div>`;

        })
}

export { search, traerskeleton }