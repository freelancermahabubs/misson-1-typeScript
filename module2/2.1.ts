{
  // type assertion

  let anything: any;
  anything = "next Level web developemt";
  anything = 200;
  anything as number;

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;

  type CustomeError = {
    message: string;
  };
  try {
  } catch (e) {
    console.log((e as CustomeError).message);
  }

  //
}
