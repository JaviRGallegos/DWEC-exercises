let cad = "Hola Hola Hola";
let sub_cad = "Hola";
let fin = false;
let posicion = 0;
function encuentraRepeticion(cadena, subcadena){
    while(!fin){
        posicion = cadena.indexOf(subcadena, posicion + 1);
        if (posicion == -1){
            fin = true;
        }
        else {
            console.log(posicion);
        }
    }
}
encuentraRepeticion(cad, sub_cad);