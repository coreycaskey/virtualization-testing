import { type Pokemon } from "../types";

const POKEMON_BASE_URL = `https://pokeapi.co/api/v2/pokemon`;

export const fetchPokemon = async (pokemonId: number) => {
  const response = await fetch(`${POKEMON_BASE_URL}/${pokemonId}`);
  const data = (await response.json()) as Pokemon;

  return data;
};
