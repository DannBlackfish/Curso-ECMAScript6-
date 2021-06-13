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

//Promesta com la cual vamos a trabjar el asyunc y wait esto nos permite ser mas claros a la hota de construir las funciones y va a trabajr de mejor forma el asincronismo
const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
}

//va a ahcer el lalamdo va a eperar que suceda y luego imprimir en consola
const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

//propuesta para maenajr los errores
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}
