describe('Application: ', function(){

/*
	var addressBook,
		thisContact;

	beforeEach(function(){
		addressBook = new AddressBook();
		thisContact = new Contact();
	});

	it('shold be able to add a contact', function(){
		addressBook.addContact(thisContact);
		expect(addressBook.getContacts(0)).toBe(thisContact);
	});

	it('shold be able to delete a contact', function(){
		addressBook.addContact(thisContact);
		addressBook.deleteContact(0);
		expect(addressBook.getContacts(0)).not.toBeDefined();
	});
  */

  //quando l'applicazione riceve un input crea un nuovo addressBookItem
  describe('when application receive an input', function(){
    it('shold be able to create a new addressBookItem', function(){
      var app = new App();
      var input = {
        name: "pippo",
        email: "arb@gmail.com",
        github: "pippopippo",
        phone: "02565958"
      };
      var ret = app.createNewAddressBookItem(input);
      expect(ret.nome).toBe(input.nome);

    });
  });

});
