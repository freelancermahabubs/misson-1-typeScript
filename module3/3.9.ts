{
  // abstraction

  // idea

  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //   const ehicle1: Vehicle1 = {
  //     name: "Toyota",
  //     model: "500",
  //   };

  // real implementation

  class Car implements Vehicle1 {
    startEngine(): void {
      console.log(`I am Starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I am Stopping the car engine`);
    }
    move(): void {
      console.log(`I am Moving the car engine`);
    }
  }

  const toyotaCar = new Car();
  toyotaCar.startEngine();
  //   abstract class

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;

    test() {
      console.log(`I am ust testing hte car engine`);
    }
  }

  class ToyotaCar2 extends Car2 {
    startEngine(): void {
      console.log(`I am Starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I am Stopping the car engine`);
    }
    move(): void {
      console.log(`I am Moving the car engine`);
    }
  }
  //
}
