//utilizar array.flat devuelve una matriz con cualquier submatriz aplanada
let array = [1,2,3, [1,2,3, [1,2,3]]]

//(2) valor de la produndidad de la que se quiere manejar la matriz o elementos que va a atner
console.log(array.flat(2))

//flatmap me permite mapear cad aelemento despues pasarle una funcion y apalanrlo segun el resultado

let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));

//trimStart elimina los espacioes en lbacno de un string
let hello = '          hello world';
console.log(hello);
console.log(hello.trimStart());

//trimEnd eliminar espacios al final del texto
let hello = 'hello world        ';
console.log(hello);
console.log(hello.trimEnd());

//optional catch bringing pasar de forma opcional el parametro de error al valor de catch
try {

} catch {
    error
}

// transforma clave valor en un objeto esto es ienteresante cuando estas trabajando con arreglos, podemos tranforar de arreglos a aobjetos o vicversa

let entries = [["name", "oscar"], ["age", 27]];
console.log(Object.fromEntries(entries));

//objeto de tipo simbolo que nos permite acceder a una descripcion
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description)

