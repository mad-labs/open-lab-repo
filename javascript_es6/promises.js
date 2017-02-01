let prova = new Promise(function (resolve, reject){
  setTimeout(function (){
    if(Math.random() > 0.5){
      resolve("Tutto ok! apici a parte");
    } else {
      reject("odio la tastiera");
    }
  },1000);
});

console.log('prima della promise');
prova.then(function (arg){
  console.log(arg);
}).catch(function (err){
  console.log("cacchius! " +err);
});
console.log('dopo la promise');
