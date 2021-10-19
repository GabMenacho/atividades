var lista = ['pecasdeteste', 'AB', 'peca B'];
console.log(lista);
console.log ('quantidade de caracteres');

if (lista.length <=10) {
    console.log ('As peças podem ser cadastradas')
};

for (let indice = 0; indice < lista.length; indice++) {
    var pecaatual
    pecaatual = lista[indice]
    console.log(pecaatual)
};

if (pecaatual.length <3) {
    console.log(pecaatual + ':a peça possui nome inferior a 3 caracteres e não pode ser cadastrada')
} else {
    console.log(pecaatual + '?a peça pode ser cadastrada')
};

console.log('peso da peça');
let peso_peca = 50;
if (peso_peca >=100) {
    console.log ('peso suficiente')
} else {
    console.log ('valor insuficiente')
};