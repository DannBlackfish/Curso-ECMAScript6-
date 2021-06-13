//INCLUDES
//Nos permite si hay un elemento dentro de un string o de algun arreglo antes se usaba infexOf
//vamos a validar si esta el número 7
let numbers = [ 1,2,3,7,8 ]

if ( numbers.includes(9)) {
    console.log('Si se encuentra el valor 7')
} else {
    console.log('No se encuentra')
}

//Como elevar a la potencia con doble *
let base = 4;
let exponent = 3;
let result = base ** exponent;

console.log(result);