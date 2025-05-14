// Ejercicio: Pedir al usuario su fecha de nacimiento
//
// Instrucciones:
// 1. Mostrar en pantalla los días equivalentes a la edad actual del usuario
// 2. Mostrar en pantalla los meses equivalentes a la edad actual del usuario
// 3. Mostrar los años que tiene el usuario.
const { ask } = require('../helpers/input');



async function main() {
const edad = Number(await ask ('Ingresa la tu edad'));

const edadDias = edad * 365
console.log('Tu edad en dias es', edadDias,  'dias');

const edadMeses = edad * 12
console.log('Tu edad en meses es', edadMeses,  'meses');

console.log('Tu edad es de', edad, 'años');

  }

main();
