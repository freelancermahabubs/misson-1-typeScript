{
  // maaped types
  const arrayofNumbers: number[] = [54, 5, 5];
  const arrayofStr: string[] = ["m", "hg"];

  const arrayofStr1: string[] = arrayofNumbers.map((number) =>
    number.toString()
  );
  console.log(arrayofStr1);

  type AreaNumber = {
    height: number;
    width: number;
  };
  type Height = AreaNumber["height"]; // look up type
  type AreaString = {
    height: string;
    witdht: string;
  };
  //   keyof AreaNumber = > "height" | "widht"

  // key  => t['height']

  type AreaStrings<T> = {
    [key in keyof T]: T[key];
  };
  const area1: AreaStrings<{height: string; widht: number}> = {
    height: "100",
    widht: 100,
  };

  //
}
