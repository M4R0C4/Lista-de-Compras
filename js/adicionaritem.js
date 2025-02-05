import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("item");



const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(evento) {
  evento.preventDefault();
  if (!item || item.value === "") {
    alert("Por favor, insira um item válido");
    return;
  }
  const itemDaLista = criarItemDaLista(item.value);
  listaDeCompras.appendChild(itemDaLista);
  verificarListaVazia(listaDeCompras);
}