/*La asociación de vinicultores tiene como política fijar un precio inicial al kilo de uva, la cual se clasifica en tipos (A y B),
 y además en tamaños (1 y 2). Cuando se realiza la venta del producto, ésta es de un sólo tipo y tamaño, 
 se requiere determinar cuanto recibirá un productor por la uva que entrega en un embarque considerando lo siguiente:
* Si es de tipo A, se le cargan 20 céntimos al precio inicial cuando es de tamaño 1 y 30 céntimos si es de tamaño 2.
* Si es de tipo B, se rebajan 30 céntimos cuando es de tamaño 1, y 50 céntimos cuando es de tamaño 2. */ 

// definir el precio de la uva por kilo A y B 
let A = prompt("ingrese el precio de uva A")
let B = prompt("ingrese el precio de uva B")

//A Y B ENTEROS 
A = parseInt(A)
B = parseInt(B)

//cuuentas de los tamaños
TA1 = A * 20
TB1 = B * 30

TA2 = A * 30
TB2 = B *50 

// TAMÑANOS ENTEROS

TA1 = parseInt(TA1)
TB1 = parseInt(TB1)
TA2 = parseInt(TA2)
TB2 = parseInt(TB2)

//preguntamos el tamñano de las uvas }

TAMA = prompt("que tamñano es la uva A")

TAMB = prompt("que  tamaño es la uva B")

// INICIAMOS CONDICIONAL 

if( TAMA == 1 && TAMB == 1){
    document.write("TA1 + TB1")
}else if (TAMA == 2 && TAMB == 1 ) {
    

}
