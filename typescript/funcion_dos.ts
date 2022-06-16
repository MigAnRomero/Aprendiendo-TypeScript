//Funciones anónimas
//No es necesario usar la palabra clave function
//Se utiliza lo siguiente: 
//nombre función anónima = (parámetros) => {lógica}

let sumarAnonimo = (x:number, y:number):number => {return x + y;}
let fibonacciAninima = (vecesSucesion:number):number[] => 
{
    let numeros = [0, 1];
    let i = 2;

    while(i <= vecesSucesion)
    {
        numeros[i] = sumarAnonimo(numeros[i-2], numeros[i-1]);
        i++;
    }
    return numeros;
}

console.log(fibonacciAninima(15));