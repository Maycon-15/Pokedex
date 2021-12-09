const Atualizar = (pokemon) => {
  const imagem = document.getElementById("ImagemPokemon");
  const nome = document.getElementById("NomePokemon");
  imagem.src = pokemon.sprites.other["official-artwork"].front_default;
  nome.innerHTML = pokemon.name;
};

const PokemonAleatorio = () => {
  const numero = Math.round(Math.random() * 150) + 1;
  const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${numero}`;
  return urlPokemon;
};

const iniciar = async () => {
  const url = PokemonAleatorio();
  const response = await fetch(url);
  const result = await response.json();
  Atualizar(result);
};

document.addEventListener("DOMContentLoaded", iniciar);
