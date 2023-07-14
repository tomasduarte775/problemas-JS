// de un numero de empleados indica quien tiene mas de 4 carateres 

const empleados = ["Alexzander", "Anna", "Ezel"];
//imperativo como
const results = [];

for (let i = 0; i < empleados.length; i++) {
    if (empleados[i].length > 4){
    results.push(empleados[i]);
    }
}
document.write(results);