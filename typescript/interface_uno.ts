enum especieGato{Comun, Angora, Persa, Siames}

interface animal
{
    nombre: string,
    edad: number,
    datos(): void;
}

class GatoDos implements animal 
{
    nombre: string;
    edad: number;
    esp: especieGato;

    constructor(nombre: string, edad: number, esp: especieGato)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.esp = esp;
    }

    datos(): void 
    {
        console.log("Mi gato se llama " + this.nombre +
        " tiene " + this.edad + " años y es de la especie " +
        especieGato[this.esp]);        
    }
}

class Perro implements animal
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
        " tiene " + this.edad);
    }
}

let miGatoDos = new GatoDos("Garfield", 7, especieGato.Persa);
miGatoDos.datos();

let miPerro = new Perro();
miPerro.edad = 5;
miPerro.nombre = "Laika";
miPerro.datos();