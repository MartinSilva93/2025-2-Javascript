//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja

const { ask } = require('../helpers/input');

function analizarCalificaciones(calificacion) {
  let total = 0;
  let alumnos = calificacion.length;
  let aprobados = 0;
  let reprobados = 0;

  for (let i = 0; i < calificacion.length; i++) {
    total = total + calificacion[i];
     if(calificacion[i]>=70){aprobados++}
     if(calificacion[i]<70){reprobados++}
  }
 
  const promedio = total / alumnos;

  return {promedio, alumnos, aprobados, reprobados}
}

async function main() {

const calificacion=[59, 99, 48, 56, 43, 95, 43, 58, 76, 76, 69, 56];

const resultado = analizarCalificaciones(calificacion);


console.log(`La cantidad de alumnos es de = ${resultado.alumnos}`)
console.log(`Promedio = ${resultado.promedio}`)
console.log(`Aprobados = ${resultado.aprobados}`)
console.log(`Reprobados = ${resultado.reprobados}`)
}

main();