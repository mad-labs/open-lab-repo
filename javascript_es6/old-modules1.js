
mie = (function(){

  var _stars = '###';

  var _sayHello = function (){
    alert("Hello!");
  };

  var _sayBye = function (){
    alert(_stars + "Bye!" + _stars);
  };

  return {
    hash: _stars,
    sayHello : _sayHello,
    sayBye: _sayBye
  }
}());
