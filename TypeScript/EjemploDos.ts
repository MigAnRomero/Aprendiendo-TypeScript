//Los tipos básicos de datos en TS
let numero:number;
let cadena:string;
let soyBoleano:boolean;

cadena = "Hola mundo aaa";
console.log(cadena);

numero = -8;
console.log(numero);

function Pruebas(num: number)
{
    return num + 40;
}

console.log(Pruebas(numero));