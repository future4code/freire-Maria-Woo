/* 1. INTERPRETAÇÃO DE CÓDIGO
let array
console.log('a. ', array) // o array não está definido por variavel

array = null
console.log('b. ', array) // o valor da variável é null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // 11

let i = 0
console.log('d. ', array[i]) // 

array[i+1] = 19
console.log('e. ', array) // 

const valor = array[i+6]
console.log('f. ', valor) */



/* 2. INTERPRETAÇÃO DE CÓDIGO
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length
// a frase vai ser em maiúsculo, vai trocar A por I e especificar o tamnho da string */

/* 1. ESCRITA DE CÓDIGO
const nomeDoUsuario = prompt("Digite seu nome")
const emailDoUsuario = prompt("Insira seu e-mail")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o) ${nomeDoUsuario}`)*/


// 2. ESCRITA DE CÓDIGO
const comidasPreferidas = ["Escondidinho", "Feijoada", "Arroz com feijão", "Vatapá", "Acarajé"]

console.log(`Essas são minhas comidas preferidas ${comidasPreferidas}`)
console.log(comidasPreferidas)
console.log(comidasPreferidas.splice (0,1))
console.log(comidasPreferidas.splice (0,1))
console.log(comidasPreferidas.splice (0,1))
console.log(comidasPreferidas.splice (0,1))
console.log(comidasPreferidas.splice (0,1))

const cliente = prompt("Escreva sua comida favorita")
console.log ("----------------------------------------")
console.log (comidasPreferidas.splice (0,1,'oi'))


// 3. ESCRITA DE CÓDIGO
let listaDeTarefas

const listaDeTarefas = prompt("Escreva a primeira tarefa")
const listaDeTarefas = prompt("Escreva a segunda tarefa")
const listaDeTarefas = prompt("Escreva a terceira tarefa")





