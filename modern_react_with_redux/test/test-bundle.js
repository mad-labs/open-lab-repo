(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _addressBookApp = require('../src/addressBookApp');

var _addressBookApp2 = _interopRequireDefault(_addressBookApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Application Tests: ', function () {

  var addressBookApp, input;

  beforeAll(function () {});

  beforeEach(function () {
    addressBookApp = new _addressBookApp2.default();
    input = {
      name: "pippo",
      email: "arb@gmail.com",
      github: "pippopippo",
      phone: "02565958"
    };
  });

  afterEach(function () {});

  afterAll(function () {});

  // User Registration
  describe('USER REGISTRATION', function () {
    // quando l'applicazione riceve un input crea
    // un nuovo AddressBookItem
    describe('when application receive an input', function () {
      it('shold create a new AddressBookItem', function () {
        var ret = addressBookApp.createNewAddressBookItem(input);
        expect(ret.nome).toBe(input.nome);
        expect(ret.email).toBe(input.email);
        expect(ret.github).toBe(input.github);
        expect(ret.phone).toBe(input.phone);
      });
    });

    // quando l'applicazione invia un AddressBookItem
    // corretto al Back End
    // deve ricevere un feedback di OK
    describe('when application send a right AddressBookItem to BE', function () {
      it('shold receive OK feedback', function () {
        var addressBookItem = addressBookApp.createNewAddressBookItem(input);
        console.log("sending AddressBookItem=" + addressBookItem);
        var feedback = addressBookApp.saveAddressBookItem(addressBookItem);
        console.log("saveAddressBookItem feedback=" + feedback);
        expect(feedback).toBe("OK");
      });
    });

    // quando l'applicazione invia un AddressBookItem
    // scorretto al Back End
    // deve ricevere un feedback di KO
    describe('when application send a wrong AddressBookItem to BE', function () {
      it('shold receive KO feedback', function () {
        var addressBookItem = {}; //app.createNewAddressBookItem(input);
        console.log("sending AddressBookItem=" + addressBookItem);
        var feedback = addressBookApp.saveAddressBookItem(addressBookItem);
        console.log("saveAddressBookItem feedback=" + feedback);
        expect(feedback).toBe("KO");
      });
    });

    // quando l'applicazione richiede l'elenco degli indirizzi da BE
    // deve ricevere un elenco di oggetti contenente ALMENO quello di "input"
    describe('when application ask a registered AddressBookItem to BE', function () {
      it('shold receive the object asked for', function () {

        var addressBookItem = addressBookApp.createNewAddressBookItem(input),
            feedback = addressBookApp.saveAddressBookItem(addressBookItem),
            addresses = addressBookApp.getAddresses(),
            uidToFind = addressBookItem.uid;

        var foundAddr = _.find(addresses, function (item) {
          return item && item.uid == uidToFind;
        });

        expect(foundAddr === addressBookItem).toBe(true);
      });
    });

    // quando l'applicazione richiede l'elenco degli indirizzi da BE
    // deve ricevere un elenco di oggetti che NON contenente oggetti non inviati
    describe('when application ask an unregistered AddressBookItem to BE', function () {
      it('shold receive undefined', function () {
        var addressBookItem1 = addressBookApp.createNewAddressBookItem(input),
            addressBookItem2 = addressBookApp.createNewAddressBookItem(input),
            feedback = addressBookApp.saveAddressBookItem(addressBookItem1),
            addresses = addressBookApp.getAddresses(),
            uidToFind = addressBookItem2.uid;

        console.log(JSON.stringify(addressBookItem1));
        console.log(JSON.stringify(addressBookItem2));

        var foundAddr = _.find(addresses, function (item) {
          return item && item.uid == uidToFind;
        });
        expect(foundAddr === undefined).toBe(true);
      });
    });
  });

  // User Registration
  describe('SEND EMAIL', function () {});

  // User Registration
  describe('USER SEARCH - ACTIVATE', function () {
    // quando l'applicazione richiede l'elenco deggli AddressBookItem al BE
    // senza utenti registrati
    // deve ricevere una lista vuota
    describe('when application asks the AddressBookItem list without registered users', function () {
      it('shold be received an empty list', function () {
        var usersList = addressBookApp.getAddresses();
        expect(usersList.length).toBe(0);
      });
    });

    // quando l'applicazione richiede l'elenco deggli AddressBookItem al BE
    // con un utente registrato
    // deve ricevere una lista contenente l'utente registrato
    describe('when application asks the AddressBookItem list with one User in it', function () {
      it('shold be received the AddressBookItem list with one element', function () {

        var addressBookItem = addressBookApp.createNewAddressBookItem(input);
        var feedback = addressBookApp.saveAddressBookItem(addressBookItem);
        var usersList = addressBookApp.getAddresses();

        expect(usersList[0]).toBe(addressBookItem);
      });
    });

    // quando l'applicazione richiede l'elenco deggli AddressBookItem al BE
    // deve ricevere una lista con gli utenti registrati
    describe('when application asks the AddressBookItem list', function () {
      it('shold be receibved the complete AddressBookItem list', function () {

        var createdAddressBookItems = _.times(100, function () {
          return addressBookApp.createNewAddressBookItem(input);
        });
        console.log("createdAddressBookItems: " + createdAddressBookItems);

        var savingResults = _.map(createdAddressBookItems, function (item) {
          return addressBookApp.saveAddressBookItem(item);
        });
        console.log("savingResults: " + savingResults);

        var savedAddressBookItem = addressBookApp.getAddresses();
        console.log("savedAddressBookItem: " + savedAddressBookItem);

        var testRes = _.every(createdAddressBookItems, function (created) {
          return _.find(savedAddressBookItem, function (saved) {
            return created.uid === saved.uid;
          });
        });
        console.log("testRes: " + testRes);
        expect(testRes).toBe(true);
      });
    });

    /*
    describe('when ', function(){
      it('shold ', function(){
        expect(false).toBe(true);
      });
    });
    */
  });
});

},{"../src/addressBookApp":2}],2:[function(require,module,exports){
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

},{"./addressBookItem":3,"./beServices":4}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}]},{},[1]);
