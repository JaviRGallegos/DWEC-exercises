function repetidos(cadena){
    cadena = cadena.split("");
    repes = [];
    for (let i = 0; i < cadena.length; i++){
        if (repes.includes(cadena[i]) == true){
            repes.push(cadena.splice(cadena[i]));
        }
        else{
            continue;
        }
    }
    return repes;
}

cadena = 'aloha';


console.log(repetidos(cadena));


