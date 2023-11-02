//console.log("hola");

//function contarCaracteres();
//const numeroCaracteres = 
//contarCaracteres("Hola Mundo");

/*function miFuncion(CadenaDeTexto = ""){

    //lenght se usa al final de la constaten para contar los caracteres de una funcion.
    // En este caso se agrega la cadena de texto y despues se le agrga la funcion que da el total.

    // por otro lado si mandamos a llamar en la consola sin valor nos va arrojar un erro,
    //sin embargo si le agregarmos un valor de nada como entre comillas por ejemplo asi ""
    // se va quedar en cero si no agregar ninguna informacion ya que pusimos ese valor en los parametros
    // para lo que se agrega a nada poner un valor cero lo cual seria cero. Si le agreamos la palabra vacio por 
    //ejemplo va tomar siempre 5 caracteres al menos que le pongamos algo diferente.
    const longitud = CadenaDeTexto.length//?
    if (CadenaDeTexto.length == 0){
        console.warn("No ingresaste ninguna cadena.")
    } else{
        console.log(`La cadena "${CadenaDeTexto}" tiene ${longitud} caracteres.`)
    }
//console.log(`La cadena "${CadenaDeTexto}" tiene ${longitud} caracteres.`)//?

}*/

//Para hacer una function flecha seria muy parecia solo hariamos esto, agregamos const,
//ponemos igual despues del nombre de la variable y ponemos los parametro en parentesis
//para posteriormente poner => y despues abrir con este { para poner todo lo demas igual que antes}

const miFuncion = (CadenaDeTexto = "") => {
const longitud = CadenaDeTexto.length//?
if (CadenaDeTexto.length == 0){
    console.warn("No ingresaste ninguna cadena.")
} else{
    console.log(`La cadena "${CadenaDeTexto}" tiene ${longitud} caracteres.`)
}
}

const pelicula = (NombrePelicula) => {
    console.log (`El nombre de la pelicula es: ${NombrePelicula}`)
}

// O bien tmb podriamos usar esta funcion const pelicula = (NombrePelicula) => `El nombre de la pelicula es ${NombrePelicula}`

// o bien tmb podemos usar la funcion que es muy parecida lo cual quedaria asi

function pelicula2(NombrePelicula2){
    return `El nombre de la pelicula es: ${NombrePelicula2}`
}

function sumame(a,b){
    const suma = a + b
    console.log(`La suma de a + b es ${suma}`)
}

// o tmb podria usarrse la siguiente funcion LO CUAL se llamaria call back

const sumames = (a,b) => a + b 

// se convirte en funcion call back la siguiente por que son 2 call backs si los copiamos y pegamos 
//arroja el resultado total.
sumames(sumames(2,4), sumames(4,4))

//Expresion regular.

const validarEmail = () => {
// Obtener un valor desde el HTML. Cualquiera de estas 3 opciones funciona igual
    document.querySelector("#campoTexto")
    document.getElementById("campoTexto")
    campoTexto.value


let inputEmail = document.getElementById("campoTexto").value
console.log('email', inputEmail);

// los numeros y las letras abajo muestran lo que se debe de usar como parametro
// el punto de los corcheste seria para que sume cualquier cnatidad pero que seria el new?
// 
const REGEXP = new RegExp(/[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9]+)*\.[a-z]{2,15}/i);
return REGEXP.test(inputEmail) ? "Correcto" : "Incorrecto"
}


