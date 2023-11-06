{
  // Type Guards
  // tpeof --> typeGuard

  type AlphaNeumeric = string | number;

  const add = (
    param1: AlphaNeumeric,
    param2: AlphaNeumeric
  ): string | number => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, 5);
  const result2 = add("2", "5");
  console.log(result1);

  // in gurad

  type NormalUser = {
    name: string;
  };

  type Adminuser = {
    name: string;
    role: " Admin";
  };

  const getUser = (user: NormalUser | Adminuser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const normalUser : NormalUser ={
    name: "Mr. e"
  }
  const adminUser : Adminuser ={
    name: "Mr, bhai",
    role: " Admin"
  }

  getUser(normalUser)
  getUser(adminUser)
  //
}
