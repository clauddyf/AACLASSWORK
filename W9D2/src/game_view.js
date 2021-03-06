const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");

function GameView(game, ctx) {
  this.game = game;
  this.ctx = ctx;
};

GameView.prototype.start = function() {
  let that = this;
  setInterval(function() {
    that.game.step();
    that.game.draw(that.ctx);
  }, 20);
};

module.exports = GameView; 