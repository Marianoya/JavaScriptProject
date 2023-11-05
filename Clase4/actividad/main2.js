
const juego = {

    opciones: {
        0: '🖖',
        1: '✋',
        2: '🤜'
    },
    nombreJugadores: {
        jugador1: 'jugador 1',
        jugador2: 'computadora'
    },
scores: {
    puntosJ1: 0,
    puntosJ2: 0
}
}

const pedirNuevoNombre = () => prompt("Introduce el nombre del usuario")

const cambiarNombre = () => {
    let nombre = pedirNuevoNombre()
    //para solo considerar strings - La i signfica mayuscual y minisculas..
    // a-z los valores, \w o tmb este (/([a-z])\w+/i)
    // este enunciado seria para que REGEXP tenga un nuevo valor con las condiciones establecidas.
    let REGEXP = new RegExp(/[a-zA-Z]/)

    // si se ingresa un string se asing al jugador 1. Digamos que el REGEXP test nombre seria como un f
    if(REGEXP.test(nombre)){
       // console.warn('Se cambio el nombre por: ', nombre)
        juego.nombreJugadores.jugador1 = nombre;
        //console.log(`Bienvenido ${nombre}!`);
        // o bien para llamar al HTML lo hariamos asi
         document.getElementById('nombre_jugador').innerText = `Bienvenido ${nombre}!`
    } else{

        // y anadir esto tmb
     document.getElementById('nombre_jugador').innerText = `Mejor te llamare ${juego.nombreJugadores.jugador1}!`

         // si no es un string se manda a 
   

    //juego.nombreJugadores.jugador1 = 'jugador 1';
    //console.error('el nombre no es valido.')
    // agregamos este nombre para crear bucle y que continue haciendo la funcion
    // repetidamente ya que estamos llamando la funcion incial nuevamente.
    //cambiarNombre()
    }

 }  

 // metodo aleatorio
 const aleatorio = () => Math.floor(Math.random() * 100 / 10) % 3

 // devuelve un emoji segun el numero que salga en aleatorio()
 const imprimirMano = (opcion) => juego.opciones[opcion]

 ///
 const imprimirManoAleatoria = () => imprimirMano(aleatorio())

 const imprimirResultado = () => {
    // O BIEN TMB PODEMOS USAR
    const {puntosJ1, puntosJ2} = juego.scores
    //
    
    //if(juego.scores.puntosJ1 > juego.scores.puntosJ2){
    if(puntosJ1 > puntosJ2){
        return `Fin del juego, gana J1: ${juego.nombreJugadores.jugador1} `
    }else if(puntosJ1, puntosJ2) {

        return `Fin del juego, gana J2: ${juego.nombreJugadores.jugador2}`
    }else{
        return `Fin del juego. Empate`
    }
 }

 const ganador = (jugador1, jugador2) => {
    console.log('Opciones: ', jugador1, jugador2);

    if(jugador1 == jugador2){
        console.log('Empate');
    } else if(jugador1 ==0 && jugador2 ==1){
        juego.scores.puntosJ1 += 1;
        console.log('Gana J1. Tijera vs papel')
    } else if( jugador2 == 0 && jugador1 ==1){
    juego.scores.puntosJ2 += 1;
    console.log('Gana J2. Tijera vs papel')
 } else if( jugador1 == 1 && jugador2 == 2 ){
    juego.scores.puntosJ1 += 1;
    console.log('Gana J1. Tijera vs papel')
 } else if( jugador2 == 1 && jugador1 == 2 ){
    juego.scores.puntosJ2 += 1;
    console.log('Gana J2. Tijera vs papel')
 } else if( jugador1 == 2 && jugador2 == 0 ){
    juego.scores.puntosJ1 += 1;
    console.log('Gana J1. Tijera vs papel')
 }else if( jugador2 == 2 && jugador1 == 0 ){
    juego.scores.puntosJ2 += 1;
    console.log('Gana J2. Tijera vs papel')
}
 }

 const jugar = () => {
    let partidas = 3;

    cambiarNombre()

    while (partidas > 0){
        console.log('Elige una opcion', juego.opciones);
        let opcionJugador1 = prompt("Elige una opcion 1-3 \n") 
        let opcionJugador2 = aleatorio()
        ganador(opcionJugador1, opcionJugador2)
        console.log('Jugador1: ' + imprimirMano(opcionJugador1), ' .Computadora: ', imprimirMano(opcionJugador2));

        // vamos descontando partidas
        partidas--


    }

    imprimirResultado()
 }