import React from 'react';

export default class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger;
    this.props.requestAllPokemon();
  }
  
  render() {
    return (
      <ul>
        {this.props.pokemon.map((poke, idx) => {
          return (
            <li key={idx}>
              <p>{poke.name}, I choose you!</p>
              <img src={poke.image_url} width="50" height="50" alt={poke.name}/>
            </li>
          );
        })}
      </ul>
    );
  }
};
