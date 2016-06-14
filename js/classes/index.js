class Human {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello I'm ${this.name}`);
  }

  get getName() {
    return this.name;
  }

  /*
    Like other languages with static class members, the static keyword will create a method
    associated with the class, and not with an instance of the class. In other words, you can
    only reach a static method using the name of the class.
  */
  static sayHello() {
    console.log('Hello!');
  }
}

class Developer extends Human {
  constructor(name) {
    // In a derived class, you must call super() before you can use this
    super(name);
    this.language  = 'JS';
  }

  greet() {
    super.greet();
    console.log(`... and I'm a developer`);
  }

  work() {
    console.log('Developers developers developers!');
  }
}

let bob = new Human('Bob');
bob.greet();
Human.sayHello();

let usse = new Developer('Usse');
usse.greet();
usse.work();
console.log(usse.getName);
