function Saludo(nombre) {
    const  saludo_template = "Buenas Noches " + nombre
    //console.log ("Buenas noches")
    // para ver las propiedas de un objeto con console log this
    console.log(this);//?
    //Otra forma es que si mandamos a llamar la constaten podriamos desde la funcion
    // por ejemplo asi podriamos ver this si lo agregamos en la funcion flecha
    // paara que imprimia asi se pondria el return con el nombre de la funcion, despues
    //se pondria en la funcion flecha algun console log si asi lo quieres y tmb se podria el
    // return this para que primero llame la funcion actual y posteriormente la funcion de flecha enseguida
    ///
    return mensajeDeBuenasNoches ()//? 
    //return saludo_template
}


//Funciones de tipo flecha. Estas funciones son constatente, se pone nombre, despues
//el parametro y se agregar los txto adicionales para despues agregar el parametro nueveamente
//despues se llama la constante y se agrega el valor con comillas.

const mensajeDeSaludo = (mensaje) => "Hola " + mensaje
const mensajeDeBuenasNoches = (mensaje) => {
    console.log('this de arrow function');//?
    const template = `Hola ${mensaje} Buenas noches`
    return this
}

let nombre = "Mariano"
Saludo(nombre) //?

mensajeDeSaludo("Grupo de JS") //? 

mensajeDeBuenasNoches("Grupo de JS")//?



