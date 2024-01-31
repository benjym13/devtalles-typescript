(()=> {
    /* COMPLEX INTERFACE */
    interface Client {
        name:string;
        age:number;
        address: Address;
        getFullAge(age:number):string
    }

    interface Address {
        zip: string;
        city: string;
        country:string;
    }

    const clientOne:Client = {
        name: 'Benjamín',
        age: 30,
        address: {
            zip: '28939',
            city: 'Arroyomolinos',
            country: 'Spain'
        },
        getFullAge(age:number)  {
            return `tienes ${age} años`
        }
    }
    console.log(clientOne.getFullAge(30))
    /* COMPLEX INTERFACE */
})()