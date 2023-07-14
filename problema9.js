/*Se trata de que dado un número entero el script muesre una cuenta atrás,
es decir, una lista de numeros separados por coma desde el número tecleado hasta el 0. */


let max, msg='';
max = parseInt(prompt("Teclear un número entero"));
for( let i = max; i >= 0;  i--){
msg += i + ", ";
}

document.write(msg)