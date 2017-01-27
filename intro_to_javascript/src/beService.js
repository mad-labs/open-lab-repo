
function BEServices(){
  var addresses = [];

  this.save = function (addressBookItem){
    console.log("addresses=" + addresses);

    console.log("typeof addressBookItem=" + typeof addressBookItem);
    if (addressBookItem instanceof AddressBookItem) {
      addresses.push(addressBookItem);

      console.log("addresses=" + addresses);

      return "OK";
    }
    return "KO";
  }

  this.findAll = function (){
    return addresses;
  }
}
