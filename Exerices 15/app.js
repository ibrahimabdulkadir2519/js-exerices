const people = [
  {
    name: "Alice",
    age: 25,
    city: "Wonderland",
  },
  {
    name: "Bob",
    age: 30,
    city: "Builderland",
  },
  {
    name: "Charlie",
    age: 35,
    city: "Chocolate Factory",
  }
];

for (const person of people) {
  console.log(person.name + " - " + person.age + " - " + person.city);
}
