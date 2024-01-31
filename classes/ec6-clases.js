(()=>{

    // creamos una clase
    // añadimos la propiedad name y dentro del constructor la declaramos y la inicializamos
    class Avenger  {
        name;
        constructor(){
            this.name = 'Jaime';
        }
    }
    const Jaime = new Avenger; // return Avenger {name: 'Jaime'}
    // podemos hacer que ese name sea dinámico pasandole un parámetro al constructor y posteriormente un arg

    class Avenger  {
        name;
        constructor(name){
            this.name = name;
        }
    }

    const Hulk = new Avenger('Hulk');
    
    class NaturalAvenger  extends Avenger {
        isNAtural;
        constructor(name, isNAtural) {
            super(name)
            this.isNAtural = isNAtural;
        }
    }
    const ironMan = new NaturalAvenger('ironMan', true);
    console.log(Hulk, ironMan);
})()