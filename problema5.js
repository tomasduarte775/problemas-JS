/*Programa java para calcular si la última cifra de dos números enteros es la misma. 

Para realizar esto el programa lee por teclado dos números enteros y debe obtener la última cifra de cada uno de los números.
 Mediante una instrucción condicional if .. else mostrará un mensaje por pantalla indicando si los dos números acaban con la misma cifra  o no. 

Para obtener la última cifra de un número se utiliza el operador % (resto).

La última cifra de cada número se obtiene calculando el resto de la división del número entre 10. Por ejemplo, si uno de los números es 123 su última cifra se calcula 123 % 10 = 3 */

let N1 = prompt("ingresa el primer numero")

let N2 = prompt("ingresa el segundo numero") 

N1 = parseInt(N1)
N2 = parseInt(N2)

if (N1 % 10 == N2 % 10){
    document.write("sus ultimas cifras son iguales");
}else{ 
    document.write("sus ultimas cifras son distintas")
}
