class Person {
  constructor (name) {
    this.name = name;
  }
  greet() {
    return `Ciao mi chiamo ${this.name}`;
  }
}

let persona = new Person ("Pippo");
console.log(persona.greet());
