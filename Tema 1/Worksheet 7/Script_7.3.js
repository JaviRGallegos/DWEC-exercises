/*Write a function called countTheArgs that can take any number of arguments, and returns the number of arguments that are passed in.*/

function countTheArgs(...arguments){
    let contador = 0;
    for (i in arguments){
        contador += 1;
    }
    return contador;
}

document.write(countTheArgs(6, 7, 8, 9, 6 ,6));