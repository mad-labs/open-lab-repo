let array = ['pippo', 'pluto', 'paperino'];

console.log(array.find( function (nome) {
  return nome === 'pippo';
}));

console.log(array.find(  (nome) => {
  return nome === 'pippo';
}));

console.log(array.find( (nome) => nome === 'pippo'));

console.log(array.find( nome => nome === 'pippo'));
