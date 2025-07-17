
import { listaDeItens, atualizaLocalStorage } from "./script.js";

let itemEditar
const topicoItem = document.querySelector('#lista-de-compras');
const itensComprado = document.getElementById('lista-comprados');


export function mostrarItens() {
    itensComprado.innerHTML = '';
    topicoItem.innerHTML = '';
    listaDeItens.forEach((itemDaLista, index) => {
        const checkedAttr = itemDaLista.checar ? 'checked' : ''
        const itemHTMLCarrinho = `
        <li class="item-lista-container" data-value="${index}">
            <div class="nome-item-container">
                <input type="checkbox" class="checkbox" ${checkedAttr}/>
                <input type="text" class="nome-item" value="${itemDaLista.item}" ${index != itemEditar ? 'disabled' : ''}></input>
            </div>
            <div>
                ${index == itemEditar ? '<img src="imagens/save.svg" class="salvar" />'
                : '<img src="imagens/pencil.svg" class="editar"/>'}    
                <img src="imagens/trash.svg" class="apagar" />    
            </div>
        </li>`
        const itemHTMLComprado = `
        <li class="item-lista-container" data-value="${index}">
            <div class="nome-item-container">
                <input type="checkbox" class="checkbox" ${checkedAttr}/>
                <span class="itens-comprados is-size-5">${itemDaLista.item}</span>
            </div>
            <div>    
                <img src="imagens/trash.svg" class="apagar" />    
            </div>
        </li>
        `
        if (itemDaLista.checar) {
            itensComprado.innerHTML += itemHTMLComprado
        } else {
            topicoItem.innerHTML += itemHTMLCarrinho
        }
    });
    //criando um evento para transportar os itens da lista para lista de comprados conforme o checkbox
    const inputCheck = document.querySelectorAll('input[type="checkbox"]');
    const tamanhoInput = inputCheck.length;
    inputCheck.forEach((input) => {
        input.addEventListener('click', (evento) => {
            const valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value');
            listaDeItens[valorDoElemento].checar = evento.target.checked;
            mostrarItens();
        });
    });


    const deletarItem = document.querySelectorAll('.apagar');
    deletarItem.forEach((input) => {
        input.addEventListener('click', (evento) => {
            const valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value');
            listaDeItens.splice(valorDoElemento, 1);
            mostrarItens();
        });
    });

    const editarItem = document.querySelectorAll('.editar');
    editarItem.forEach((input) => {
        input.addEventListener('click', (evento) => {
            itemEditar = evento.target.parentElement.parentElement.getAttribute('data-value');
            mostrarItens();
            const itemEditado = document.querySelector(`[data-value="${itemEditar}"] input[type="text"]`);
            itemEditado.focus();
        });
    });
    const salvarItem = document.querySelectorAll('.salvar');
    salvarItem.forEach((input) => {
        input.addEventListener('click', (evento) => {
            salvarEdicao();
        });
    });
    atualizaLocalStorage()
}


function salvarEdicao(){
    const itemEditado = document.querySelector(`[data-value="${itemEditar}"] input[type="text"]`);
    listaDeItens[itemEditar].item = itemEditado.value;
    itemEditar = -1;
    mostrarItens();
}