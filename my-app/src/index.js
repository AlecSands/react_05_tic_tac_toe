import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Classes (ES6) are in fact "special functions", and just as you can define function
// expressions and function declarations, the class syntax has two components:
// class expressions and class declarations.

// The extends keyword (ES6) is used in class declarations or class expressions to
// create a class which is a child of another class.

// React has already created a class called React.Component and Square is a child
// of that already existing class.

// This is an example of a class declaration.
class Square extends React.Component {
  // The constructor method (ES6) is a special method for creating and initializing
  // an object created within a class.
  constructor() {
    // The super keyword (ES6) is used to call functions on an object's parent.

    // When super doesn't have a method chained to it then it is calling the
    // constructor from the parent class.
    super();
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
