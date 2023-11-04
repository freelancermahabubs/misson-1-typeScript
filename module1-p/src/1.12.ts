{
  // nullable typs / unknown types

  const searchName = (value: string | null) => {
    if (value) {
      console.log("Serching");
    } else {
      console.log("There is nothing to search");
    }
  };
  searchName(null);

  //   unknown typeof

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The Speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const valueNumber = value.split(" ");
      const [result] = valueNumber;
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The Speed is ${convertedSpeed} ms^-1`);

      console.log(result);
    } else {
      console.log("Wrong input");
    }
  };
  getSpeedInMeterPerSecond(`1000  kmh^-1`);

  //   never
  function throwError(msg: string): never {
    throw new Error(msg);
  }
  throwError("Mushkil se error hogaya");
}
