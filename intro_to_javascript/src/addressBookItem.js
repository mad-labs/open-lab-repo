function AddressBookItem(input){
  this.name = input.name;
  this.email = input.email;
  this.github = input.github;
  this.phone = input.phone;
  this.uid = Date.now() + "-" + Math.random();
}
