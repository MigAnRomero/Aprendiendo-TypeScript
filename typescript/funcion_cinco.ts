//Funcion Callback
type operacionAbreviada = (valorUno:number, valorDos:number)=>number;

function operacion(x:number, y:number, func:operacionAbreviada):number
{
    return func(x, y);
}

console.log(operacion(10, 4, (x:number, y:number):number=>{return x*y}));
console.log(operacion(10, 5, (x:number, y:number):number=>{return x+y}));
console.log(operacion(5, 4, (x:number, y:number):number=>{return x*y}));