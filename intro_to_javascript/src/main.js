/*function func(addressBookItem){

  var setaddressBookItem = function (){
    addressBook.nome;
    addressBook.email;
    addressBook.github;
    addressBook.telefono;
  }
  var getaddressBook = function (){

  }

}

funzione javascript che prende in input dati utente, li salva in una addressBook,

funzione javascript che recupera tutti gli indirizzi ed invia un'email

*/
function App(){
  this.createNewAddressBookItem = function (input){
    var abi = new AddressBookItem(input);
    console.log(abi);
    return abi;
  }
}

function AddressBookItem(input){
  this.name = input.name;
  //tutto il resto
}
