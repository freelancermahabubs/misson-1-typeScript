{
  // spered operator
  // rest operator
  // destructuring

  // learn spread operator

  const bros1: string[] = ["Mir", "Mahabub", "OBi"];

  const bors2: string[] = ["types", "Nmpmci0", "laist"];

  bros1.push(...bors2);

  //   object
  const mentors = {
    typeScript: " Mahabub",
    redux: "Mir",
    dbms: "Miz",
  };
  const mentors2 = {
    prisma: " Mahabub",
    nextjs: "Mir",
    cloud: "Miz",
  };

  const mentorList = {
    ...mentors,
    ...mentors2,
  };
  console.log(mentorList);

  //   learn rest operator

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(friend));
  };
  greetFriends("Abul", " Nabul", "Sabul", "Neblol");
}
