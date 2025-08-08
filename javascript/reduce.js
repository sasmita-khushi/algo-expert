const users = [
  { name: "Sasmita", age: 19 },
  { name: "Rasmita", age: 29 },
  { name: "Arati", age: 15 },
  { name: "Prahallad", age: 60 },
];

const newUser = users.reduce((acc, user) => {
  if (user.age > 18) {
    acc.push(user.name.toUpperCase());
  }
  return acc;
}, []);

console.log(newUser);
