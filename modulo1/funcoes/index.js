// 1. INTERPRETAÇÃO DE CÓDIGO
// function minhaFuncao(variavel) { 
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))
// // A. a função criada vai recerber "variavel" e retornar a multiplicação dela vezes 5 e vezes 10. Vai imprimir 10 e 50
// // B. não vai imprimir os resultados


// // 2. INTERPRETAÇÃO DE CÓDIGO
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// A. Ele imprime o texto do usuario modificado em minuscula e com a palavra cenoura dentro
// B.


// 1. ESCRITA DE CÓDIGO

// console.log(`--> 1.A`)

// function infoPessoais(){

//     const nome = "Maria"
//     const idade = "32"
//     const cidade = "Limeira"
//     const profissao = "estudante"
//     console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}`)
//      }
// infoPessoais()

// console.log(`--> 1.B`)


// function infoPessoais(nome1,idade1,cidade1,profissao1){
//      nome1 = String(nome1)
//      idade1 = Number(idade1)
//      cidade1 = String(cidade1)
//      profissao1 = String(profissao1)

//    return `Eu sou ${nome1}, tenho ${idade1}, moro em ${cidade1} e sou ${profissao1}`

//     // tenho ${idade}, moro em ${cidade} e sou ${profissao}`)
//     }
// const frase = infoPessoais("Lais", 23, "Saõ Paulo", "instrutora")
// console.log(frase)


// // 2. ESCRITA DE CÓDIGO

// console.log(`--> 2.A`)

// const nu1 = prompt("Insira o primeiro número")
// const nu2 = prompt("insira o segundo numero")
// function numeros(n1,n2){
    
    
//     n1 = Number(n1)
//     n2 = Number(n2)
//     const soma = n1 + n2
    
//     return soma
// }

// const soma = numeros(nu1,nu2)
// console.log(soma);

    
// console.log(`--> 2.B`)

// const Num1 = prompt("Insira o primeiro número")
// const Num2 = prompt("insira o segundo numero")

// function doisNumeros(n1,n2){
//     n1 = Number(n1)
//     n2 = Number(n2)
// return  n1 >= n2

// }
// console.log(doisNumeros(Num1,Num2))




// console.log(`--> 2.C`)

// const NUM1 = prompt("Insira um número")

// function doisNumeros(n1){
//     n1 = Number(n1)
    
// return  (n1 % 2) === 0

// }
// console.log(doisNumeros(NUM1)) 


    
// console.log(`--> 2.D `)

// const mensagem = prompt("Insira a palavra")

// function tamanho(mensagem){
//     mensagem = String(mensagem)
    
// return  (`${mensagem.toUpperCase()} | ${mensagem.length}`)

// }
// console.log(tamanho (mensagem))


console.log(`--> 3.A`)
const nuM1 = prompt("Insira o primeiro número")
const nuM2 = prompt("insira o segundo numero")

function soma(n1,n2){
    n1 = Number(n1)
    n2 = Number(n2)
return  n1+n2
}
function subtracao(n1,n2){
   return  n1-n2
}
function multiplicacao(n1,n2){
   return  n1*n2
}
function divisao(n1,n2){
    return  n1/n2
}
console.log(` Números inseridos = ${nuM1} e ${nuM2}`) 
console.log(` Soma: ${soma(nuM1,nuM2)}`)
console.log(` Diferença: ${subtracao(nuM1,nuM2)}`)
console.log(` Multiplicação: ${multiplicacao(nuM1,nuM2)}`)
console.log(` Divisão= ${divisao(nuM1,nuM2)}`)


