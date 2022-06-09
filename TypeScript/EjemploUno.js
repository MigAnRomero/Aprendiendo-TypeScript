function holaMundo() {
    console.log("Hola mundo");
}
/* Se debe escribir en la terminal (cmd):
tsc Ejemplo.ts
--> con el fin de obtener un archivo tipo JS con el mismo nombre del
archivo TS para poder ejecutarlo más tarde.
-----
En la terminal se digita:
node EjemploUno.js
--> para ejecutar el mensaje en la consola de holaMUndo()
*/
function multiplicar(x, y) {
    return x * y;
}
holaMundo();
console.log(multiplicar(100, 8));
/* Una forma rápida de hacer la compilación de TS a Js es usando
la siguiente línea de código: ts-node EjemploUno.ts
*/ 
