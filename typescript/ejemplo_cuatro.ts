/* Tipo de Object
-------------------------------
Tipos primitivos: string, number, boolean, null, undefined
-------------------------------
Tipos no primitivos: el resto
-------------------------------
*/
let casa =
{
    calle: "Calle melancolia",
    numero:13,
    portero: false,
    familia: 
    {
        //Objeto familia dentro Obj casa
        padre: "Juan",
        hijo: "Pepe"
    }
}

console.log("Objeto casa");
console.log(casa);
console.log(casa.familia);
// console.log(casa.familia.hijo);
// console.log(casa.calle);
// console.log(casa.numero);
// console.log(casa.portero);

//Objeto definido sin inicializar
let casaDos:
{
    calle: string,
    numero:number,
    portero: boolean,
    familia: 
    {
        padre: string,
        hijo: string
    }
} =
{
    //Se genera error en la terminal si el objeto
    //no se encuentra inicializado
    calle: "Calle 2 melancolia sureste",
    numero: 12,
    portero: true,
    familia: 
    {
        padre: "Pedro",
        hijo: "Luis"
    }
}

// console.log("\nObjeto casaDos")
// console.log(casaDos);
// casaDos.calle = "Alguna";
// console.log(casaDos);