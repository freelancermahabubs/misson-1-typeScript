{
  // generic Constrint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "BIK" | "Car" | "ShIP"; // manually
  type Owner2 = keyof Vehicle;

  const  person1: Owner  ="BIK"
  const getPropertyValue = <X, Y extends keyof X> (obj: X, key: Y) => {
    return obj[key]
  }

  const user = {
    name: "m",
    age: 25,
    address: "my"
  }
  const result = getPropertyValue(user, 'name')
//   user['name']
}
