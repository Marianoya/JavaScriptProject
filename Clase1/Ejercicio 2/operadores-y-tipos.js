
console.clear()

let numero1 = 7;
let numero2 = 15;

// o let numero1 = 7, let numero2 = 15

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;

alert( 

`El resultado de la suma es: ${suma} \n
El resultado de la resta es: ${resta} \n
El resultado de la multiplicacion es: ${multiplicacion} \n
El resultado de la division es: ${division}\n`
)

console.log("El resultado de la suma es: ", suma)
console.log("El resultado de la resta es: ", resta)
console.log("El resultado de la multiplicaion es: ", multiplicacion)
console.log("El resultado de la division es: ", division)

const RESULTADO = "El resultado de la"

console.log(RESULTADO, "suma es:", suma)
console.log(RESULTADO, "resta es:", resta)

let numero_entero = 24;
let cadena_texto = "Hola 'que' tal";
let verdadero_o_falso= true;
let numero_falso = "333";

console.log(typeof(numero_entero + parseInt(numero_falso)))

console.log(numero_entero + parseInt(numero_falso));

//Imprimir los tipos de datos que declaramos.
console.group("Tipo de datos")
console.log(typeof numero_entero, numero_entero)
console.log(typeof cadena_texto, cadena_texto)
console.log(typeof verdadero_o_falso, verdadero_o_falso)
console.log(typeof numero_falso, numero_falso)
console.groupEnd()
