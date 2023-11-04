{
  // promise

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };
  const getTodo = async (): Promise<Todo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    const data = await res.json();
    return data;
    console.log(data);
  };

  getTodo();
  type Something = {somthing: string};

  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((reslove, reject) => {
      const data: Something = {somthing: "somthing"};
      if (!data) {
        reject("Failed to load data");
      } else {
        reslove(data);
      }
    });
  };


//   calling create promise function 

const showData = async():  Promise<Something> =>{
    const data: Something = await createPromise()
    console.log(data)
    return data
}

showData()
  //
}
