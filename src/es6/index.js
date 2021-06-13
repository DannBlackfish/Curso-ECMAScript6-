//antes de es6
function newFunciton(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country)
}

//es6
function newFunction2(name = 'oscar', age = 32, country = "MX") {
    console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', '23', 'CO');

//Asignación temlate literal separar o unir varios elementos
//Valor de + + antes de es6
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)

//con es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)

//Multilinea
//antes de es6 usabamos \n para separar una linea
let lorem = "Quiero escribir una frase epica \n" + "otra frase epica que necesitamos"

//


