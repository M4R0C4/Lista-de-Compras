import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("item");

function limparInput() {
  item.value = "";
}

const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(evento) {
  evento.preventDefault();

  const itemDaLista = criarItemDaLista(item.value);
  listaDeCompras.appendChild(itemDaLista);
  verificarListaVazia(listaDeCompras);

  limparInput();
}