/*Leer una serie de cincuenta números enteros. Informar cuantos son mayores que 100 */ 

let i = 1; 

while(i <= 50){
    let n = parseInt(prompt("ingrese un numero"));
    if (n > 100){
        document.write(n + "es maryor a 100" + "</br>");
    }else{
        document.write(n + "</br>");
    }
    i++;
}