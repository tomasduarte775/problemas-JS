/*Escribe un programa java que declare una variable A de tipo entero y asígnale un valor.
 A continuación muestra un mensaje indicando si A es par o impar. 
 Utiliza el operador condicional ( ? : ) dentro del println para resolverlo.
Si por ejemplo A = 14 la salida será */


// preguntamos el valor de A 
A = prompt("ingrese un numero");
// declaro A como entero 
A = parseInt(A); 

if (A % 2 == 0 ){
    alert(A + "es un numero par"); // o podemos utilizar documentWrite para imprimir en pantalla 
}else{
    alert(" es un numero impar");
}
