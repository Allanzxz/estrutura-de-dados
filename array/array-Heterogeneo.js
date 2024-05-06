let meuArray = [1, "dois", {nome: "João"}, [4, 5, 6], function () { return "Função dentro de um array";}];
console.log(meuArray[0]);
console.log(meuArray[2]);
meuArray.push(function(element){
    console.log(element);
});