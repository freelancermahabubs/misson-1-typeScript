{
  // oop -> class

  class Animal {
    // public name: string;
    // public speciles: string;
    // public sound: string;

    // paramter properites

    constructor(
      public name: string,
      public speciles: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.speciles = speciles;
      //   this.sound = sound;
    }
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German sheparid bhai", "Dog ", "Ghew Ghew");
  const cat = new Animal("mahabub bhai", "Dog ", "Meaw Meaw");
  dog.makeSound();
  //
}
