#I. - Introducción a TS
Durante la realización de este curso vamos a tener a mano siempre la documentación oficial de [TS](https://www.typescriptlang.org/docs/handbook/intro.html)

    A. Intalación de TS

        Normalmente trabajamos con TS a nivel de proyecto, en una pliación Angular, React ...etc. Para este caso vamos a instalar TS a nivel global, para ello aplicamos este comando sobre la consola.

        $npm install -g typescript

        Si ya lo tenemos instalado y queremos conocer la versión de TS que estamos usando, aplicamos el siguiente comando.

        $tsc --version ó $tsc -v

    
#II. Introduccion a TS 2
Para transpilar manualmente los archivos .ts en .js escribimos en la terminal

    $tsc

También podremos dejar lAa transpilación en modo observador escribiendo

    $tsc --watch

#III. - Tipos básicos - [link](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
En esta sección aprenderemos:

Qué son los tipos de datos?
Una introducción a los diferentes tipos de datos que existen en TypeScript.
    - Booleanos.
    - Números.
    - Strings.
    - Tipo Any.
    - Arreglos.
    - Tuplas.
    - Enumeraciones
    - Retorno void
    - Null
    - Undefined

En Js tenemos dos tipos de datos, los primitivos y los compuestos. Al primer grupo pertenecen los string, number, boolean y symbols mientras que al segundo objetos literales, funciones, clases y arrays.

##ANY
Cuando tenermos una variabale que no sabemos como es o de tipo :any podemos hacerla castring para obtener los métodos propios de este tipo

    let avangers:any = 123;

    console.log((avangers as number).toFixed()) ó también
    console.log(<string>avengers.toUpperCase())

##ARRAY

    const numbers = [1,2,3,4] --> es de tipo number[]
     const numbers = [1,2,'3',4] --> es de tipo ( string | number )[]

##TUPLAS - TRIOS
Las tuplas son arrays donde especifícamos el tipo de cada uno de los elementos de un array pudiendo tener varis distintos

    let hero = ['Dr strange', 500] 

Ts nos marca que la tupla es [string, number], se la ponemos a nuestra var

    let hero : [string, number] = ['Dr strange', 500] ;

Si queremos reasignar la posicion 0 y poner un numbero al ser un string el primer tipo de la tupla Ts nos marcará un error

    hero[0] = 123; ------> ERROR de TS


##ENUM

    enum Direction {
        Up,
        Down,
        Left,
        Right,
    }

Los Enums son inicializados por defecto desde 0 y se auto-incrementan por ejemplo Direction.Up tendrá un valor de 0, Direction.Down 1 y así consecutivamente.... si inicializamos nosotros mismos veamos que pasa.

    enum Direction {
        Up = 1,
        Down,
        Left,
        Right = 10,
    }

Vemos que el valor de Direction.Up es 1, ya no es 0 por lo tanto Direction.Down es 2, como hemos dicho se auto-incrementa. Lo único que podemos destacar es que Direction.Right es 10, mantiene su valor todos los demás valores se auto-incrementan desde su valor por defecto o su reasignación.

No solo hay ENUMS númericos tambien de strings o de otros tipos, para indagar más sobre el tema te dejo la documentación. [link](https://www.typescriptlang.org/docs/handbook/enums.html#handbook-content)

##VOID O VACÍO
Cuando trabajamos con TS tendremos en alguna ocasión funciones que no tengan un return es decir no devuelven ningún valor, son funciones que hacen determinadas operaciones pero que no devuelven nada. Estás son las de tipo void

    funtion callBatman() {
    }
    const a  = callBatman();
    console.log(a)

Esto no hace nada porque no tiene un return para ello la forma de especificarlo es de la siguiente manera

    funtion callBatman():void {
    }
    ó
    const callBatman = ():void => {};

#III. - FUNCIONES Y OBJETOS
¿Qué veremos en esta sección?


Esta sección esta enfocada en aprender como trabajan las funciones en TypeScript y también nos enfocaremos en aplicar buenas prácticas a la hora de crearlas.

Puntualmente tenemos:

Declaraciones básicas de funciones
Parámetros obligatorios
Parámetros opcionales
Parámetros por defecto
Parámetros REST
Tipo de datos "Function"

Al final de la sección, tendremos el examen práctico y el examen teórico.

##Declaraciones básicas de funciones

    const hero : string =  'Batman';

    function returnName():string {
        return hero;
    }

    const returnHeroName = ():string => {
        return 'Flash';
    }

##Parámetros obligatorios

    const fullName =  (firstName: string, lastName: string): string => {
        return `${firstName} ${lastName} `;
    };

    const name = fullName('Tony', 'Stark');
    console.log({name});

En esta funciónhemos declarado que nuestra función fullName tiene dos argumentos obligatorios los cúales pasamos como Tony y Stark, si quitamos uno de ellos TypeScript nos dirá que estamos pasando un argumento de los dos solicitados además del tipo de cada uno de ellos. Si pasamos un boolean cuando realmente espera un string marcará error igualmente.

##Parámetros opcionales 

Como hemos dicho antes si solo pasamos un argumento TS se quejará, para indicar que por ejemplo el segundo argumentoss lastName es opcional tendremos que ponerlo con el signo de interrogación.

    const fullName =  (firstName: string, lastName?: string): string => {
        return `${firstName} ${lastName} `;
    };

    const name = fullName('Tony');
    console.log({name});

Los argumentos opcionales deben ir al final siempre de la declaración (como buena práctica)  no ser que vengan predecidos de un valor por defeecto, porque TS no tiene forma de saber cúal es el opcional y cual es el requerido en su declaración, partamos del ejercicio anterior.

    const fullName =  (firstName: string, lastName?: string, upper:boolean = false): string => {
        if( upper ) {
        return `${firstName} ${lastName}`.toUpperCase();
        } else {
             return `${firstName} ${lastName}`;
        }
    };

    const name = fullName('Tony', true);
    console.log({name});

Ts no tiene forma de saber si nuestro true corresponde a lastName o upper

##REST Arguments

    const fullName =  (firstName: string, ...args:string[]): string => {
        return `${firstName} ${argsjoin(' ')}`;
    };

    const name = fullName('Tony', 'Start', 'Martínez');
    console.log({name});

#V. - Objetos y tipos personalizados en TS
Aprenderemos a utilizar los objetos en TypeScript, su uso y mantener nuestro código bien limpio mediante tipos personalizados.

Los temas serán:

Objetos básicos
Crear objetos con tipos específicos
Crear métodos dentro de objetos
Tipos personalizados
Crear variables que soporten varios tipos a la vez.
Comprobar el tipo de un objeto.
Al final, el respectivo examen práctico y teórico.

##Métodos dentro de los objetos
Imaginemos que tenemos un objeto con un método opcional, ¿como deberíamos tipar esto?

    let flash = {
        name: 'Clark',
        age: 24,
        getName()=> {
            return this.name
        }
    }

Tenemos el siguiente objeto como podemos tiparlo en la propia declaración siendo el método un parámetro opcional.

    let flash: (name:string, age:number, getName?: funtion) = {
        name: 'Clark',
        age: 24,
        getName()=> {
            return this.name
        }
    }

Así podríamos tiparlo pero entonces el método quedaría muy abierto o general para ello seremos un poco más específicos.

    let flash: (name:string, age:number, getName?: ()=> string) = {
        name: 'Clark',
        age: 24,
        getName()=> {
            return this.name
        }
    }

A este tipo de tipado lo denominaremos definción en linea.


##Tipos personalizados
En Ts he mos visto anteriormente las definiciones de tipos en linea, bien, no es su uso común puesto que si queremos hacer un cambio debemos reflejharlo en cada uno de los lugares donde tengamos es mismo tipo. Por ello usamos lo tipos peronalizados. Paratiendo del ejemplo anterior veamos como podemos crear tun tipo personalizado,

    let flash: (name:string, age:number, getName?: ()=> string) = {
        name: 'Ben',
        age: 24,
        getName()=> {
            return this.name
        }
    }
    let superman: (name:string, age:number, getName?: ()=> string) = {
        name: 'Clark',
        age: 60,
        getName()=> {
            return this.name
        }
    }

    // creamos type Hero

    export type Hero = {
        name:string;
        age:number;
        getName?:() => string;
    }

    //Asignamos nuestro type donde sea necesario

    let flash: Hero = {
        name: 'Clark',
        age: 60,
        getName()=> {
            return this.name
        }
    }

#VI. - Depuración de errores y el archivo tsconfig.json

- prenderemos el ¿por qué siempre compila a JavaScript?
- Para que nos puede servir el archivo de configuración de TypeScript
- Realizaremos depuración de errores directamente a nuestros archivos de TypeScript
- Removeremos todos los comentarios en nuestro archivo de producción.
- Restringiremos al compilador que sólo vea ciertos archivos o carpetas
- Crearemos un archivo final de salida
- Aprenderemos a cambiar la version de JavaScript de salida

##¿Que es el archivo tsconfig.json y para que sirve? [link](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

Nos puede servir para configurar las compiler options, hacer includes o excludes etc... por ejemplo cuando intento depurar un error el navegador me dice el archivo pero no me dice la linea exacta...

Podemos ir a las compiler options y descomentar el sourcemap o ponerlo a true, de esa forma el navegador nos dirá de que archivo de se trata.

## Incluir/excluir archivos o carpetas
Podemos usar el archivo tsconfig.ts para configurar a través de la propiedad exclude o include más el array de rutas que que queremos excluir o incluir

##Output File
Para ello iremos a nuestro archivo tsconfig.ts y encontraremos la propiedd outFile y outDir, indicaremos en primer lugar la ruta y el nombre del archivo de salida que queremos generar. Al principio nos dará un error y es porque la propiedad modules tiene que estar configurada en "AMD"

# VII - Caracterísitcas nuevas o actualizaciones de ECMAScript6 disponibles TS

JavaScript va actualizando año con año, y tenemos que estar enterados de todo lo nuevo para saber cómo le sacamos el máximo provecho!

Esta sección esta orientada a enseñarles un par de cosas muy útiles y necesarias del ES6 (ES2015 o ECMAScript 6), que ya podemos utilizar con toda confianza en TypeScript.

Aprenderemos sobre:

- Diferencia entre declarar variables con VAR y con LET
- Uso de constantes
- Plantillas literales
- Funciones de flecha
- Destructuración de objetos
- Destructuración de Arreglos
- Nuevo ciclo, el FOR OF
- Conocer sobre la programación orientada a objetos
- Clases

##Variables var y let
No debemos trabajar con var esto puede traernos muchos errores, solo si queremos tener algún tipo de compatibilidad con navegadores antiguos.

## Desestructturación de objetos

    const avengers = {
        ironMan: 'Rober Dawney Jr',
        thor: 'Hemsworth,
        activo: true,
        poder:2000
    }
    const + propiedad de objetos que vamos meter en una constante = nombre del objeto al que pertenecen
    const  { ironMan, poder } = avengers;

    console.log(ironMan); //'Rober Dawney JR'

##Desestruración de arrays
La desestructuración funciona mucho mejor cuando tipamos los arrays u objetos qu eintentamos desestructurar.

    const avengersArr: string[]= ['Hulk', 'IronMan'];

Si quisiera coger solo la posición de ironMan tendría que crear un nombre en la segunda posoicón y el resto con comas, al ser un array y no un objeto establecemos los corchetes y no las llaves

    const [ , iron ] = avengersArr;
    console.log(iron)


##Ciclo for of

    const avengers: string[] = [ 'Ironman', 'Thor', 'Capitan América'];

    for (let avenger of avengers) {
        consolo.log(avenger);
    }

Esto sustitutye al tipíco for....

    for(let i = 0; i < avengers.length; i++ ) {
    console.log(avengers[i]);
}

##Clases en EC6

Usamos el constreuctor para inicializar la propiedad y que esta sea dinámica 
    class Avenger  {
        name;
        constructor(name){
            this.name = name;
        }
    }

#VIII. - Clases en TS
La programación orientada a objetos es un tema sumamente importante, especialmente si nuestras aplicaciones van de mediana a gran escala. TypeScript trae toda la potencia de una programación orientada a objetos a la web.

Toda la sección se enfoca en enseñar sobre el uso de clases.

Puntualmente aprenderemos sobre:

- Crear clases en TypeScript
- Constructores
- Accesibilidad de las propiedades:
    - Públicas
    - Privadas
    - Protegidas
- Métodos de las clases que pueden ser:
    - Públicos
    - Privados
    - Protegidos
- Herencia
- Llamar funciones del padre, desde los hijos
- Getters 
- Setters
- Métodos y propiedades estáticas
- Clases abstractas
- Constructores privados.


##Definición básic de una clase TS

    class Avenger {
        private name:string;
        public team:string;
        static age?:number = 35;
        constructor(name:string,team:string) {
            this.name = name;
            this.team = team;
        }
    }
    const antMan:Avenger = new Avenger('antMan', 'captain');
    console.log(antMan);

- private solo sera accesible dentro de la clase nunca fuera.
- si no especificamos nada será una propiedad pública aunque es recomendado declararlo y será accesible dentro y fuera de la clase
- static, no es accesible desde antMan.age si no desde la propia clase Avender.age

Por un lado tenemos las propiedades que son name, team y age, para que estás puedan ser 'contribuibles' como lor parámetros de una función tenemos que meterlas en el constructor y asignar la propieedad a la variables asi por ejemplo encontramos this.name = name , haciendo referencia a propiedad = parámetro

Si especificamos public o private dentro del propio constructor no hace falta las primeras lineas de declaración

    class Avenger {
        constructor(public name:string){
            this.name  = name;
            console.log(`${this.name} desde Avenger`)
        }
        protected bio() {
            return `nuestro personaje se llaama : ${this.name}`;
        }
    }
## Herencia extends y super

protected podemos hacceder a propiedades y métodos protegidos desde la clase de la cual extiende

## Gets & Sets
Los getters y los settes son como métodos dentro de una clase.
Los primeros tienen que tener una return siempre. Para llamarlo no es necesarío ejecutarlo con el () simplemente lo mando a llamar como cualquier propiedad.

    class Avenger {
        constructor(public name:string){
            this.name  = name;
            console.log(`${this.name} desde Avenger`)
        }
        protected bio() {
            return `nuestro personaje se llaama : ${this.name}`;
        }

        get fullName() {
            return `${this.name}`;
        }
    }
    const ironMan = new Avenger('ironman');
    console.log(ironMan.fullName);

Los setter siempre esperan un parámetro, no se pueden añadir más solo pueden usaer uno

    class Avenger {
        constructor(public name:string){
            this.name  = name;
            console.log(`${this.name} desde Avenger`)
        }
        protected bio() {
            return `nuestro personaje se llaama : ${this.name}`;
        }

        get fullName() {
            return `${this.name}`;
        }

        set fullName(name:string) {
            this.name = name;
        }
    }
    const ironMan = new Avenger('ironman');
    ironMan.fullNAme = 'Benjamín';
    console.log(ironMan.fullName); //return  Benjamín


##Clases Abstractas

Crear otras clases o que estén extendidas de ellas y poder acceder a sus propiedades sin tener que recurrir al super() constructor.



##Constructores privados
Cada vez se usa menos pero podemos usar el constructor privado para controlar la forma en la que se ejecutan nuestras instancias 'Patrón Singleton';

#Interfaces
¿Qué veremos en esta sección?


Esta sección esta dedicada a crear interfaces, las cuales nos permitirán crear reglas o planos de como se deben de construir clases, métodos u objetos.

Puntualmente aprenderemos:

¿Por qué es necesario una interfaz?
¿Cómo creamos una interfaz básica?
Crear propiedades opcionales
Crear métodos
Asignar interfaces a las clases
Al final, tendremos un examen práctico y teórico sobre las interfaces.

##Interface básica
[InterfaceVs.Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)




