const personPrototype ={
    greet: function(){
        console.log(`Olá, meu nome é ${this.name}`);
    }
};
const objAllan = Object.create(personPrototype);
objAllan.name ="Allan";
objAllan.greet();