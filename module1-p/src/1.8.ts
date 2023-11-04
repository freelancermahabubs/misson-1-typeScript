{
  // destructuring

  const user = {
    id: 351,
    name: {
      firstName: "MD",
      middlieName: "Mahabub",
      lastName: "Alom",
    },

    contactNo: "014056522",
    address: "Mymenshigh",
  };

  const {
    contactNo,
    name: {firstName},
  } = user;
}

// array destructuring

const myFriends = ["Chandl", "m", "L", "T", "tst"];
const [, , bestFriend, ...rest] = myFriends;
