// para los arrays de objeto se usan corchetes. En los arrays no se usan atributos para identificarlos
// los arrays se conforman en familias de una mismo tema

// mientras este llamandose directemante a los atributos seria string pero el otro que no tiene los puntos
// se estaria llamando como objeto

// si llamamos el objeto y le agregamos join entonces estariamos llamando solo a los componentes
// si lo llamamos en la consola. por ejemplo asi frutas.join() y si le ponemos espacio
// seria asi frutas.join(' ') en donde se pondria un espacio entre ellos.

// Tmb se puede usar un nombre y convertirlo en array si hay espacio entre appelido y nombre poniendole
// un split al final por eJemplo
// Mariano Yanez Alvarado. split (' ').

// Despues vamos con los arrays tipo mixto
// [100, true, "FrontEnd, {}"] si lo ponemos en el console podemos ver.
// [100, true, "FrontEnd", {}].length lo usamos para ver el numero de los caracteres

//let frutas = ['uva', 'pera', 'manzana']

//let verduras = ['melon', 'sandia']

//let frutas_y_verduras = [...frutas, verduras]

//console.log(frutas_y_verduras) //?

//tmb se pued array de numeros.
const numeros = [1, 2, 45   , 4, 5, 6, 7, 8, 9, 10]
numeros.length //?
// o bien podemos hacer una constante en donde pongamos
// una constante y la llamamos despues en numeros.lenght. Por ejemplo.
// const limite = numeros.length // y despues ponemos posicion < limite

// con for inicializamos una variable. Con posicion le decimos hasta donde va llegar
// s ila funcion se cumple vamos hacer posicion mas 1 por lo cual se puede escribir asi
// posicion++ o puede ser posicion=posicion+1 o bien posicion+=1 o tmb puede ser posicion-- para 
// restar la posicion - 1
// si cambiamos el let a var entonces seria para poder poner un console log al final por fuera del
// array en donde se menciona que la ultima posicion queda como el valor que se agreagr fuera de la 
//posicion establecida. Se usa var porque esa pued ser flexible para otros valores que se ingresen y arrojar
//el mensaje que se pide.
//for(var posicion = 1; posicion < numeros.length; posicion++){
//console.log(`Posicion: ${posicion}. Valor actual: ${numeros[posicion]}`);

//}

//console.log('Ultimo valor de posicion', posicion, numeros[posicion]);

// tmb podemos usar for each
// por ejemplo. El primer elemento seria el nombre que le da a cada cosa o person dentro de los
// corchetes, y posicion seria el lugar de la variable
const personas = ['Jorge', 'Eduardo', 'Francisco', 'H397364']
// en este caso posicion es la variable. El tercero seria un array, el primer valor un valor y el 
// segund seria la posicion.
personas.forEach((persona, posicion)=>{
    //console.log('el array', elarray)
    let indice = personas.length - 1 - posicion
    let item = personas[indice]
    // si quieresmo que salga un numero hacia abajo podriamos hacer esto
    //personas.lenght - posicion
console.log(`${item} tiene el numero ${posicion}. ${posicion} ${personas.lenght - 1}`);
})

//tmb se podria hacer otro tipo de filtro donde
let resultados = personas.filter((persona)=>{
return persona.startsWith('H')

})
//[]. or "". nos da todos lo metodos que podemos usar.
// podemos tmb usar el metodo de delete para borrar los resultados por ejemplo

delete personas[2]


console.log('Empieza con A', resultados)

// para excel se podria usarse con basic la formula seria asi
//fetch('datos.csv').then((r)=>r.text()).then((r)=>{console.log(r)})
//lo conviertes a numeros y despues los separas con split poniendo un espacio o comas en los parentesis
// "['mariano', 'jorge']".split(',') . Se podria usar desde el navegador el index o SQL para hacer consultas
