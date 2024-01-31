(()=> {
    interface Human {
        name:string;
    }

    interface Mutant {
        mutantName:string;
    }
    /* usamos implements para usar una interface sobre una clase */
    class Mutant implements Human, Mutant {
    
        constructor(
            public name:string,
            public mutantName:string
        ) {}
    }
    const Lobezno = new Mutant('Logan', 'Wolverine');
    console.log(Lobezno);
})()