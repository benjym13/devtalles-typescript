(()=>{
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
    console.log(antMan, Avenger.age);
})()