import { excluirItem } from "./excluirItem.js";
import { verificarListaComprados } from "./verificarListaComprados.js";
import { editarItem } from "./editarItem.js";
import { gerarDiaDaSemana } from "./gerarDiaDaSemana.js";

const listaComprados = document.getElementById("lista-comprados");
let contador = 0;
const listaDeCompras = document.getElementById("lista-de-compras");

export function criarItemDaLista(item) {
  const itemDaLista = document.createElement("li");
  const containerItemLista = document.createElement("div");
  containerItemLista.classList.add("item-lista-container");

  const containerNomeDoItem = document.createElement("div");

  const containterCheckbox = document.createElement("div");
  containterCheckbox.classList.add("container-checkbox");
  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxInput.classList.add("checkbox-input");
  checkboxInput.id = "checkbox-" + contador++;

  const checkboxLabel = document.createElement("label");
  checkboxLabel.setAttribute("for", checkboxInput.id);

  checkboxLabel.addEventListener("click", function (evento) {
    const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
    const checkboxCustom = evento.currentTarget.querySelector(
      ".checkbox-customizado"
    );
    const itemTitulo = evento.currentTarget
      .closest("li")
      .querySelector("#item-titulo");

    if (checkboxInput.checked) {
      checkboxCustom.classList.add("checked");
      itemTitulo.style.textDecoration = "line-through";
      listaComprados.appendChild(itemDaLista);
    } else {
      checkboxCustom.classList.remove("checked");
      itemTitulo.style.textDecoration = "none";
      listaDeCompras.appendChild(itemDaLista);
    }
    verificarListaComprados(listaComprados);
  });

  const checkboxCustomizado = document.createElement("div");
  checkboxCustomizado.classList.add("checkbox-customizado");

  checkboxLabel.appendChild(checkboxInput);
  checkboxLabel.appendChild(checkboxCustomizado);
  containterCheckbox.appendChild(checkboxLabel);
  containerNomeDoItem.appendChild(containterCheckbox);

  const nomeDoItem = document.createElement("p");
  nomeDoItem.id = "item-titulo";
  nomeDoItem.innerHTML = item;

  containerNomeDoItem.appendChild(nomeDoItem);

  const containerBotoes = document.createElement("div");
  const botaoEditar = document.createElement("button");
  botaoEditar.classList.add("botao-acao");
  const imagemEditar = document.createElement("img");
  imagemEditar.src = "imagens/pencil.svg";
  imagemEditar.alt = "Editar";
  botaoEditar.addEventListener("click", function(){
    editarItem(itemDaLista);
  });

  botaoEditar.appendChild(imagemEditar);
  containerBotoes.appendChild(botaoEditar);

  const botaoRemover = document.createElement("button");
  botaoRemover.classList.add("botao-acao");
  const imagemRemover = document.createElement("img");
  imagemRemover.src = "imagens/trash.svg";
  imagemRemover.alt = "Remover";

  botaoRemover.addEventListener("click", function(){
    excluirItem(itemDaLista);
  })

  botaoRemover.appendChild(imagemRemover);
  containerBotoes.appendChild(botaoRemover);

  containerItemLista.appendChild(containerNomeDoItem);
  containerItemLista.appendChild(containerBotoes);

  const itemData = document.createElement("p");
  itemData.innerText = gerarDiaDaSemana()
  itemData.classList.add("texto-data");

  itemDaLista.appendChild(containerItemLista);
  itemDaLista.appendChild(itemData);

  return itemDaLista;
}
