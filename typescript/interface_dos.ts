//Types
interface animal
{
    nombre: string,
    edad: number,
    datos(): void;
}

class PerroDos implements animal
{
    nombre: string;
    edad: number;
    // constructor(nombre: string, edad: number)
    // {
    //     this.nombre = nombre;
    //     this.edad = edad;
    // }
    datos(): void 
    {
        console.log("Mi perro se llama " + this.nombre +
        " tiene " + this.edad + " años");
    }
}

let perroDos = new PerroDos();
perroDos.nombre = "Lakia";
perroDos.edad = 5;
perroDos.datos();