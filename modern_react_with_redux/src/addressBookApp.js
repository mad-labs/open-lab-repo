import BEServices from './beServices';
import AddressBookItem from './addressBookItem';

function AddressBookApp(){

  var beServices = new BEServices();

  // questa funzione dato un input crea
  // un nuovo oggetto di tipo AddressBookItem
  this.createNewAddressBookItem = function (input){
    console.log("createNewAddressBookItem(..): [" + input + "]");
    var abi = new AddressBookItem(input);
    console.log("new AddressBookItem): [" + abi + "]");
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

  this.test = () => {
    console.log('questo è un log ^_^');
  }
}

export default AddressBookApp;
