const msg:string = 'Hola Mundo';

console.log(msg);

const hero = {
    name : 'ironman',
    age: 22
}

console.log(hero.age + 1);

(() => {
    const avengers = {
        ironMan: 'Rober Dawney Jr',
        thor: 'Hemsworth',
        activo: true,
        poder:2000
    }

    const  { ironMan, poder } = avengers;

    console.log(ironMan);

    const avengersArr: [string, string, number]= ['Hulk', 'Rick&Morty', 123];
    const [ , iron, power ] = avengersArr;
    console.log(iron, power)
})()