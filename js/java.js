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


const h2 = document.querySelector('h2')
h2.setAttribute("class","dorado")


h2.classList.add('Fiuzha')//agregamos una nueva clase. 
h2.classList.remove('dorado')//quitar clase

input.value = 657

//crear desde 0


const imagen = document.createElement('img')
imagen.setAttribute('src', 'https://www.findelahistoria.com/web/wp-content/uploads/2018/02/garfield.jpg')
console.log(imagen);
img.innerHTML = '' //AQUI, ELIMINAMOS EL :aqui va una imagen.
img.append(imagen)//Aqui colocamos la imagen 