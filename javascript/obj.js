const person = {
  name: "Sasmita",
  city: "Talcher",

  skill: ["JavaScript", "React", "Drawing"],
};

console.log(Object.keys(person));
console.log(Object.values(person));

Object.entries(person).forEach(([key, value]) => {
  console.log(key + ":", value);
});

const { name, city, skill } = person;
console.log(name);
console.log(skill);
console.log(city);
