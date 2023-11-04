{
  // Generic Type
  // type GenericArray = Array<string>

  // type GenericArray<param> = Array<param>

  type GenericArray<T> = Array<T>;
  // const rollNumbers : number[] = [12, 45, 89]

  const rollNumbers: GenericArray<Number> = [12, 63, 52];
  // const mentrors: string[]  = ["mahabub", "alom", "ovi"]
  const mentrors: GenericArray<string> = ["Mahabub", "Alom", "ovi"];
  // const boolArray : boolean[] = [true, false, true]

  const boolArray: GenericArray<boolean> = [true, false, true];

  // generic object

  interface User {
    name: string;
    age: number;
  }
  const user: GenericArray<User> = [
    {name: "m", age: 22},
    {name: "e", age: 21},
  ];
  const add = (x: number, y: number): number => x + y;
  add(20, 52);

  // generic tuple
  type GenericTuple<X, Y > = [X, Y ];
 const manush : GenericTuple<string, string> = ["Mahabu", "Erin ahmed" ];

 const userWithId : GenericTuple<number, {name: string, email: string}> = [10, {name: "m", email: "m@gmail.com"}];
  //
}
