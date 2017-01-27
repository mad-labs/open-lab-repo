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

  // User Registration
  describe('USER REGISTRATION', function(){
    // quando l'applicazione riceve un input crea
    // un nuovo AddressBookItem
    describe('when application receive an input', function(){
      it('shold create a new AddressBookItem', function(){
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
      it('shold receive OK feedback', function(){
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
      it('shold receive KO feedback', function(){
        var addressBookItem = {};//app.createNewAddressBookItem(input);
        console.log("sending AddressBookItem=" + addressBookItem);
        var feedback = addressBookApp.saveAddressBookItem(addressBookItem);
        console.log("saveAddressBookItem feedback=" + feedback);
        expect(feedback).toBe("KO");
      });
    });

    // quando l'applicazione richiede l'elenco degli indirizzi da BE
    // deve ricevere un elenco di oggetti contenente ALMENO quello di "input"
    describe('when application ask a registered AddressBookItem to BE', function(){
      it('shold receive the object asked for', function(){

        var addressBookItem = addressBookApp.createNewAddressBookItem(input),
            feedback = addressBookApp.saveAddressBookItem(addressBookItem),
            addresses = addressBookApp.getAddresses(),
            uidToFind = addressBookItem.uid;

        var foundAddr = _.find(addresses,
          (item) => item && item.uid == uidToFind
        );

        expect(foundAddr === addressBookItem).toBe(true);
      });
    });

    // quando l'applicazione richiede l'elenco degli indirizzi da BE
    // deve ricevere un elenco di oggetti che NON contenente oggetti non inviati
    describe('when application ask an unregistered AddressBookItem to BE', function(){
      it('shold receive undefined', function(){
        var addressBookItem1 = addressBookApp.createNewAddressBookItem(input),
            addressBookItem2 = addressBookApp.createNewAddressBookItem(input),
            feedback = addressBookApp.saveAddressBookItem(addressBookItem1),
            addresses = addressBookApp.getAddresses(),
            uidToFind = addressBookItem2.uid;

        console.log(JSON.stringify(addressBookItem1));
        console.log(JSON.stringify(addressBookItem2));

        var foundAddr = _.find(addresses,
          (item) => item && item.uid == uidToFind
        );
        expect(foundAddr === undefined).toBe(true);
      });
    });
  });

  // User Registration
  describe('SEND EMAIL', function(){
  });

  // User Registration
  describe('USER SEARCH - ACTIVATE', function(){
    // quando l'applicazione richiede l'elenco deggli AddressBookItem al BE
    // senza utenti registrati
    // deve ricevere una lista vuota
    describe('when application asks the AddressBookItem list without registered users', function(){
      it('shold be received an empty list', function(){
        var usersList = addressBookApp.getAddresses();
        expect(usersList.length).toBe(0);
      });
    });

    // quando l'applicazione richiede l'elenco deggli AddressBookItem al BE
    // con un utente registrato
    // deve ricevere una lista contenente l'utente registrato
    describe('when application asks the AddressBookItem list with one User in it', function(){
      it('shold be received the AddressBookItem list with one element', function(){

        var addressBookItem = addressBookApp.createNewAddressBookItem(input);
        var feedback = addressBookApp.saveAddressBookItem(addressBookItem);
        var usersList = addressBookApp.getAddresses();

        expect(usersList[0]).toBe(addressBookItem);
      });
    });

    // quando l'applicazione richiede l'elenco deggli AddressBookItem al BE
    // deve ricevere una lista con gli utenti registrati
    describe('when application asks the AddressBookItem list', function(){
      it('shold be receibved the complete AddressBookItem list', function(){

        var createdAddressBookItems = _.times(100,
          () => addressBookApp.createNewAddressBookItem(input)
        );
        console.log("createdAddressBookItems: " + createdAddressBookItems);

        var savingResults =_.map(createdAddressBookItems,
            (item) => addressBookApp.saveAddressBookItem(item)
        );
        console.log("savingResults: " + savingResults);

        var savedAddressBookItem = addressBookApp.getAddresses();
        console.log("savedAddressBookItem: " + savedAddressBookItem);

        var testRes = _.every(createdAddressBookItems,
          (created) => _.find(savedAddressBookItem,
            (saved) => created.uid === saved.uid
          )
        );
        console.log("testRes: " + testRes);
        expect(testRes).toBe(true);
      });
    });

    /*
    describe('when ', function(){
      it('shold ', function(){
        expect(false).toBe(true);
      });
    });
    */
  });

});
