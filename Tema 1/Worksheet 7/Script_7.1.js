/*Write a function that can take in any number of arguments, and returns the sum of all of the arguments.*/

function sum (...valores){
    let suma = 0;
    for (let i of valores){
        suma += i;
    }
    return suma;
}

valores = [1, 5, 5, 8, 9];
document.write('La suma de los valores es: ' + sum(...valores) + '<br>');
