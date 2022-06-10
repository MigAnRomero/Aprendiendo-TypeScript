// Arrays en TS
// Arrays de números
var numeros = [1, 4, 5, 7];
// console.log("\nArray numeros");
// console.log(numeros);
// Arrays de cadenas
var cadena = ['Hola', 'ne', 'nah!', 'llama', 'Juan'];
// console.log("\nArray cadena");
// console.log(cadena);
//Definiendo un Array como tipo cadena
var cadenaDos;
cadenaDos = ['Mora', 'Uva', 'Piña', 'Coco'];
// console.log("\nArray cadenaDos");
// console.log(cadenaDos);
// Definiendo un Array de tipo objeto
var casaTres = {
    calle: "Calle melancolia",
    numero: 10,
    portero: false,
    familia: {
        //Objeto familia dentro Obj casa
        padre: "Juan",
        hijo: "Pepe"
    },
    presentacion: ['Hola', 'soy', 'el', 'hijo']
};
// console.log(casaTres);
var casaCuatro = {
    calle: "Cll. Hope",
    numero: 120,
    portero: true,
    familia: {
        padre: "Carlos",
        hijo: "Don"
    },
    presentacion: ['Hola', 'soy', 'el', 'padre']
};
//Definiendo un Array de tipo any (se aceptan todos los tipos de datos)
var mezcla;
mezcla = ['Rodrigo', 4, 5, true, 'Pereira LATAM'];
// console.log("\nArray mezcla");
// console.log(mezcla);
var mezclaDos = ['Rodrigo', 4, 5, true, 'Pereira LATAM', casaTres];
// console.log("\nArray mezclaDos");
// console.log(mezclaDos);
var casas;
casas = [casaTres, casaCuatro];
console.log(casas);
