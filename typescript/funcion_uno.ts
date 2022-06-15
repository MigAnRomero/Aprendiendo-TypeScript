function sumar(x: number, y: number): number
{
    return (x + y);
}

function sinRetornoNiParametros(x: string)
{
    console.log(x);
}

function mensajePrueba()
{
    console.log("Mensaje de prueba");
}

function fibonacci(vecesSucesion: number):number[]
{
    let numeros = [0, 1];
    let i = 2;

    while(i <= vecesSucesion)
    {
        numeros[i] = sumar(numeros[i-2], numeros[i-1]);
        i++;
    }
    return numeros;
}
// console.log(sumar(2, 1));
sinRetornoNiParametros("Hola mundo");
// console.log(mensajePrueba());
console.log(fibonacci(15));