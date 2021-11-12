/* Write a function called sumEveryOther that takes in any amount of arguments, and returns the sum of every other argument. */
//numvals = parseInt(prompt('Number of values: '));
var valores =[1, 3, 5, 7, 9, 11, 13, 15, 18];
/*for (let i = 0; i < numvals; i++){
    valores.push(parseInt(prompt('Value '+ i + ': ')));
}*/


function sum (valores) {
    /*input: array
    adds the odd positions 
    output: suma*/
    let i = 0;
    let suma = 0;
    do{
        suma += valores[i];
        i += 1;
    } while(i % 2 !== 0 && i < valores.length); //Sumamos los valores en posiciones impares

    return suma;
}

sum(valores);

document.write('Array de valores: ' + valores + '<br>');
document.write('Suma de los impares: ' + sum(valores));