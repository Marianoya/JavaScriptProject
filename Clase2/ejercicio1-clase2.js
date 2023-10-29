function comprobarFormulario(){
    //console.log('comprobando numeros');
    //console.log('Numero1 vale: ', numero1.value);
    let num1 = validarNumero(extraerNumeros(numero1.value));
    let num2 = validarNumero(extraerNumeros(numero2.value));
    let numero_mayor, numero_menor, son_iguales;
    numero_mayor = numero_menor = son_iguales = false  



    // se puede tmb declara sin poner undefined or null, o bien todo junto por ejemplo asi
    // let numero_mayor, numero_menor, son_iguales;
    if(num1 > num2){

        numero_mayor = num1
        numero_menor = num2


    } else if(num2 > num1) {
        numero_menor = num1
        numero_mayor = num2
    } else{
        //numero_mayor = num1
        //numero_menor = "-"
        son_iguales = true
    }

    resultado.innerHTML = `
    <p>Son iguales: ${son_iguales}<p>
    <p>Numero Mayor: ${numero_mayor}<p>    
    <p>Numero Menor: ${numero_menor}<p>

    `

}

function validarNumero(numero){
    console.log('Numero ingresado', numero, '. isNaN', isNaN(numero), '.Numero convertido: ', parseInt(numero));
    return isNaN(numero) ? 0 : parseInt(numero)

}

//Extraer numeros
function extraerNumeros(valor){
    let valorString = "" + (valor || "");
    return valorString.replace(/[a-z]/ig, '')
}

//pedir numeros por prompt y mostrar en consola
/*function validarNumeroMayoresA0 (){
let numA = 0 
let numB = 0
let suma = 0
let total_numeros = 0

do{
    
numA = prompt('Ingresa el primer numero')
if(numA <= 0){
    break

}
numB = prompt('Ingresa el segundo numero')
suma = numA + numB

// para sumar solo un valor se puede usar lo siguiente:
// suma = numA + suma o bien suma += numA 
total_numeros++ 
// tmb puede ser contador ++ y va ser la suma de 1 por 1.   


console.log('NumA', numA, 'NumB', numB);

} while (numA >= 0 && numB >= 0);

console.log('Numeros ingresados: ', total_numeros, 'Media: ', suma/total_numeros);

//while (numA> 0 && numB > 0 ){
//console.log('Ingresa un numero valido');
//}
}
*/
function validarNumeroMayoresA0() {
    let numero_ingresado = 0
    let suma = 0
    let total_numeros = 0

    do {
        numero_ingresado = parseInt(prompt("Ingresa un número mayor a cero."))
        console.log('Número ingresado:', numero_ingresado);
        if (numero_ingresado < 0) {
            break
        }
        total_numeros++ // Aumenta la cuenta de los ingresados
        suma += numero_ingresado

        
    } while (numero_ingresado >= 0);

    console.group("Ejemplo con while")
    console.log('suma', suma);
    console.log('total numeros', total_numeros);

     // Imprimir el resultado en el documento
     document.write('Números ingresados:', total_numeros, 'Media:', (suma / total_numeros))

     console.log('Números ingresados:', total_numeros, 'Media:', (suma / total_numeros));
     console.groupEnd()



}
