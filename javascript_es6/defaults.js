//"use strict";

//

function defaults (arg1 = 1, arg2, {prop1= 'p1', prop2} = {}, arg4 = 'sono null'){
  console.log("arg1 ", arg1);
  console.log("arg2 ",arg2);
  console.log("prop1 ",prop1);
  console.log("prop1 ",prop2);
  console.log("arg4 ",arg4);
}

defaults(1, 2, {prop1: 'p1', prop2 :'p2'}, null);
defaults();
