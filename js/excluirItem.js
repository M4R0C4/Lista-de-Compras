import { verificarListaComprados } from "./verificarListaComprados.js";
import {verificarListaVazia} from "./verificarListaVazia.js"

const listaComprados = document.getElementById("lista-comprados");
const listaDeCompras = document.getElementById("lista-de-compras");

const excluirItem = (elemento) => {
  let confirmacao = confirm("Tem certeza que deseja apagar esse item?");

  if (confirmacao) {
    elemento.remove();
    verificarListaComprados(listaComprados);
    verificarListaVazia(listaDeCompras);
  }
};
export {excluirItem};