function repetidos(cadena){
    cadena = cadena.split("");
    repes = [];
    for (let i = 0; i <= cadena.length; i++){
        if (repes.includes(cadena[i]) == false){
            repes.push(cadena.splice[i]);
        }
        else{
            continue;
        }
    }
    return repes;
}

cadena = 'Aloha';


console.log(repetidos(cadena));


