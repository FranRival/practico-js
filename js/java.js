//adeventlistener



const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo')
const input2 = document.querySelector('#calculo1')
const btn = document.querySelector('#btncalcular')
const resultado = document.querySelector('#resultado')
const formulario = document.querySelector('#formulario')



formulario.addEventListener('submit', sumarInputValues)


function sumarInputValues (event){
    console.log({event})
    event.preventDefault()//ya no se recargo la pagina.
    //defaultPrevent: que no ejecute lo que ejecutaria por defecto.



    console.log(input1.value + input2.value);//concatenacion. no suma. 
    console.log(Number(input1.value) + parseInt(input2.value))//suma

    const result = input1.value + input2.value
    resultado.innerHTML = 'Resultado: ' + result
}

//trabajr con formularios no es escuchar eventos con el addeventlistener. 