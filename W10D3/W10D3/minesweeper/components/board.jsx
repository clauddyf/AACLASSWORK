import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './tile';

class Board extends React.Component {
  constructor(props) {
    super(props);

  }

  
  render() {
    // rows: all our rows of the board
    const updateGame = this.props.updateGame;
    const rows = this.props.board.grid.map((row, x) => {

      // rowComp is collection of tiles
      let rowComp = row.map((tile, y) => {
        return <Tile key={[x, y]} updateGame={updateGame} tile={tile}/> // pass in pos as a prop
      })
      
      // returns component rowComp in a div
      return (
        <div>
          {rowComp}
        </div>
      )
      
    }
    );
    
    // returns all rows of the board in a div
    return (
      <div className = "board">
        {rows}
      </div>
    )
  }
}

export default Board;