//operador de reposo el cual puede extraer las propiedades de un bojecto que aun no se ha escribido
const obj = {
    name: 'Daniela',
    age: 27,
    country: 'MX'
}

//operador de reposo ...
let { name, ...all } = obj;
console.log(name, all);

//si hay datos que no quiero imprimir por ejemplo el pais lo hago de esta manera:
let { country, ...all } = obj;
console.log(all);

//(operador de propagación) utiizando las propiedades e propagacion podemos unir objetos a un nuevo objeto

const obj = {
    name: 'Daniela',
    age: 27
}

const obj1 = {
    ...obj,
    country: 'MX'
}

console.log(obj1)

//promise.finally cuando ha terminado el llamado y ejecutar un codigo
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))

//ES9
    .finally(() => console.log('Finalizo'))

//regex hacia un grupo
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);

