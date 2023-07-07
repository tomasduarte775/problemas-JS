/*Escribe un programa java que declare una variable B de tipo entero y asígnale un valor.
 A continuación muestra un mensaje indicando si el valor de B es positivo o negativo. 
 Consideraremos el 0 como positivo. Utiliza el operador condicional ( ? : ) dentro del println para resolverlo.
Si por ejemplo B = 1 la salida será */

B = prompt("ingrese un numero");

B = parseInt(B);

if (B >= 0){
    alert(B + "es un numero positivo"); 
}else{
    alert(B + "es un numero negativo");
}

