{
  // utility tpes
  //pic
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type Name = Pick<Person, "name" | "age">;

  // omit

  type ContactInfo = Omit<Person, "name" | "age">;
  // requiered

  type PersonRequired = Required<Person>;
  // partial
  type PersonPartial = Partial<Person>;

  // readOnly

  type ReadOnlyPerson = Readonly<Person>;
  const person1: Person = {
    name: "mahabub",
    age: 20,
    contactNo: " 540",
  };

  // Record

//   type Myobj = {
//     a: string;
//     b: string;
//   };
  type Myobj = Record<string, string>;
  const emptyObj: Record<string, unknown> = {};
  emptyObj.age = 10;

  const obj1: Myobj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "cc",
  };
  //
}
