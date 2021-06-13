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

//es6
//``template literall comillas francesas
//Simplemente con dar enter
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

//Destruturacción de elementos
let person = {
    'name': 'Daniela',
    'age': 27,
    'country': 'MX'
};

//antes de es6
console.log(person.name, person.age);

//es6
let { name, age } = person;
console.log(name, age);

//Spread Operator nos permite expandir de ciertas situaciones varios elementos

//es6
//nos ayuda a no pasar todos los elementos en una sola línea 
let team1 = ['Daniela', 'Oscar', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

// originalmente tenáimos var y esta disponible de forma global
//let esta disponible solo en el scope, esto significa el bloque de código en el que va a ser llamado

{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let'
    console.log(globalLet)
}

console.log(globalVar);
//console.log(globalLet); aquí no es accesible, tiene que estar adentro del bloque del código en el que ha sido definido


//es6 con const no nos deja asignar de nuevo el valor de la variable, eso nos asegura que no se va a mover el valor nunca

const a = 'b';
a = 'a';


//Caracterisitica que nos permite ahorrar codigo
let name = 'Daniela';
let age = 27;

//es5
obj = { name: name, age: age };

//es6
obj2 = { name, age };
console.log(obj2)

//arrow function

const names = [
    {name: 'Daniela', age: 27},
    {name: 'Marco', age: 26}
];

//Si quisiera iterar en cada uno de los elementos utilizaría el método map

//De esta forma estamos pasando una funcion anonima 
let listOfNames = names.map(function(item){
    console.log(item.name)
})

//las arrow fucntion son funciones anónimas
let listOfNames2 = names.map(item => console.log(item.name));

//también podemos encontrarlas en una constante 
const listOfNames3 = (name, age) => {
    console.log(name, age)
};

//solo usar uno de los elemntos 
const listOfNames4 = name => {
    console.log(name)
};

//utilizar una nueva función, se asigna directamente
const square = num => num * num;

//promesas
//Para manejar el asincronismo, han incorporado las promesas que vienen a reparar tambien un problema de los callbacks que era el callback help, en el que necesitabamos ejecutar ciertos llamados en cascada.
//Promesas que en algun momento va a pasar algo que nosotros estamos estableciendo

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false){
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
};

helloPromise()
    .then(response => console.log(response));
    //.then(() => console.log('hola'));
    //.catch(error => console.log(error));

//CLASES
//nosotros podemos trabajar mejor con lso objetos y trabajar las herencias
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//IMPORT Y EXPORT (trabajar con módulos)
//se exporta el modulo de module.js
//Y ya podemos utilizar hello dentro de mi documento

import { hello } from './module'

hello();

//GENERADORES
//Primer valor del if
//Segundo valor
//Tercer ya no tiene valor

function* helloWorld() {
    if (true) {
        yield 'Hello, '
    }
    if (true){
        yield 'world';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);