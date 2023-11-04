{
  // ternay operator  || optional chaning || nulish coalescing operator

  const age: number = 15;
  if (age >= 18) {
    console.log(`Adult`);
  } else {
    console.log("Not Adult");
  }

  const isAdult = age >= 18 ? "adult" : "not Adult";
  console.log({isAdult});

  //   nulish coalecing operator

  // null / undefined ---> decision makeing

  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "Guest";

  const result2 = isAuthenticated ? isAuthenticated : "Guest";

  console.log({result1});

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Mahaub",
    address: {
      city: "m",
      road: "12, m",
      presentAddress: "m town",
      permanentAddress: "n",
    },
  };

  const permanentAddress =
    user?.address.permanentAddress ?? "No Permanet Address";

  console.log(permanentAddress);
}


const add = (a:number,  b: number): number => a + b;
const result: number = add (6, 4)
console.log(result) // output: 10