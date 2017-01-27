"use strict";

/*
function buildUser (nome, cognome) {
  let fullname = `
                  nome: ${nome}
                  cognome: ${cognome}`;
  return {
    nome,
    cognome,
    fullname,
    stampaFullname () {
      console.log(fullname);
    }
  };
}

let user = buildUser ('vivi', 'magica');

user.stampaFullname();

function buildUser2 (nome, cognome) {
  let fullname = "\n"
  + "                nome: " + nome + "\n"
  + "                cognome: " + cognome;
  return {
    nome: nome,
    cognome: cognome,
    fullname: fullname,
    stampaFullname: function () {
      console.log(fullname);
    }
  };
}

let user2 = buildUser2 ('vivi', 'magica');

user2.stampaFullname();


let obj = {
  prop1: "p1",
  prop2: "p2",
  prop3: "p3",
  prop4: "p4",
  prop5: "p5"
}

let prop1 = obj.prop1;
let prop2 = obj.prop2;

console.log(prop1);
console.log(prop2);

let {prop3, prop4} = obj;

console.log(prop3);
console.log(prop4);

let str = `prima: ${prop3},
seconda: ${obj.prop5}`
console.log(str);

*/

let printBau = function (){
  console.log("bau");
};

function Cane1(numAbbai){
  this.abbaii = numAbbai;
  this.abbaia = function (){
    for (; this.abbaii > 0; this.abbaii--) {
      printBau();
    }
  }
  this.stats = function(){
    console.log("il cane può abbaiare ancora massimo ", this.abbaii, "volte");
  }
}

function Cane2(numAbbai){
  this.abbaii = numAbbai;
  this.abbaia = function (){
    for (let i = numAbbai; i > 0; i--) {
      printBau();
    }
  }
  this.stats = function(){
    console.log("il cane può abbaiare ancora massimo ", this.abbaii, "volte");
  }
}


let c1 = new Cane1(20);
c1.stats();
c1.abbaia();
c1.abbaia();
c1.stats();

let c2 = new Cane2(10);
c2.stats();
c2.abbaia();
c2.abbaia();
c2.stats();

let res = Object.assign({}, c1, c2);
console.log(res);
console.log(c1);
console.log(c2);


let res2 = {};
Object.assign(res2, c1, c2);
console.log(res2);
console.log(c1);
console.log(c2);


let res3 = Object.assign(c1, c2);
console.log(res3);
console.log(c1);
console.log(c2);
