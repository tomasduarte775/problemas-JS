/*Realiza un programa que calcule la aceptación de una solicitud en base a los siguientes parámetros: edad, nota y sexo.
* Mínimo: Nota (5), edad (18), sexo M -> POSIBLE
* Mínimo: Nota (5), edad (18), sexo F -> ACEPTADA
* Otros casos -> NO ACEPTADA */

//datos del solicitante 
alert("ingrese sus datos") // aviso a la accion

let EDAD = prompt("ingrese la edad")
let NOTA = prompt("ingrese nota")
let SEXO = prompt("escriba su sexo 1-m o 2-f")

EDAD =parseInt(EDAD)
NOTA =parseInt(EDAD)
SEXO =parseInt(EDAD)


if (EDAD > 18 && NOTA > 5 && SEXO = 1 ){
    document.write("posible");
}else if (EDAD > 18 && NOTA >5 &&  SEXO = 2){
    document.write("aceptada");
}else{
    document.write("no aceptada");
}

