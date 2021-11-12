val1 = parseInt(prompt('Valor 1: '));
val2 = parseInt(prompt('Valor 2: '));
val3 = parseInt(prompt('Valor 3: '));
val4 = parseInt(prompt('Valor 4: '));


function maximo(valor1, valor2, valor3, valor4){
    if(valor1 > valor2 && valor1 > valor3 && valor1 > valor4){
        return 'Valor 1 es el máximo';
    }
    else if(valor2 > valor1 && valor2 > valor3 && valor2 > valor4){
        return 'Valor 2 es el máximo';
    }
    else if(valor3 > valor1 && valor3 > valor3 && valor3 > valor4){
        return 'Valor 3 es el máximo';
    }
    else{
        return 'Valor 4 es el máximo';
    }
}

console.log(maximo(val1, val2, val3, val4));