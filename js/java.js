//interaccion con el usuario.



const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo')
const input2 = document.querySelector('#calculo1')
const btn = document.querySelector('btncalcular')
const resultado = document.querySelector('#resultado')


//escuchar elementos desde html a js: onclick - onchance


function btnOnClick (){
    console.log(input1.value + input2.value);//concatenacion. no suma. 
    console.log(Number(input1.value) + parseInt(input2.value))//suma

    const result = input1.value + input2.value
    resultado.innerHTML = 'Resultado: ' + result
}