/* 
Quando clickar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem(mostrar um e esconder o resto).

Para isso vamos ter que trabalhar com dois elementos:
- listagem;
- catão pokemon.

Precisamos também criar duas variáveis no JS pra trabalhar com os elementos da tela.

Trabalhar com o evento do click na listagem.
- remover classe .aberto so do cartão que está aberto.
- ao clickar em um pokemon da listagem pegamos o id para saber qual mostrar.
- remover a classe .ativo que marca o pokemon selecionado.
- adicionar a classe .ativo no item da lista selecionado.
*/

// Precisamos também criar duas variáveis no JS pra trabalhar com os elementos da tela.
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    
    pokemon.addEventListener('click', () => {
        // remover a classe .aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
         
        // ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual o cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoParaPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoParaPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe .ativo que marca o pokemon selecionado.
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})