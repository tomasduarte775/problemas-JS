let free = false; 

const validarClient = (time)=>{
    let edad = prompt("¿cual es la edad?");
    if (edad > 18 ){
        if (time >= 2 && time < 7 && free == false) {
            alert("podes pasar gratis, porque sos la primer pesona despues de las 2 ame");
            free = true;
        }else{
            (`son las ${time}:00Hs y podes pasar, pero tenes que pagar la entrada `) 
        }

    }else {
        alert("no podes pasar, sos menor de edad");
    }
       
}


validarClient(23);
validarClient(24);
validarClient(0.2);
validarClient(0.6);
validarClient(1);
validarClient(2);
validarClient(2.4);
validarClient(3);
