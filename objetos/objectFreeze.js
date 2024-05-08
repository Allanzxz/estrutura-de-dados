const person = {
    name: "Allan",
    age: "16",
    city: "Cuiabá",
};
 Object.freeze(person);
 person.age = 16;
console.log(person);