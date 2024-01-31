
/* 
function genericFunction(argument:any) {
    return argument;
}
 */
/* 
console.log(genericFunction(3.1416).toFixed(2));
console.log(genericFunction('Hola mundo').toFixed(2)); */

function genericFunction<T>(argument:T):T {
    return argument;
}

console.log(genericFunction(3.1416).toFixed(2))
console.log(genericFunction('hola mundo').toUpperCase())