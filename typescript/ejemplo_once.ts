//Ciclo FOR
// Crear un bucle que permita generar las tablas 
// de multiplicar del 1 al 11
for(let numTabla = 1; numTabla <= 11; numTabla++)
{
    console.log("Tabla del " + numTabla + "\n");
    for (let numMult = 1; numMult <= 10; numMult++)
    {
        let producto = numTabla * numMult;
        console.log("[" + numTabla +" * " + numMult + "= " +
        + producto + "]");
    }
    console.log("");
}

//For para recorrer los elementos existentes en un
// array
// let array = ["Hola", "me", "llamo", "Juan", "Perez"];

// for(let elemento of array)
// {
//     console.log(elemento);
// }

// console.log("---");
// //For para mostrar el indice del elemento en un array
// // y otra forma para mostrar dicho elemento.
// for(let indice in array)
// {
//     console.log(indice);
//     console.log(array[indice]);
// }