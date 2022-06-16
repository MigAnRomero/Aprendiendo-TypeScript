enum especie{Comun, Angora, Siames, Persa};
class Gato
{
    // Atributo
    nombre: string;
    edad: number;
    esp: especie;

    // El constructor es un método donde
    // se inicializan las variables/argumentos
    constructor(nombre: string, edad: number, esp: especie)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.esp = esp;
    }

    datosGato():void
    {
        console.log("Mi gato se llama " + this.nombre +
        " tiene " + this.edad + " años y es de la especie " +
        especie[this.esp]);
    }
}

let miGato = new Gato("Garfield", 7, especie.Persa);
miGato.datosGato();