//arrays y objetos. 2



function conseguirTipoSuscripcion (suscripcion){
    if (suscripcion=='Free') {
        console.log('Tomaras los cursos gratis.');
        return
    }if (suscripcion=='Basic') {
        console.log('Basic');
        return
    }if (suscripcion=='Expert') {
        console.log('Expert')
        return
    }if (suscripcion == 'Expert plus') {
        console.log('Expert plus');
        return
    }else {
        console.warn('Not exist that bitch');
    }
}

conseguirTipoSuscripcion('jj')

