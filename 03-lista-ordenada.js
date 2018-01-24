/**
  Criar um programa que verifica se um dado vetor está ordenado ou não,
  e imprima as seguintes mensagens no console.

      O vetor está ordenado
    O vetor não está ordenado
  
  Obs: O vetor só irá conter números inteiros, positivos e maiores que zero.
*/

let lista = [10, 20, 50, 100, 110];

// Iniciamos com a variável em true
let estaOrdenada = true;

// Diferente do for of, o for in faz com que i assuma, a cada iteração, o valor do índice do elemento,
// ou seja, 0, 1, 2...
for (let i = 0; i < lista.length - 1; i++) {
 
  console.log(`Estou comparando ${lista[i]} e ${lista[i+1]}.`);

  // Percorremos o vetor comparando o elemento atual e o seguinte, caso algum desses pares não 
  // esteja mais ordenado, a lista inteira já não poderá mais ser considerada ordenada e mudamos
  // o valor de estaOrdenada de true para false
  if(lista[i] > lista[i+1]){
    estaOrdenada = false;
  }
  
}

console.log('O vetor está ordenado? ' + estaOrdenada);