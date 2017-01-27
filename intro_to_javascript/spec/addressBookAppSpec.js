describe('Application Tests: ', function(){

  var addressBookApp,
      input;

  beforeAll(function() {
  });

  beforeEach(function() {
    addressBookApp = new AddressBookApp();
    input = {
      name: "pippo",
      email: "arb@gmail.com",
      github: "pippopippo",
      phone: "02565958"
    };
  });

  afterEach(function() {
  });

  afterAll(function() {
  });

  // quando l'applicazione riceve un input crea
  // un nuovo AddressBookItem
  describe('when application receive an input', function(){
    it('shold be able to create a new AddressBookItem', function(){
      var ret = addressBookApp.createNewAddressBookItem(input);
      expect(ret.nome).toBe(input.nome);
      expect(ret.email).toBe(input.email);
      expect(ret.github).toBe(input.github);
      expect(ret.phone).toBe(input.phone);

    });
  });

  // quando l'applicazione invia un AddressBookItem
  // corretto al Back End
  // deve ricevere un feedback di OK
  describe('when application send a right AddressBookItem to BE', function(){
    it('shold be receive OK feedback', function(){
      var addressBookItem = addressBookApp.createNewAddressBookItem(input);
      console.log("sending AddressBookItem=" + addressBookItem);
      var feedback = addressBookApp.saveAddressBookItem(addressBookItem);
      console.log("saveAddressBookItem feedback=" + feedback);
      expect(feedback).toBe("OK");
    });
  });

  // quando l'applicazione invia un AddressBookItem
  // scorretto al Back End
  // deve ricevere un feedback di KO
  describe('when application send a wrong AddressBookItem to BE', function(){
    it('shold be receive KO feedback', function(){
      var addressBookItem = {};//app.createNewAddressBookItem(input);
      console.log("sending AddressBookItem=" + addressBookItem);
      var feedback = addressBookApp.saveAddressBookItem(addressBookItem);
      console.log("saveAddressBookItem feedback=" + feedback);
      expect(feedback).toBe("KO");
    });
  });

  // quando l'applicazione richiede l'elenco degli indirizzi da BE
  // deve ricevere un elenco di oggetti contenente ALMENO quello di "input"
  describe('when application send a wrong AddressBookItem to BE', function(){
    it('shold be receive KO feedback', function(){

      var addressBookItem = addressBookApp.createNewAddressBookItem(input),
          feedback = addressBookApp.saveAddressBookItem(addressBookItem),
          addresses = addressBookApp.getAddresses(),
          found = false,
          uidToFind = addressBookItem.uid;

      for (var i = 0; i < addresses.length; i++) {
        if (addresses[i].uid === uidToFind){
          found = true;
        }
      }
      expect(found).toBe(true);
    });
  });

  // quando l'applicazione richiede l'elenco degli indirizzi da BE
  // deve ricevere un elenco di oggetti che NON contenente oggetti non inviati
  describe('when application send a wrong AddressBookItem to BE', function(){
    it('shold be receive KO feedback', function(){


      var addressBookItem1 = addressBookApp.createNewAddressBookItem(input),
          addressBookItem2 = addressBookApp.createNewAddressBookItem(input),
          feedback = addressBookApp.saveAddressBookItem(addressBookItem1),
          addresses = addressBookApp.getAddresses(),
          found = false,
          uidToFind = addressBookItem2.uid;

      console.log(JSON.stringify(addressBookItem1));
      console.log(JSON.stringify(addressBookItem2));

      for (var i = 0; i < addresses.length; i++) {
        if (addresses[i].uid === uidToFind){
          found = true;
        }
      }
      expect(found).toBe(false);
    });
  });

});
