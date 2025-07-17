import { salvarItem } from "./salvarItem.js";
import { mostrarItens } from "./mostrarItens.js";
const formulario = document.querySelector('#form-item');
const inputItens = document.querySelector('#item');
let listaDeItens = [];
const listaRecuperada = localStorage.getItem('listaDeItens');

if (listaRecuperada) {
    listaDeItens = JSON.parse(listaRecuperada);
    mostrarItens();
} else {
    listaDeItens = [];
}

function atualizaLocalStorage() {
    localStorage.setItem('listaDeItens', JSON.stringify(listaDeItens))

}

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    salvarItem();
    mostrarItens();
    inputItens.focus();
});

export {listaDeItens, inputItens, atualizaLocalStorage};