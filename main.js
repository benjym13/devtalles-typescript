"use strict";
(() => {
    console.log('/* ABSTRACTS */');
    /* crear otras claseso que estén extendidas de ellas y por acceder a sus propiedades si tener que recurrir al super() constructor */
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class XMen extends Mutante {
        salvarMundo() {
            console.log('mundo salvado');
        }
    }
    const print = (character) => {
        console.log(character.name);
    };
    const Lobezno = new XMen('Wolverine', 'Logan');
    Lobezno.salvarMundo();
    print(Lobezno);
    console.log('/* ABSTRACTS */');
})();
(() => {
    class Avenger {
        constructor(name, team) {
            this.name = name;
            this.team = team;
        }
    }
    Avenger.age = 35;
    const antMan = new Avenger('antMan', 'captain');
    console.log(antMan, Avenger.age);
})();
(() => {
    class Avenger {
        constructor(name) {
            this.name = name;
            console.log(`${this.name} desde Avenger`);
        }
        bio() {
            return `nuestro personaje se llaama : ${this.name}`;
        }
        get fullName() {
            return `${this.name}`;
        }
        set fullName(name) {
            this.name = name;
        }
    }
    const ironMan = new Avenger('ironman');
    console.log(ironMan.fullName);
    class Real extends Avenger {
        constructor(name, realName) {
            super(name);
            this.realName = realName;
        }
        getbio() {
            console.log('llamamos a bio de avenger desde xmen', super.bio());
        }
    }
    const Wolverine = new Real('Ironman', 'Tony Stark');
    Wolverine.getbio();
    ironMan.fullName = 'Benjamín';
})();
// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona {
}
(() => {
    const clientOne = {
        name: 'Benjamín',
        age: 30,
        address: {
            zip: '28939',
            city: 'Arroyomolinos',
            country: 'Spain'
        },
        getFullAge(age) {
            return `tienes ${age} años`;
        }
    };
    console.log(clientOne.getFullAge(30));
    /* COMPLEX INTERFACE */
})();
(() => {
    /* usamos implements para usar una interface sobre una clase */
    class Mutant {
        constructor(name, mutantName) {
            this.name = name;
            this.mutantName = mutantName;
            this.name = name;
            this.mutantName = mutantName;
        }
    }
    const Lobezno = new Mutant('Logan', 'Wolverine');
    console.log(Lobezno);
})();
