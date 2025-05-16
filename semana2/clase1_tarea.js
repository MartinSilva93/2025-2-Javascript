// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

async function main() {
  let limite = Number(await ask("Hasta que numero quieres contar"));
  let i = 2;

  while (i <= limite) {
    console.log(i);
    i = i+2; // Es igual a: (i = i + 1);
  }
  i = limite

}

main();
