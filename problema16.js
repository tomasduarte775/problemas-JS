/*Leer una serie de números enteros. que contenga como máximo veinte elementos, en caso de
ingresar un valor negativo o la cantidad de números ingresados supere los veinte, detener
el proceso e informar mediante un mensaje cuántos son mayores que 100. */


let i = 1; 

while(i <= 5){
    i++;
    let n = parseInt(prompt("ingrese un numero"));
    if (n > 100){
        document.write(n + "es maryor a 100" + "</br>");
    }else if(n < 100){
        document.write(n + "</br>");
    }else{
        break;
    }
}