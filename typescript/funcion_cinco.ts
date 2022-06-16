import { OperationCanceledException } from "typescript"

//Funcion Callback
function Operacion(
    x:number, 
    y:number,
    func:(valorUno:number, valorDos:number)=>number
    ):number
    {
        return func(x, y);
    }
