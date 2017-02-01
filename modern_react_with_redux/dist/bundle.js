(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _beServices = require('./beServices');

var _beServices2 = _interopRequireDefault(_beServices);

var _addressBookItem = require('./addressBookItem');

var _addressBookItem2 = _interopRequireDefault(_addressBookItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AddressBookApp() {

  var beServices = new _beServices2.default();

  // questa funzione dato un input crea
  // un nuovo oggetto di tipo AddressBookItem
  this.createNewAddressBookItem = function (input) {
    console.log("createNewAddressBookItem(..): [" + input + "]");
    var abi = new _addressBookItem2.default(input);
    console.log("new AddressBookItem): [" + abi + "]");
    return abi;
  };

  // questa funzione dato un AddressBookItem
  // lo salva utilizzando il servizio di comunicazione con il BE
  this.saveAddressBookItem = function (addressBookItem) {
    var feedback = beServices.save(addressBookItem);
    return feedback;
  };

  // questa funzione utilizzando il servizio di comunicazione con il BE
  // restituisce tutti gli oggetti di tipo AddressBookItem
  this.getAddresses = function () {
    var addresses = beServices.findAll();
    return addresses;
  };

  this.test = function () {
    console.log('questo è un log ^_^');
  };
}

exports.default = AddressBookApp;

},{"./addressBookItem":2,"./beServices":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function AddressBookItem(input) {
  this.name = input.name;
  this.email = input.email;
  this.github = input.github;
  this.phone = input.phone;
  this.uid = Date.now() + "-" + Math.random();
}

exports.default = AddressBookItem;

},{}],3:[function(require,module,exports){
'use strict';

var _addressBookApp = require('./addressBookApp');

var _addressBookApp2 = _interopRequireDefault(_addressBookApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _addressBookApp2.default();
app.test();

},{"./addressBookApp":1}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function BEServices() {
  var addresses = [];

  this.save = function (addressBookItem) {
    console.log("INITIAL addresses.length: " + addresses.length);

    console.log("typeof addressBookItem=" + (typeof addressBookItem === "undefined" ? "undefined" : _typeof(addressBookItem)));
    if (addressBookItem instanceof AddressBookItem) {
      addresses.push(addressBookItem);
      console.log("CURRENT addresses.length: " + addresses.length);
      return "OK";
    }
    return "KO";
  };

  this.findAll = function () {
    return addresses;
  };
}

exports.default = BEServices;

},{}]},{},[3]);
