//escribe una funcion que tome un mumero como parametro y devuelva 
//true si el numero es divisible por 3 y 5, o false si no lo es

function divisiblePor3OPor5(numero) {
    return (numero % 3 === 0) || (numero % 5 === 0)
}

console.log(divisiblePor3OPor5 (10)); //true
console.log(divisiblePor3OPor5 (12)); //true
console.log(divisiblePor3OPor5 (23)); //false

function invertirCadena(cad) {
    var nuevaCadena = "";
    for (var i = cad.length - 1; i >= 0; i--) {
        nuevaCadena += cad[i];
    }
    return nuevaCadena;
}
invertirCadena('hola');

