/* 1. INTERPRETAÇÃO DE CODIGO
const bool1 = true // valores dados para cada variavel
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 // let para resultado, pois irá mudando o valor. true e false = false
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 // true e false e true = false
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) //  (true ou false) = true --> false e true = false
console.log("c. ", resultado)

console.log("d. ", typeof resultado) //vai imprimir boolean */

/* 2. INTERPRETAÇÃO DE CÓDIGO
let primeiroNumero = prompt("Digite um numero!") // aparece para o usuário que deve inserir um número
let segundoNumero = prompt("Digite outro numero!") //aparece para o usuário que deve inserir um segundo número

const soma = primeiroNumero + segundoNumero // precisa tirar o const, para poder executar

console.log(soma)   // se estivesse correto na linha 23, seria impressa a soma */

// 1. ESCRITA DE CÓDIGO
idadeUsuario = prompt("Qual é a sua idade?")
idadeAmigue = prompt("Qual é a idade do seu/sua melhor amig@?")

const idadeUsuarioNumero = Number(idadeUsuario)
const idadeAmigueNumero = Number(idadeAmigue)

diferenca = idadeUsuario - idadeAmigue

//Imprima na console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", 
//seguido pela resposta (true ou false)

console.log('Sua idade é maior do que a do seu melhor amig@?', idadeUsuario > idadeAmigue)
console.log('A diferença de idade é de:', diferenca, 'anos')

// 2. ESCRITA DE CÓDIGO
numero= prompt("Insira um número par?")
const valorNumero = Number (numero) 
console.log('valor é:', valorNumero % 2 )
// se for par o valor do resto vai ser igual a 0. Se for ímpar o valor do resto vai ser 1

//3. ESCRITA DE CÓDIGO
idadeAnos = prompt("Qual é a sua idade?")
const idade = Number (idadeAnos)

idadeMeses = idade * 12
idadeDias = idade * 365
idadeHoras = idade * 8760

console.log ('A sua idade em meses é:', idadeMeses, 'meses')
console.log ('A sua idade em dias é', idadeDias, 'dias')
console.log('A sua idade em hors é:', idadeHoras, 'horas')

// 4. ESCRITA DE CÓDIGO
num1Usuario= prompt("Insira o primeiro número")
num2Usuario= prompt("Insira o segundo número")

const num1 = Number(num1Usuario)
const num2 = Number(num2Usuario)
let restoNum1 = num1 % 2
let restoNum2 = num2 % 2

console.log('O primeiro número é maior que o segundo?', num1 > num2)
console.log('O primeiro número é igual ao segundo?', num1 === num2)
console.log('O primeiro número é divisível pelo sgeundo?', restoNum1 === 0)
console.log('O segundo número é divisível perlo primeiro ?', restoNum2 === 0)


// DESAFIO 1: TEMPERATURA

// a. 77°F --> K
const F = 77
kelvin = (F - 32)*(5/9) + 273.15
console.log(kelvin + '°K')


// b. 80°C --> F
const c = 80
fahrenheit = ((9*c)/5) + 32
console.log(fahrenheit + '°F')

// c. 30°F --> K
const valor = 30
kelvin = ((valor-273.15)*9)/5 + 32
fahrenheit = ((9*valor)/5) + 32
console.log(kelvin + '°K')
console.log(fahrenheit + '°F')


// d. valor --> C
const valorUsuario = prompt("Insira o valor em graus celsius para fazer conversão")
kelvin = ((valorUsuario-273.15)*9)/5 + 32
fahrenheit = ((9*valorUsuario)/5) + 32
console.log(kelvin + '°K')
console.log(fahrenheit + '°F')

//--------------------------------------------------------------------------------------------

//DESAFIO 2: QUILOWATT

// a. R$ PAGO
const custoQuilowattHora = 0.05
quilowatConsumido = 280
valorPago = custoQuilowattHora * quilowatConsumido
console.log('R$' + valorPago)


// b. RECEBENDO VALOR
quilowatConsumido = 280
valorPago = 0.05 * quilowatConsumido
valorPagoDesconto = (0.05 * quilowatConsumido) * 0.85
console.log('Sem desconto -->','R$' + valorPago)
console.log('Com desconto de 15% -->','R$' + valorPagoDesconto)

//---------------------------------------------------------------------------------------------


//DESAFIO 3

// a. lb --> Kg
const lb = 20
kgLibras = lb / 2.2046
console.log('20lb equivalem a', kgLibras + 'kg')


// b. oz --> Kg
const oz = 10.5
kgOnca = oz / 35.274
console.log('10.5oz equivalem a', kgOnca + 'kg')

// c. mi --> m
const mi = 100
metroMi = mi / 0.00062137
console.log('100 mi equivalem a', metroMi + 'm')

// d. ft --> m
const ft = 50
metroPes = ft / 3.2808
console.log('50 ft equivalem a', metroPes + 'm')


// e. gal --> l
const gal = 103.56
litroGal = gal / 0.26417
console.log('103.56gal equivalem a', litroGal + 'l')


// f. xic --> l
const xic = 450
litroXic = xic * 0.24
console.log('450xic equivalem a', litroXic + 'l')


// g. PEDIR INFO PARA O USUÁRIO
const galao = prompt("Insira a quantidade em 'gal' para fazer a conversão para litros")
litroGal = galao / 0.26417
console.log( galao + 'gal', 'equivalem a', litroGal + 'l')