// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}
console.log(soma(1,2))

// EXRCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01



function calculaAreaRetangulo() {
    const altura = prompt("Insira o valor da altura")
    const largura = prompt("Insira o valor da largura")
    area = altura * largura
  console.log(area)
}



// EXERCÍCIO 02
function imprimeIdade() {
    const anoAtual = prompt("Insira o ano atual")
    const anoNascimento = prompt("Insira o ano de nascimento")
    idade = anoAtual - anoNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  
  return peso/(altura*altura)
}
console.log(calculaIMC(peso, altura))




// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Insira seu nome")
  const idade = prompt("Insira sua idade")
  const email = prompt("Insira seu email")
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const nome = prompt("Insira seu nome")
  const idade = prompt("Insira sua idade")
  const email = prompt("Insira seu email")
  console.log([nome,idade,email])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}
console.log(retornaStringEmMaiuscula())

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo/valorIngresso
}
console.log(calculaIngressosEspetaculo())

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
}
console.log(checaStringsMesmoTamanho())

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array [0]
}
console.log(retornaPrimeiroElemento())

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array.pop()
}
console.log(retornaUltimoElemento())

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let auxiliar = array[0]
  array[0] = array[array.length-1]
  array[array.length-1] = auxiliar
  return array
}
console.log(trocaPrimeiroEUltimo())

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()
}
console.log(checaIgualdadeDesconsiderandoCase())

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}