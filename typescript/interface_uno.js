var especieGato;
(function (especieGato) {
    especieGato[especieGato["Comun"] = 0] = "Comun";
    especieGato[especieGato["Angora"] = 1] = "Angora";
    especieGato[especieGato["Persa"] = 2] = "Persa";
    especieGato[especieGato["Siames"] = 3] = "Siames";
})(especieGato || (especieGato = {}));
var GatoDos = /** @class */ (function () {
    function GatoDos(nombre, edad, esp) {
        this.nombre = nombre;
        this.edad = edad;
        this.esp = esp;
    }
    GatoDos.prototype.datos = function () {
        console.log("Mi gato se llama " + this.nombre +
            " tiene " + this.edad + " años y es de la especie " +
            especieGato[this.esp]);
    };
    return GatoDos;
}());
var Perro = /** @class */ (function () {
    function Perro(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Perro.prototype.datos = function () {
        console.log("Mi perro se llama " + this.nombre +
            " tiene " + this.edad);
    };
    return Perro;
}());
var miGatoDos = new GatoDos("Garfield", 7, especieGato.Persa);
miGatoDos.datos();

var miPerro = new Perro("Doria", 12);
miPerro.edad = 5;
miPerro.nombre = "Laika";
miPerro.datos();