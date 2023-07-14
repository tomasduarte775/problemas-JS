/*En un estadio de fútbol se quiere saber cuántas personas asistieron a presenciar un partido.
En cada lectura se ingresarán la cantidad de personas que ingresaron por una de las veinte
entradas, y el precio de la entrada. complete la información de las veinte entradas. */

//valor de las entras de puerta 1 a 10 $200 y de 11 a 20 $600

//constante 
let i = 1; 

while(i <= 20 ){
    
    let puerta = parseInt(prompt("indicamos el numero de puerta 1 a 20")) //numero de puerta

    // valor de la entrada
    if(puerta <= 10){
        let cant = parseInt(prompt("ingrse la cantidad de personas")) // cantidad de personas que ingresadoron
        let valor = parseInt(200);
        let recau = (cant * valor)
        document.write("en la puerta " + puerta + "ingresaron " + cant +  "personas " + "se recaudo " + recau + "</br>")
    }else{
        let cant = parseInt(prompt("ingrse la cantidad de personas")) // cantidad de personas que ingresadoron
        let valor = parseInt(600);
        let recau = (cant * valor)
        document.write("en la puerta " + puerta + "ingresaron " + cant +  "personas " + "se recaudo " + recau + "</br>")
    }

    i++;
}

