cad = 'Hola';

function ordenarcadena(cadena){
    cadena = cadena.split('');
    arrayvocales = [];
    arraycons = [];
    for (let i of cadena){
        if (cadena[i] == 'A' || cadena[i] == 'E' || cadena[i] == 'I' || cadena[i] == 'O' || cadena[i] == 'U' || cadena[i] == 'a' || cadena[i] == 'e' || cadena[i] == 'i' || cadena[i] == 'o' || cadena[i] == 'u'){
            arrayvocales.push(cadena[i]);
        }
        else{
            arraycons.push(cadena[i]);
        }
        
    }
    let vocales = arrayvocales.join('');
    let cons = arraycons.join('');
    var listafin = cons + vocales;
    return listafin;
}

document.write(ordenarcadena(cad));