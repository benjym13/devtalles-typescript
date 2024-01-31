// Crear interfaces
interface Auto {
  encender:boolean;
  velocidadMaxima:number;
  acelear:()=>void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Two {
  reir:boolean;
  comer:boolean;
  llorar?:boolean;
}
const guason: Two = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Two ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface FunctionInterface {
  (ciudadanos:string[]):number;
}
const ciudadGotica:FunctionInterface = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface Persona  {
  nombre:string;
  edad:number;
  sexo:string;
  estadoCivil:string;
  imprimirBio():void;
}
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Persona {}