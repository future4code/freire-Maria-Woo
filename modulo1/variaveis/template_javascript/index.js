
// INTERPRETAÇÃO DE CODIGO #1
let a = 10 // a variável a tem valor de 10 (número)
let b = 10 // a variavel b tem valor de 10

console.log(b) // mostra o valor de b

b = 5 //logo, o valor de b é modificado para 5
console.log(a, b) //dessa maneira, o valor alterado e mostrado vai ser: 10 5   (o primeiro para a e o segundo para b)
//------------------------------------------------------------------------------------------------------------




// INTERPRETAÇÃO DE CODIGO #2
let a = 10 //valor atribuído para a é 10
let b = 20 //valor atribuído para b é 20
c = a // c é igual 10 (valor rerefrente a "a")
b = c // b é igual a c (novo valor de b=10)
a = b // a é igual a b (o valor de a é 10)

console.log(a, b, c) /// os valores mostrados para cada variavel é de 10 
//------------------------------------------------------------------------------------------------------------




// INTERPRETAÇÃO DE CODIGO #3
let p = prompt("Quantas horas você trabalha por dia?") // a linha vai imprimir a pergunta e salvar a resposta na variável p. poderia ser a variavel "horasDia"
let t = prompt("Quanto você recebe por dia?") // a linha vai imprimira a pergunta e salvar a resposta na variável t. Poderia ser "valorDia" ou "salarioDia" ou "dinheiroDia"
alert(`Voce recebe ${t/p} por hora`) // a linha vai mostrar os valores inseridos pelo usuário e com a mensagem descrita entre "" com a ajuda do alert 
//------------------------------------------------------------------------------------------------------------





// ESCRITA DE CODIGO #1
let nomeTexto = prompt ("Qual é seu nome?")
let idadeNumero = prompt ( "Qual é a sua idade?")

console.log(typeof nomeTexto)
console.log(typeof idadeNumero)
//Para ambos casos foi impresso como String, pois é um padrão do prompt

//alert(`Olá ${nomeTexto}, você tem ${idadeNumero} anos`)

console.log ("Olá", nomeTexto, "você tem", idadeNumero, "anos")
//------------------------------------------------------------------------------------------------------------




// ESCRITA DE CODIGO #2
const pergunta1 = "Você gosta de praia? - SIM"
const pergunta2 = "Você gosta de academia? - SIM"
const pergunta3 = "Você gosta de ler? - SIM"

console.log (pergunta1)
console.log (pergunta2)
console.log (pergunta3)
//------------------------------------------------------------------------------------------------------------



// ESCRITA DE CODIGO #3
let a = 10
let b = 25
let c = 10

a = b
b = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
//------------------------------------------------------------------------------------------------------------ 

