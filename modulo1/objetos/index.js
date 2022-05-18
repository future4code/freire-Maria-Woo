
// 1. INTERPRETAÇÃO DE CÓDIGO
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// filme.elenco[0]: imprime posição zero "Matheus Nachtergaele"
// filme.elenco[filme.elenco.length - 1]: imprime o toamnho do array -1 "Virginia Cavendish"
// filme.transmissoesHoje[2]: imprime a posição 2 canal: "Globo", horario: "14h"

//-------------------------------------------------------------------------------------------------------

// 2. INTERPRETAÇÃO DE CÓDIGO
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// cachorro: imprime as chaves e valores do objeto nome: "Juca", idade: 3, raca: "SRD"
// gato: imprime as chaves e valores do objeto modificado no nome 
// tartaruga: imprime as chaves e valores do objeto alterando "a" por "o" no nome
// A sintaxe copia as informações do objeto anterior, traz para o novo objeto e modifica os valores das chaves escritas

//---------------------------------------------------------------------------------------------

// 3. INTERPRETAÇÃO DE CÓDIGO
// function minhaFuncao(objeto, propriedade) {
// 	return objeto.propriedade
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "idade"))

//pessoa, "backender": vai imprimir o valor da propriedade que foi chamado pela função, false
//pessoa, "altura": não vai dar resultado, por altura não está definido

// 1. ESCRITA DE CÓDIGO
function minhaFuncao(objeto,propriedade){

    return objeto.propriedade
}
const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
    
 }
 
 console.log(`Eu sou ${minhaFuncao(pessoa,"nome")}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}`)


