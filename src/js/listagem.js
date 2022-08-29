/*

quando clicar no pokemon

listagem temos que esconder o cartão pokemon aberto e mostrar o cartão corrrespondente ao que foi selecionado na listagem

para isso vamos precisa com dois elementos
1 - listagem
2 - cartão pokemons

precisamos criar duas variáveis no JS para trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokémons

- remover a classe aberto só quando o cartão que está aberto
- ao clicar em pokémopn da listagem pegamos o  id desse pokémon para saber qual cartão mostrar
- remover a classe ativa que marca o pokémon selecionado
- adicionar a classe ativo no item da lista selecionado
*/

// precisamos cria duas variáveis no JS para trabalhar com elementos da tela

const listSelectPokemons = document.querySelectorAll('.pokemon')
// console.log(listSelectPokemons);
// console.log(listSelectPokemons[2]);
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listSelectPokemons.forEach(pokemon => {
    //console.log(pokemon)
    //console.log(listSelectPokemons);
    //vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokémons    
    pokemon.addEventListener('click', () => {
        //remover a classe aberto só quando o cartão que está aberto
        const cardPokemonForOpenUp = document.querySelector('.aberto')
        cardPokemonForOpenUp.classList.remove('aberto')

        //ao clicar em pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar
        const idPkemonselecionado = pokemon.attributes.id.value

        const cardPokemonForOpen = document.getElementById('carto-' + idPkemonselecionado)
        cardPokemonForOpen.classList.add('aberto')

        //remover a classe que marca o pokémon selecionado
        const pokemonActiveList = document.querySelector('.ativo')
        pokemonActiveList.classList.remove('ativo')

        
        const listPokemonForOpen = document.getElementById(idPkemonselecionado)
        listPokemonForOpen.classList.add('ativo')

    })
})