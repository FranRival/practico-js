//arrays y objetos. 


//estructura de datos con javasscript.
//arrays: lista de elementos.
//lista: conjunto de elementos.

const arrays = []

const obj = {//el obejto ahora es una lista de elementos con nombre clave.
    nombre: '',
    edad: 3,
}

//arrays: elementos lo mismo que en todos los demas.
//objeto: cuando los nombres de cada elemento son importantes para el algoritmo.

function imprimirPrimerElementoArray (arr){
    console.log(arr[0])
}

imprimirPrimerElementoArray(['Ana', 'Celaya']) 

function imprimierElementoPorElemento (arr){
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index])
    }
}

console.log('-----------------');
imprimierElementoPorElemento(['Ana', 'Celaya'])