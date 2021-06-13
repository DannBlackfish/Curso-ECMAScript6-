//Object.entries
//devuelve valores y claves de una matriz
const data = {
    frontend: 'Oscar',
    backend: 'Daniela',
    design: 'Ana'
}

//vovler este objeto a una matriz
const entries = Object.entries(data);
console.log(entries)

//length sI queremos saber cuantos elementos tiene un objeto
console.log(entries.length)

//Object.values valores de un objeto a un arreglo
const data = {
    frontend: 'Oscar',
    backend: 'Daniela',
    design: 'Ana'
}

const values = Object.values(data);
console.log(values)
console.log(values.length)

//padding
//Nos sirve por ejemplo en el lado frontend si se quiere presentar una estructura de elementos, se asignan elementos 
const string = 'hello';
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12,'----'))
console.log('food'.padEnd(12, '  ------'))

//trailing comas que establece que al siguiente puede haber un valor 
const objt = {
    name: 'Daniela',
}