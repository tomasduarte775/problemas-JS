/*Se quiere un bucle que genere una lista con todos los números pares positivos
por debajo del número tecleado por el usuario. 
Los números se aparecerán en una ventana alert con cambios de linea (carácter '\n'). */

//indicamos hasta q numero buscamos pares y definimos como entero
let num, par=0, msg='';

num = parseInt(prompt("ingrese un numero"));

// creeamos bucle para encontrar enteros

for (let i = 1; par < num; i++){
    msg += par + "\n";
    par = i*2;
}
document.write(msg + "</br>");