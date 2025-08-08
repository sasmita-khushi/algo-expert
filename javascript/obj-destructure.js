// const users = [
//   { name: "Sasmita", age: 19 },
//   { name: "Rasmita", age: 29 },
// ];

// const [{ name: name1 }, { name: name2 }] = users;
// console.log(name1);
// console.log(name2);

const response = {
  status: 200,
  data: [
    { username: "sasmita19", city: "Talcher" },
    { username: "rasmita29", city: "Bhubaneswar" },
  ],
};
const {
  status,
  data: [{ username: user1 }, { city: city2 }],
} = response;

console.log(user1);
console.log(city2);
console.log(status);
