/*Este script debe escribir la tabla de multiplicar del número que el usuario teclee.
 La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab. */
let base, contador, prefijjo, producto, msg='';
base = parseInt(prompt("Tabla del..."));
prefijo = base + " X ";
for (contador = 1; contador <= 10; contador++)
{
producto = base*contador;
msg +=  prefijo + contador + " = " + producto + "\n";
}
alert("Tabla del "+base +"\n"+msg)