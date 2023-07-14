/*Usando un bucle for escribir un script que pida un valor entero
y muestre en pantalla una lista de números desde el 0 al valor tecleado.
Los números se separarán por comas.*/ 

// declaramos variables 
let numaximo, i, msg = '';
//le un indicamos al programa hasta que numero queremos llegar 
numaximo = parseInt(prompt("ingrese hasta que numero quiere contrar"));

// usamos el bucle for
for (i = 0; i < numaximo; i++) {
    msg += numaximo + ",";   
}

msg += i;   //Evita la coma al final
document.write(msg);

/* ---------------------------------------------------------OTRA FORMA MEJOR ---------------------------------------------------------------------------------------- 
let n = parseInt(prompt("selecione un numero para la cuenta")); 
for (let i = 1; i <= n; i++) {
    document.write(i + ", ")
}
*/