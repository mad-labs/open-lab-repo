"use strict";

/*
//rest arguments
function restArg(...args){
  console.log(" -- start restArg -- ");
  for (let i = 0; i < args.length; i++) {
    console.log("rest arg ", i, args[i]);
  }
  console.log(" -- end -- ");
}

restArg("a");
restArg("a","b");
restArg("a","b","c");
restArg(["a","b","c"]);


//spread operator
function spreadOps(arr){
  console.log(" -- start spreadOps -- ");
  console.log(" -- receive an array of", arr.length," elements -- ");

  //let a = ...arr; //ERRORE
  //console.log(a);

  restArg(...arr);
  console.log(" -- end -- ");
}


/*
restArg(["a"]);
spreadOps(["a"]);
restArg(["a","b"]);
spreadOps(["a","b"]);
restArg(["a","b","c"]);
spreadOps(["a","b","c"]);


//spread operator
function testSpreadOps(arr){
  console.log(" -- start spreadOps -- ");

  console.log(" -- received", arr," --");

  console.log(" -- received an array of", arr.length," elements -- ");

  for (let v in arr) {
    console.log("v ", v);
  }
  //let a = ...arr; //ERRORE
  //console.log(a);


  console.log(" -- end -- ");
}

let test = [1, 2, 3];
testSpreadOps(...test);

//object constructor

function callCallback(callback){
    callback();
}

function  Utente (nome, login, password){
  this.nome = nome;
  this.login = login;
  this.password = password;
}

let utente1 = new Utente( 'pippo', 'paperino', 'pluto');
Utente.prototype.pp = function () {
  callCallback(function (){
    console.log("Printing props", this);
    for (let prop in this) {
      if (this.hasOwnProperty(prop)) {
        console.log(prop, ': ', this[prop]);
      }
    }
  });
};

//utente1.pp.callCallback.function.. this = callCallback
utente1.pp();

Utente.prototype.pp2 = function () {
  callCallback( () => {
    console.log("Printing props", this);
    for (let prop in this) {
      if (this.hasOwnProperty(prop)) {
        console.log(prop, ': ', this[prop]);
      }
    }
  });
};

utente1.pp2();

Utente.prototype.pp3 = function () {
  let self = this;
  callCallback(function (){
    console.log("Printing props", self);
    for (let prop in self) {
      if (self.hasOwnProperty(prop)) {
        console.log(prop, ': ', self[prop]);
      }
    }
  });
};
utente1.pp3();
*/

function TestThisValue(pippo){
  console.log("creating TestThisValue obj")
  this.pippo = pippo;
  this.printPippo = function () {
    setTimeout(function (){
      console.log("pippo value: ", this.pippo)
    }, 1000)
  }

  this.printPippo2 = function () {
    let self = this;
    setTimeout(function (){
      console.log("pippo value: ", self.pippo)
    }, 1000)
  }

  this.printPippo3 = function () {
    setTimeout(() => {
      console.log("pippo value: ", this.pippo)
    }, 1000)
  }

  this.printPippo4 = function () {
    setTimeout(function () {
      console.log("pippo value: ", this.pippo)
    }.bind(this), 1000)
  }
}

new TestThisValue("pippo1").printPippo();
new TestThisValue("pippo2").printPippo2();
new TestThisValue("pippo3").printPippo3();
new TestThisValue("pippo4").printPippo4();


let stringaNormale = 'pippo' + pippo + ', pluto e paperino';
let stringaTemplate =
`pippo ${pippo}, 
pluto
e paperino`;

/*
let f1 = function () {
  return "ciao";
}
console.log(f1());

let f2 = () => "ciao";
console.log(f2());

let f3 = () => {
  return "ciao";
};
console.log(f3());

let f4 = function (nome) {
  return "ciao " + nome;
}
console.log(f4("Vivi"));

let f5 = (nome) => "ciao " + nome;
console.log(f5("Vivi"));

let f6 = (nome) => {
  return  "ciao " + nome;
};
console.log(f6("Vivi"));

//fat arrow function

*/
