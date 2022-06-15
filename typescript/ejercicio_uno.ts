//1) Hacer la serie de fibonacci en TS

let vecesIterar = 15;
let numeros = [0, 1];
let i = 2;

while(i < vecesIterar)
{
    numeros[i] = numeros[i-2] + numeros[i-1];
    i++;
}
console.log(numeros);
console.log(numeros.length);

//2) Devolver los primeros 100 números impares
for(let num_impar = 0; num_impar < 100; num_impar++)
{}

//3) Hacer un menú que nos devuelva una opción u otra.