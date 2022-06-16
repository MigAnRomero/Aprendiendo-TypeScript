function multiplicar (x: number, y: number): number
{
    return x * y;
}

function auxMultiplicar (x: number, y: number)
{
    console.log(x * y);
}

// Tener una función en una variable
let funcMultiplicar = auxMultiplicar;
// Asignarle a la variable que solo permita entrar en la función
// parámetros de entrada de tipo number y que devuelva un
// parámetro de salida tipo number
let funcMultiplicarDos: (x:number, y: number) => number;
funcMultiplicarDos = multiplicar;

console.log(funcMultiplicarDos(3, 4));
funcMultiplicar(4, 4);