
//objeto del formulario
let formulario = {
    Nombre: 'Ingrese el Nombre',
    Correo: 'Ingrese el correo',
    Comentario: 'Ingrese el comentario',
    Estado_Civil: '',
    Conyuge: 'Casado',
}
  

// viene de un input que introdigo el usuario
let Nombre = 'Mariano'
let Correo = null
const Comentario = 'Gracias por el servicio'
let Estado_Civil = 'C'

/// en este caso en el formulario estamos llamando a los valores de formulario
// en donde esta nombre, correo y comentario el input estaria en el html pero el formulario estaria
// por fuera por lo que se conectaria llamandolo de esta manera
// si tiene != seria diferente y no igual

/// digamos que podriamos decir que si es soltero declaramos posteriormente en if que 
    /// conyuge seria 0. Seria lo mismo que poner formulario.conyuge = vacio


if (Estado_Civil == 'S'){
        formulario = {...formulario, Conyuge: ''}
}
    
if (Nombre !=''){
    formulario = {...formulario, Nombre}
}
if (Correo =''){
    formulario = {...formulario, Correo}
}
if (Comentario !=''){
    formulario = {...formulario, Comentario}
}


//formulario = {...formulario, Nombre, Correo, Comentario}

formulario //?