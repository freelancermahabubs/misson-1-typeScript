{
  // Reference type --> object

  const user: {
    // company: "Edufixup"; //type--> literal types
    readonly company: string;

    fristName: string;
    middleName?: string;
    lastName: string;
    isMarried: boolean;
  } = {
    company: "Edufixup",
    fristName: "MD",
    middleName: " Mahabub",
    lastName: "Alom",
    isMarried: false,
  };

  console.log(user);

//   user.company = 'PH'
}