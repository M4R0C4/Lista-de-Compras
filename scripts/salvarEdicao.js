import { itemEditar } from "./mostrarItens.js";
export function salvarEdicao(){
    const itemEditado = document.querySelector(`[data-value="${itemEditar}"] input[type="text"]`);
    console.log(itemEditado.value);
}