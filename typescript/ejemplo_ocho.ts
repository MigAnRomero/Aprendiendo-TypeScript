//Unión --> similar al tipo any pero más acotado
type otro = number | boolean;
//let numeroOrBooleano: number | boolean;
let numeroOrBooleano: otro;
numeroOrBooleano = 4;
numeroOrBooleano = false;
numeroOrBooleano = -3.67893436
console.log(numeroOrBooleano);

//Literal
let animalUno: 'gato';