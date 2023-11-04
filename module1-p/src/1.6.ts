{
  // Learning function
  // normal function
  // arrow function

  function add(num1: number, num2: number = 10) {
    return num1 + num2;
  }
  add(2, 4);

  // arrow function

  const addArrow = (num1: number, num2: number): number => num1 + num2;

  //   object ---> function ---> method

  const poorUser = {
    name: "Mahabub",
    blance: 0,
    addBalance(blance: number): string {
      return `my balance is : ${this.balance + blance}`;
    },
  };

  //   array

  const arr: number[] = [1, 2, 3];

  const newArray: number[] = arr.map((elem: number): number => elem * elem);
}
