//Funciones que retornan errores
// Tipo Never (es un tipo de datos que esperan un error)

// Ejemplo de cariable tipo Never
let ejemploNever = (cadena:string) => {while(true);}

// // Solución de la línea de código anterior
let SolucionNever = (cadena:string) => {if(cadena != "")while(true);}

// // Se puede forzar que siempre se devuelva un tipo never
let ejemploDosNever = (cadena:string):never => {while(true);}

// Una función digitada para lanzar un error
let lanzarError = (texto:string) => 
{
    throw new Error(texto);
}

lanzarError("Asdwdehyfyu");