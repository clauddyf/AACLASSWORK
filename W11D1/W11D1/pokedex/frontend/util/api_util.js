// export const FETCH_ALL_POKEMON = 'FETCH_ALL_POKEMON';

export const fetchAllPokemon = () => {
  return $.ajax({
    url: `/api/pokemon`,
    method: 'GET'
  });
};