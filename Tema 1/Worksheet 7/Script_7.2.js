/*Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings), and returns the sum of only the numbers.*/
function sum (...valores){
    let suma = 0;
    for (let i of valores){
        if (typeof(suma) == typeof(i)){
            suma += i;
        }
    }
    return suma;
}

valores = [1, 5, 5, 8, 9, 'Hola'];
document.write('La suma de los valores es: ' + sum(...valores) + '<br>');
