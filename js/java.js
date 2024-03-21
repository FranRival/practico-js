//ciclos
//la forma de ejecutar un bloque de codigo hasta que se cumple cierta condicion 

//while, for, do while.

//dowhile - while
//while: hace la validacion antes de ejecutar la pimera vez el bloque de codigo.
//dowhile: la primera vez no pregunta, ejecuta, y luego hace la ejecucion. 
//for: automaticamente, nos obliga a definir al principio y final de cada ejecucion de codigo. 
//obliga a ainicializar una variable, definamos algun momento donde debe terminar, y una variable que daba cambiar. 

for (let index = 0; index < 5; index++) {
    console.log("EL valor de i es: " + index)
}

//ciclo infnito - for
//la condicion para terminar de ejecutar el ciclo, nunca se cumple. y termina danando al navegador. 

console.log('------------------');

let index = 0
while (index < 5) {
     console.log("EL valor de i es: " + index)
     index++ //asi evitamos el ciclo infinito.
}

console.log('------------------');

let index1 = 10
while (index1 >= 2) {
     console.log("EL valor de index1 es: " + index1)
     index1-- //asi evitamos el ciclo infinito.
}

console.log('------------------');


let respuesta
while (respuesta !=4) {
    let pregunta = prompt('CUanto es 2 + 2?')
    respuesta = pregunta
} //ciclo infinto