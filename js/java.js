//condicionales
//son la forma en que se ejecute un bloque de codigo. depende de una validacion.
//la diferencia: 

//if, else, else if, switch.
//arrays. 

//switch: evaluar caso. y por cases, cumpen con esa condicion. 


const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}



if (tipoDeSuscripcion=='Free') {
    console.log('Puedes tomar solo los cursos gratis');
    return
}else {
    //esto ya no se ejecutara. 
    //ejecutar de manera infinita, debe ser una funcion. 
}



//validando la misma condicion. 
//el condicional if: permite validaciones distintas en cada validacion o condiconal.
//switch: todos los cases se comparan con la misma variable o condicone que definimos en el switch.