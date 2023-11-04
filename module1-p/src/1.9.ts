{
  // type alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "M",
    age: 21,
    gender: "male",
    contactNo: "01522",
    address: "Mym",
  };

  const student2: Student = {
    name: " L",
    age: 21,
    gender: "Female",
    address: "n",
  };

  type UserName = string;

  type IsAdmin = boolean;
  const userName: UserName = "mahabub";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number
  const add: Add = (num1, num2) => num1 + num2
}
