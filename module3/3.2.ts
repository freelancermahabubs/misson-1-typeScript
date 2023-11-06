{
  //oop  -inheritence

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name}  will sleep of ${numOfHours}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Mir Mahabub", 21, "Bd");

  //   teacher
  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeCalss(numOfClass: number) {
      console.log(`${this.name}  will take ${numOfClass}`);
    }
  }
  const teache1 = new Teacher("Mr. M", 21, "BD", "DEV");
  //
}
