//Paresimpares crea un array de 100 números aleatorios entre el 1 y el 1000 
//y lo organiza poniendo los pares primeros y luego los impares


function paresImpares(){
    valores = [];
    pares = [];
    impares = [];

    for (let i = 0; i <= 100; i++){
        numero = Math.floor(Math.random() * (1000 - 1) + 1);
        if (numero % 2 == 0){
            pares.push(numero);
        }
        else {
            impares.push(numero);
        }
    }
    valores.push(pares);
    valores.push(impares);
    return valores;
}
paresImpares();