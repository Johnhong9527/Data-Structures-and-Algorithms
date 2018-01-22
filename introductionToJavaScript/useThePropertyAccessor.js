/*使用属性存取器*/
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

let lotrChar = new Person('Fordo');
console.log(lotrChar.name); // Fordo
lotrChar.name = 'Gandalf';
console.log(lotrChar.name); // Gandalf
lotrChar.name = 'Sam';
console.log(lotrChar.name); // Sam
