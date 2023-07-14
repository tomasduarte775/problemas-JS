/*Se dispone de 4 pares ordenados (X,y) de números. a los cuales se debe calcular la suma 
de todas las X y la suma de todas las Y, imprimir los resultados. */ 

let i = 1; 

while (i <= 4) {
    let n1 = parseInt(prompt("ingrese un numero"));
    
    let n2 = parseInt(prompt("ingrese el segundo numero"));
    
    let suma = n1 + n2 ;

    document.write("la suma entre " + n1 + "+" + n2 + "=" + suma + "</br>")
    
    i++; 

}