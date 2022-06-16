var especie;
(function (especie) {
    especie[especie["Comun"] = 0] = "Comun";
    especie[especie["Angora"] = 1] = "Angora";
    especie[especie["Siames"] = 2] = "Siames";
    especie[especie["Persa"] = 3] = "Persa";
})(especie || (especie = {}));
;
var Gato = /** @class */ (function () {
    // El constructor es un método donde
    // se inicializan las variables/argumentos
    function Gato(nombre, edad, esp) {
        this.nombre = nombre;
        this.edad = edad;
        this.esp = esp;
    }
    Gato.prototype.datosGato = function () {
        console.log("Mi gato se llama " + this.nombre +
            " tiene " + this.edad + " años y es de la especie " +
            especie[this.esp]);
    };
    return Gato;
}());
var miGato = new Gato("Garfield", 7, especie.Persa);
miGato.datosGato();
