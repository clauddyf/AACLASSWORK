import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';


export default pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      action.pokemon.forEach((poke) => {
        nextState[poke.id] = poke;
      });
      return nextState;
    default: 
      return state;
  }
}