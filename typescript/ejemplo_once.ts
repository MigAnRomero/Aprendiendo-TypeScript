//Ciclo FOR
// Crear un bucle que permita generar todas las 
// fichas de domino
// for(let i = 0; i <= 6; i++)
// {
//     console.log("El domino empieza con: " + i);
//     for (let a = 0; a <= 6; a++)
//     {
//         console.log("La ficha de domino es: [" + 
//         i +" / " + a + "]");
//     }
//     console.log("\n");
// }

//For para recorrer los elementos existentes en un
// array
let array = ["Hola", "me", "llamo", "Juan", "Perez"];

for(let elemento of array)
{
    console.log(elemento);
}

// console.log("---");
// //For para mostrar el indice del elemento en un array
// // y otra forma para mostrar dicho elemento.
// for(let indice in array)
// {
//     console.log(indice);
//     console.log(array[indice]);
// }