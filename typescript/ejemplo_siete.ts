// Tipos de datos Any y Enums
// No es recomendable usar Any en TS por perder el tipado
/**
 * Any: es una variable de tipo Any que puede contener datos de cualquier
 * tipo, en cualquier momento.
 * 
 * En TS, al usar este tipo de dato, se salta el tipado.
 */

let variasCosas: any[] = ['Gato', 3, -4.56, true, null, undefined];
console.log(variasCosas);

enum monedas{euro, dolar, yen}
enum animal{mamifero, anfibio, reptil, ave, pez}

let gato = 
{
    especie:"Comun",
    edad: 7,
    animal: animal.mamifero
}

console.log(gato);