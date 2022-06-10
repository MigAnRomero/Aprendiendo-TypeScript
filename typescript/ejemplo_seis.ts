//Tuplas en TS
// Se puede crear un tipo de dato propio:
type datosSilla = [string, string, number]; //Simplifica el código
let silla: ['Oficina', 'verde', 4];
// let sillaDos: [string, string, number] = ['Oficina', 'rojo', 3];
let sillaDos: datosSilla = ['Oficina', 'rojo', 3];
let sillaTres: datosSilla = ['Oficina', 'amrillo', 7];
let sillaCuatro: datosSilla = ['Oficina', 'verde', 2];

sillaDos[2] = 4;

console.log(sillaDos);
console.log(sillaTres);
console.log(sillaCuatro);