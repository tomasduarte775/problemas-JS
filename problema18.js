/*Para poder extraer alguna estadística, en una agencia de quiniela, se requiere saber cuál fue
el mayor valor registrado en los sorteos comprendidos en un periodo de tiempo
determinado, Terminar el proceso de carga de los números, cuando el valor leído sea
mayor que novecientos noventa y nueve */ 

// declaro la constante 
let i = 1; 

//tiempo trascurrido
let tim = parseInt(prompt("ingrese la cantidad de tiempo a analizar")); 

while( i <= tim ){

    let valor = parseInt(prompt("numero de quiniela"))

    if(valor <=  99 ){
        document.write("numero de quiniela=  " + valor + "</br>");
    }else {
        document.write(valor + " nuermo es mayor a 99 proceso denegado")
        break;
    }

    i++;
}