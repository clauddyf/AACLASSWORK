import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  // const nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      // debugger
      // action.pokemon.forEach((poke) => {
      //   nextState[poke.id] = poke;
      // });
      // for (const key in action.pokemon) {
      //   if (action.pokemon.hasOwnProperty(key)) {
      //     nextState[key] = action.pokemon[key];
      //   }
      // }
      return action.pokemon;
    default: 
      return state;
  }
};

export default pokemonReducer;