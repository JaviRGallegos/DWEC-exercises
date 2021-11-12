cad = "Hola";

function compara(cadena){
    cad_aux = cadena;
    if (cadena == cad_aux.toLowerCase()){
        return 0;
    }
    else if (cadena == cad_aux.toUpperCase()){
        return 1;
    }
    else{
        return 2;
    }
}


if (compara(cad) == 0){
    document.write('Está todo en minúsculas')
}
else if (compara(cad) == 1){
    document.write('Está todo en mayúsculas');
}
else {
    document.write('Es una combinación de ambas');
}