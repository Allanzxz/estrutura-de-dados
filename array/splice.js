let array = [1, 2, 3, 4, 5,];
array.splice(2, 0, "a", "b"); // Insire "a"
console.log(array); // Saída 


array.splice(3, 2); // Remover dois elementos a partir dos indice 3
console.log(array); // Saída [1, 2, "a", 4,5]