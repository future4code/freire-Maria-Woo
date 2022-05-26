/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!");

const whoWin = (usuario,computador) => {
   const valorUsuario = usuario.map(x => x.valor).reduce((x,y) => x + y)
   const valorComputador = computador.map(x => x.valor).reduce((x,y) => x + y)
   if(valorUsuario > valorComputador)
      return console.log("O usuário ganhou!")
   if(valorComputador > valorUsuario)
      return console.log("O computador ganhou!")
   console.log("Empate!")
}

const novoGame = () => {
   const usuario = [comprarCarta(),comprarCarta()]
   const computador = [comprarCarta(),comprarCarta()]
   console.log(`Usuário - cartas: ${usuario.map(x => x.texto)} - pontuação ${usuario.map(x => x.valor).reduce((x,y) => x + y)}`)
   console.log(`Computador - cartas: ${computador.map(x => x.texto)} - pontuação ${computador.map(x => x.valor).reduce((x,y) => x + y)}`)
   whoWin(usuario,computador)
}

if(confirm("Quer iniciar uma nova rodada?"))
   novoGame()

