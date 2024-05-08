const person = {
    name: "Allan",
    age: "16",
    city: "Cuiabá",
};
 Object.seal(person);
 person.age = 16;
 person.gender = "masculino";
console.log(person);  