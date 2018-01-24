/**
    1- Criar um programa que soma o valor da lista de compra, considerando o valor de cada item e sua quantidade.
    No final, o programa deve imprimir uma mensagem no console:
    
        O valor total da lista de compras é R$ 100.
    
    2- Somar também a quantidade de itens da lista e alterar a mensagem a ser impressa:
      
        O valor total da lista de compras é R$ 100 e a quantidade de itens é 23.
*/

let itens = [
  {
    nome: "Banana",
    valor: 2.1,
    quantidade: 1
  },
  {
    nome: "Sabonete",
    valor: 1.3,
    quantidade: 3
  },
  {
    nome: "Doritos",
    valor: 4.7,
    quantidade: 2
  },
  {
    nome: "Pão",
    valor: 0.38,
    quantidade: 10
  },
  {
    nome: "Leite",
    valor: 2.34,
    quantidade: 3
  },
  {
    nome: "Ovos",
    valor: 0.42,
    quantidade: 12
  }
];


let valorTotal = 0;
let quantidadeTotal = 0;

// O for of percorre todo o vetor itens, sendo que, a cada iteração, item assumirá o valor de cada elemento ordenadamente
for (let item of itens) {
  // A linha abaixo é o mesmo que "valorTotal += item.valor * item.quantidade;"
  valorTotal = valorTotal + item.valor * item.quantidade;

  // A linha abaixo é o mesmo que "quantidadeTotal += item.quantidade;"
  quantidadeTotal = quantidadeTotal + item.quantidade;
}

console.log(`O valor total da lista de compras é R$ ${(valorTotal*100)/100} e a quantidade de itens é ${quantidadeTotal}.`);