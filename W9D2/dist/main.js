/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nfunction getRandomColor() {\n  var letters = '0123456789ABCDEF';\n  var color = '#';\n  for (var i = 0; i < 6; i++) {\n    color += letters[Math.floor(Math.random() * 16)];\n  }\n  return color;\n}\nconst defaultAsteroid = {color: getRandomColor(), radius: 20};\n\nUtil.inherits(Asteroid, MovingObject);\nfunction Asteroid (options){\n  this.pos = options.pos;\n  // this.color = defaultAsteroid.color;\n  this.color = getRandomColor();\n  this.radius = defaultAsteroid.radius;\n  this.vel = Util.randomVec(5);\n  // MovingObject.call(this, {pos: this.pos, vel: this.vel, color: this.COLOR, radius: this.RADIUS});\n\n};\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid= __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship= __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nfunction Game(){\n  this.dimX = 1000;\n  this.dimY = 600;\n  this.numAsteroids = 5;\n  this.asteroids = [];\n  this.ship = new Ship(this.randomPosition());\n};\n\nGame.prototype.addAsteroids = function (){\n  for (let i = 0; i < this.numAsteroids; i++) {\n    this.asteroids.push(new Asteroid({ pos: this.randomPosition() }));\n  }\n};\n\nGame.prototype.randomPosition = function () {\n  return [Math.random() * this.dimX, Math.random() * this.dimY];\n};\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, this.dimX, this.dimY);\n  for (let i = 0; i < this.allObjects().length; i++) {\n    this.allObjects()[i].draw(ctx);\n  }\n};\n\nGame.prototype.moveObjects = function() {\n  for (let i = 0; i < this.asteroids.length; i++) {\n    this.asteroids[i].move();\n  }\n};\n\nGame.prototype.checkCollisions = function() {\n  for (let i = 0; i < this.allObjects().length; i++) {\n    for (let j = i + 1; j < this.allObjects().length; j++) {\n      if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {\n        if(this.allObjects()[i] instanceof Ship){\n          this.allObjects()[i].relocate();\n        } else if (this.allObjects()[j] instanceof Ship){\n          this.allObjects()[j].relocate();\n        } \n      }\n    }\n  }\n};\n\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n};\n\nGame.prototype.remove = function(asteroid){\n  for (let i = 0; i < this.asteroids.length; i++) {\n    if (this.asteroids[i] === asteroid){\n      this.asteroids.splice(i,1);\n    }\n  }\n};\n\nGame.prototype.allObjects = function(){\n  const result = [];\n  for(let asteroid of this.asteroids){\n    result.push(asteroid);\n  }\n  result.push(this.ship);\n  return result; \n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(game, ctx) {\n  this.game = game;\n  this.ctx = ctx;\n};\n\nGameView.prototype.start = function() {\n  let that = this;\n  setInterval(function() {\n    that.game.step();\n    that.game.draw(that.ctx);\n  }, 20);\n};\n\nmodule.exports = GameView; \n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\nwindow.MovingObject = MovingObject;\n\nconst mo = new MovingObject({\n  pos: [5, 5],\n  vel: [0.1, 0.1],\n  radius: 10,\n  color: \"black\"\n});\n\nconst ast = new Asteroid({ pos: [30, 30] });\n\nconst game = new Game();\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  const canvas = document.getElementById(\"game-canvas\");\n  const context = canvas.getContext(\"2d\");\n  mo.draw(context);\n  mo.move();\n  ast.draw(context);\n  game.addAsteroids();\n  console.log(game.asteroids);\n  console.log(game.allObjects())\n  game.draw(context);\n  const newGame = new GameView(game, context);\n  newGame.start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options) {\n  this.pos = options.pos; \n  this.vel = options.vel; \n  this.radius = options.radius;\n  this.color = options.color;\n};\n\nMovingObject.prototype.draw = function(ctx){\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1],this.radius, 0, 2 * Math.PI, false);\n  ctx.fillStyle = this.color;\n  ctx.fill();\n  \n};\n\nMovingObject.prototype.move = function(){\n  this.pos[0] = (this.pos[0] + Math.abs(this.vel[0])) % 1000;\n  this.pos[1] = (this.pos[1] + Math.abs(this.vel[1])) % 600; \n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject){\n  let dist = this.distance(otherObject);\n  return (dist <= (this.radius + otherObject.radius));\n}\n\nMovingObject.prototype.distance = function(otherObject){\n  let x1 = this.pos[0];\n  let y1 = this.pos[1];\n  let x2 = otherObject.pos[0];\n  let y2 = otherObject.pos[1];\n  return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2),2));\n};\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nfunction getRandomColor() {\n  var letters = '0123456789ABCDEF';\n  var color = '#';\n  for (var i = 0; i < 6; i++) {\n    color += letters[Math.floor(Math.random() * 16)];\n  }\n  return color;\n}\n\nUtil.inherits(Ship, MovingObject);\nconst defaultShip = { color: getRandomColor(), radius: 10 };\n\nfunction Ship(pos) {\n  this.pos = pos; \n  this.color = getRandomColor();\n  this.radius = defaultShip.radius;\n  this.vel = [0,0];\n}\nShip.prototype.randomPos= function () {\n  return [Math.random() * 600, Math.random() * 400];\n};\n\nShip.prototype.relocate = function(){\n  this.pos = this.randomPos();\n};\n\nShip.prototype.power = function(impulse) {\n  \n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate(){};\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\n// {inherits: function(childClass, parentClass){}, randomVec: function(length){}, scale: function(vec, m){} }\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });