(()=>{
    console.log('/* ABSTRACTS */');

    /* crear otras claseso que estén extendidas de ellas y por acceder a sus propiedades si tener que recurrir al super() constructor */

    abstract class Mutante {
        constructor(
            public name:string,
            public realName:string
        ){}
    }

    class XMen extends Mutante {
        salvarMundo() {
            console.log('mundo salvado')
        }
    }
    const print = (character:Mutante) => {
        console.log(character.name)
    }
    const Lobezno =  new XMen('Wolverine', 'Logan');
    Lobezno.salvarMundo();
    print(Lobezno);

    console.log('/* ABSTRACTS */');
})()

