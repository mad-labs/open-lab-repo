
function AddressBookApp(){
  /*
    var input = {
      name: "pippo",
      email: "arb@gmail.com",
      github: "pippopippo",
      phone: "02565958"
    };
  */
  var beServices = new BEServices();

  // questa funzione dato un input crea
  // un nuovo oggetto di tipo AddressBookItem
  this.createNewAddressBookItem = function (input){
    var abi = new AddressBookItem(input);
    return abi;
  }

  // questa funzione dato un AddressBookItem
  // lo salva utilizzando il servizio di comunicazione con il BE
  this.saveAddressBookItem = function (addressBookItem) {
    var feedback = beServices.save(addressBookItem);
    return feedback;
  }

  // questa funzione utilizzando il servizio di comunicazione con il BE
  // restituisce tutti gli oggetti di tipo AddressBookItem
  this.getAddresses = function (){
    var addresses = beServices.findAll();
    return addresses;
  }
}
