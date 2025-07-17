import {inputItens, listaDeItens} from "./script.js";

export function salvarItem() {
    const itemDaLista = inputItens.value;
    const checarDuplicado = listaDeItens.some(
        (item) => item.item.toLowerCase() === itemDaLista.toLowerCase()
    );

    if (checarDuplicado) {
        alert("Item duplicado!");
    } else {
        listaDeItens.push({
            item: itemDaLista,
            checar: false
        });
    }
    inputItens.value = '';
}