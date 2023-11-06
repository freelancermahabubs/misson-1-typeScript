{
  //static

  class Counter {
    static count: number = 0;
    static increment() {
      return (Counter.count = Counter.count + 1);
    }
    decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  // const intace1 = new Counter()

  //   console.log(intance1.increment()) // 1 -> different memory

  console.log(Counter.increment()); // 1 -> different memory
  //   const intance2 = new Counter();
  console.log(Counter.increment()); // 1 -> different memory
  //   const intance3 = new Counter();
  console.log(Counter.increment()); // 1 -> different memory
  //
}
