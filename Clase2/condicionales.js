//condicioanles



//condicional.js - Ejercicio




//var numero1 = parseInt(prompt('Introduce el primer numero',0))
//var numero2 = parseInt(prompt('Introduce el segundo numero',0))

//let numero1=1
//let numero2=2
//numero1 = 2
//numero2 = 3
//console.log(numero1);
//console.log(numero2);

/*let esLunes = false

//if (esLunes == true){

  // console.log('Hoy es lunes.');

//}

const esVerdad = (variable) => (variable === true)

let esMartes = false;
esVerdad(esMartes) //?


if(esMartes){
console.log('Hoy es martes');

}
else{
  console.log('No es martes');


}

let esJueves = true

if(esLunes){
console.log('Lunes');

} else if(esMartes){ 
  console.log('Aqui si funciona');
}
else if(esJueves){
console.log('Ahora es Jueves');

}
//if(numero1() == 1 && numero2() == 2 ){
  //  console.log('Son numeros iguales');}
//else{
//son diferentes
  //  console.log('No son iguales.');}


//3==3 nos va dar true porque comprara el valor
//3==='3' nos va dar false porque esta comparando el tipo de dato ya que cuando esta en comillas es string y el otro si seria numero.
//!= es cuando no son iguales por ejemplo 3 != 1 seria verdadero ya que son diferentes.

//por ejemplo
//let dia = 16
//dia <= 16 //? quedaria como true ya que es igual o mayor a 28

let fecha = new Date('10-21-2023');
fecha.getDate() // ?
fecha.getMonth() // ?

fecha.getDay() // ? 

if(fecha.getDate() == 21 && fecha.getMonth() == 9 ){
    console.log('Hoy es Sabado 21');
}
else{
//Otra fecha
    console.log('No es hoy.');
}

console.log('Aqui continua');//?
console.log('Aqui termina');

///otro ejemplo

//'Jueves' && 28 //?


/*if{
numero1=+numero2, alert("LOS NUMEROS SON IGUALES");

}

else{
numero1>numero2

alert("El numero mayor es"+ numero1)
alert("El numero menor es"+ numero2)

}

else{

alert("Introduce numeros correctos");
}
*/

//Operando AND

//let esNavidad = fecha.getMonth() == 11 && fecha.getDate() == 25
//esNavidad //? seria false por que month no cumple con la condicion.

// Operando OR -- seria con una que se cumpla para que sea verdadero, si nada se cumple es false o null si todos fueron nulls

// si los 2 son trues se va a true, sino uno es true y el otro false se va a false
// si los 2 son false se va a false.

//let mascota = gato //?
//mascota //?

//operando nullish (considera undefined null)

// cuando todos son false y el utimo valor es null or undefined entonces toma el valor de sin mascota q fue el asignado para mascota cuando es null (undefined or null)

//usando switch
/*let hora = 12
const HORAS_TARDE = [
  12, 13, 14, 15, 16, 17, 18, 19
]


HORAS_TARDE.includes(13)//?

if(hora >= 12 && hora <= 20){
  console.log('Es de tarde')
}

HORAS_TARDE.includes(13)//?

if(HORAS_TARDE.includes(15)){
  console.log('Es de tarde')
}

switch(hora){
case 10:
  console.log('Buenos dias');
  break;
  case 12: console.log('Buenas tardes');
  break;
  case 20: console.log('Buenas noches');
  break;
  default: console.log('Hola.');

}*/

//console.log('Ya salimos del switch')
