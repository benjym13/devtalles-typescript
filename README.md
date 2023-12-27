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