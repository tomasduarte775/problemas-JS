/*Escribe un programa java que declare una variable C de tipo entero y asígnale un valor.
 A continuación muestra un mensaje indicando si el valor de C es positivo o negativo,
  si es par o impar, si es múltiplo de 5, si es múltiplo de 10 y si es mayor o menor que 100.
   Utiliza el operador condicional ( ? : ) dentro del println para resolverlo.
Si por ejemplo C = 55 la salida será */

//damos valor a c 
C = prompt("ingrese un numero")

//declaramos a c como entero
C =  parseInt(C);

// declaramos si el numero es positivo 
if (C >= 0){
    document.write("positivo" + "</br>"); 
}else{
    document.write("negativo" + "</br>"); 
}

// declaramos si el numero es par 

if (C % 2 == 0) {
    document.write("par" + "</br>");
}else{
    document.write("impar" + "</br>");
}

//declaramos si es multiplo de 5 
if (C % 5 == 0) {
    document.write("multiplo de 5 " + "</br>");
}else{
    document.write("no es multiplo de 5 " + "</br>");
}
//declaramos si es multiplo de 10

if (C % 10 == 0) {
    document.write("multiplo de 10 " + "</br>");
}else{
    document.write("no es multiplo de 10" + "</br>");
}

// es mayor o menor a 100

if (C > 100) {
    document.write("es mayor a 100" + "</br>");
}else{
    document.write("es menor a 100" + "</br>");
}



