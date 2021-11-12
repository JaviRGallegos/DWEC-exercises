vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function resetear(v)
{
    v.forEach((valor, indice) => {
        v[indice] = 0;
    });
}

function masuno(v)
{
    v.forEach((valor, indice) => {
        v[indice] += 1;
    });
}

function espacios(v)
{
    v.forEach((valor, indice) =>{
        document.write(v[indice] + '<br>');
    });
}


console.log(resetear(vector));
masuno(vector);
console.log(vector);
console.log(espacios(vector));