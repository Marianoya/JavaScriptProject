//var modelo = {}
//const objeto = {}
//let otroObjeto = {}

//modelo.nombre = "algo"
//modelo //?

//Objeto Vacio
//let objetoVacio = {}

// puede ser tmb declarar esto para llamar a ataques del objeto jugador

let ataques = {
    golpe: 1,
    patada: 2
}

let habilidades = {
patadaVoladora: '',
especial: 8
}

// los 3 puntos se usan para asignar los componenetes o valores de un objeto.
//ataques = {...ataques, habilidades}
// tmb se podria poner todo a la vez
// entonces al llamar a ataques esta creando otro objeto con lo que le estamos llamando que 
// en este caso estamos usando el let para llamarlo.
// en caso de no usar los 2 puntos entonce estamos pidiendo que agregue el objeto directamente
//por lo que ya serian 2 objetos el de ataques pero dentro de ataques estaria el creado
// se puede usar en formularios.
//digamos que si ponemos con ... podemos llamarlo directamten a la propeidad en caso contrario
//tendriamos que llamar al objeto y luego a la propiedad por ejemplo:

const todo = {...ataques, ...habilidades}
const separados = {ataques, habilidades}

todo.patadaVoladora //?
separados.habilidades.patadaVoladora//?

ataques = {...ataques, ...habilidades}

ataques//?
// 

// se puede agregar mas cualidads separados por comas
const jugador = {
    nombre: 'Ryu', //?
    poder: 10,
    vida: 99,
    //seria boleano
    jugando: true,
    // se puede llamar a ataques de otro objeto poniendo ataques = ataques o bien solo ataques con coma y
    // y el objeto lo va entendeer que esta llamando
    debilidad: null,
    ataques,
    saludar: ()=> 'Hola soy ' + jugador.nombre
}

//Asignar valores puede ser de las 2 maneras como los 2 ejemplos de abajo.
jugador.nombre = 'Ryu'
jugador['nombre'] = 'Ryu'

jugador.ataques = ataques
jugador['nombre'] = ataques

// si imprimimos el objeto nos va aparece el valor de Ryu que se creo anteriormente.
// se manda llamar con jugador que es el objeto y despues las propiedas.
jugador //?
jugador.saludar()//?

jugador // ?