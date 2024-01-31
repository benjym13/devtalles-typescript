(()=>{
    class Avenger {
        constructor(public name:string){
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
    console.log(ironMan.fullName);
    
    class Real  extends Avenger {
        public realName :string;
        constructor(name:string, realName:string) {
            super(name)
            this.realName = realName;
        }
        getbio(){
            console.log('llamamos a bio de avenger desde xmen' ,super.bio())
        }
    }
    
    const Wolverine = new Real('Ironman', 'Tony Stark');
    Wolverine.getbio();
    ironMan.fullName = 'Benjamín';
})()