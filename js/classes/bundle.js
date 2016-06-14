(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Human = function () {
  function Human(name) {
    _classCallCheck(this, Human);

    this.name = name;
  }

  _createClass(Human, [{
    key: 'greet',
    value: function greet() {
      console.log('Hello I\'m ' + this.name);
    }
  }, {
    key: 'getName',
    get: function get() {
      return this.name;
    }

    /*
      Like other languages with static class members, the static keyword will create a method
      associated with the class, and not with an instance of the class. In other words, you can
      only reach a static method using the name of the class.
    */

  }], [{
    key: 'sayHello',
    value: function sayHello() {
      console.log('Hello!');
    }
  }]);

  return Human;
}();

var Developer = function (_Human) {
  _inherits(Developer, _Human);

  function Developer(name) {
    _classCallCheck(this, Developer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Developer).call(this, name));
    // In a derived class, you must call super() before you can use this


    _this.language = 'JS';
    return _this;
  }

  _createClass(Developer, [{
    key: 'greet',
    value: function greet() {
      _get(Object.getPrototypeOf(Developer.prototype), 'greet', this).call(this);
      console.log('... and I\'m a developer');
    }
  }, {
    key: 'work',
    value: function work() {
      console.log('Developers developers developers!');
    }
  }]);

  return Developer;
}(Human);

var bob = new Human('Bob');
bob.greet();
Human.sayHello();

var usse = new Developer('Usse');
usse.greet();
usse.work();
console.log(usse.getName);

},{}]},{},[1]);
