
function BEServices(){
  var addresses = [];

  this.save = function (addressBookItem){
    console.log("INITIAL addresses.length: " + addresses.length);

    console.log("typeof addressBookItem=" + typeof addressBookItem);
    if (addressBookItem instanceof AddressBookItem) {
      addresses.push(addressBookItem);
      console.log("CURRENT addresses.length: " + addresses.length);
      return "OK";
    }
    return "KO";
  }

  this.findAll = function (){
    return addresses;
  }
}

export default BEServices;
