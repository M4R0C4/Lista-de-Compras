const quantidade = document.getElementById("quantidade");
const preco = document.getElementById("preco").value;

export function inserirPreco(preco) {
    if (isNaN(preco)) {
        return 0;
    } else {
        return parseFloat(preco).toFixed(2);
    }
};

export function inserirQuantidade(quantidade) {
    if (isNaN(quantidade)) {
        return 0;
    }else{
        return parseInt(quantidade);
    }
};

