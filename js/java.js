//leyendo html desde javascript.



const h1 = document.querySelector('h1')
const p = document.querySelectorAll('p') //se;eccionar todos los parrafos. All
const primerParrafo = document.querySelector('.primer-parrafo')
const cssBasico = document.querySelector('#css-basico')
const input = document.querySelector('input')

console.log(h1);

console.log({
    h1,
    primerParrafo,
    cssBasico,
    p,
    input 
});


h1.innerHTML= 'PRACTICO JS HTML'


console.log(h1.getAttribute('Pantalla'))
console.log('-----');


