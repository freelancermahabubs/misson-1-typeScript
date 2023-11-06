{
  //poymorhisom

  class Person {
    getSleep() {
      console.log(`I am Sleeping for 8 hour Per day`);
    }
  }
  class Stunent extends Person {
    getSleep() {
      console.log(`I am Sleeping for 7 Hours per day`);
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log(`I am Sleeping for 6 Hours per day`);
    }
  }

  const getSleppingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Stunent();
  const person3 = new Developer();

  getSleppingHours(person1);
  getSleppingHours(person2);
  getSleppingHours(person3);


  class Shape{
    getArea(): number{
        return 0;
    }
  }

  // pi * r * r

  class Circle extends Shape{
    radius : number;
    constructor(radius: number){
        super()
        this.radius = radius
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
  }

//   rectangle 


class Reactangle extends Shape{
    height: number;
    width: number;
    constructor (height: number, width: number){
        super();
        this.height = height
        this.width = width
    }
    getArea(): number {
        return this.height * this.width
    }
}

const getShapeArea = (param: Shape)=>{
    console.log(param.getArea())
}

const shape1 = new Shape()
const shape2 = new Circle(10)
const shape3 = new Reactangle(10, 50)

  //
}
