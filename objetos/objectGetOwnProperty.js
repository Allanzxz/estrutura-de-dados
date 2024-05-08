const person = {
    name: "Allan",
    age: "16",
    city: "Cuiabá",
};
const propertyNames = Object.getOwnPropertyNames(person);
console.log(propertyNames); // Saida:  [ 'name', 'age', 'city' ]