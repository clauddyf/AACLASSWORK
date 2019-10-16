const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");

window.MovingObject = MovingObject;

const mo = new MovingObject({
  pos: [5, 5],
  vel: [0.1, 0.1],
  radius: 10,
  color: "black"
});

const ast = new Asteroid({ pos: [30, 30] });

const game = new Game();

window.addEventListener('DOMContentLoaded', (event) => {
  const canvas = document.getElementById("game-canvas");
  const context = canvas.getContext("2d");
  mo.draw(context);
  mo.move();
  ast.draw(context);
  game.addAsteroids();
  console.log(game.asteroids);
  console.log(game.allObjects())
  game.draw(context);
  const newGame = new GameView(game, context);
  newGame.start();
});