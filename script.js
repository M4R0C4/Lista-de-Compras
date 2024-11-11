import { adicionarItem } from "./js/adicionaritem.js";
import { verificarListaComprados } from "./js/verificarListaComprados.js";


const botaoSalvar = document.getElementById("bt-add");
botaoSalvar.addEventListener("click", adicionarItem);

const listaComprados = document.getElementById("lista-comprados");
verificarListaComprados(listaComprados);