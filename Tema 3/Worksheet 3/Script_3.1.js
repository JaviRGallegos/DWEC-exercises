//Highest number
vector = [1, 2, 2, 3, 4, 5];

max = Math.max.apply(null, vector);
console.log('Número mayor: ' + max);

/********************************************************************************/
//Longest string

cad = ['Hola', 'Adiós', 'Esta es la más larga'];

function encuentramaslarga(cad) {
    var maslarga = "";
  
    cad.forEach(function(pal) {
      if(pal.length > maslarga.length) {
        maslarga = pal;
      }
    });
  
    return maslarga;
} 

console.log(encuentramaslarga(cad));

/********************************************************************************/
//Find even numbers

v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function encuentrapares(cad)
{
    pares = [];
    cad.forEach(element => {
        if (element % 2 == 0){
            pares.push(element);
        }
    });
    return pares;
}

console.log(encuentrapares(v));

/********************************************************************************/
//Find odd numbers

function encuentraimpares(cad)
{
    impares = [];
    cad.forEach(element => {
        if (element % 2 !== 0){
            impares.push(element);
        }
    });
    return impares;
}

console.log(encuentraimpares(v));

/********************************************************************************/
//Find words that contain 'is'

cads = ['Hello', 'Mama is good', 'God is ma bro', 'Nais'];

function encuentraexpresion(cad)
{
    palabras = [];
    cad.forEach(element => {
        if(element.includes('is')){
            palabras.push(element);
        }
    });

    return palabras;
}

console.log(encuentraexpresion(cads));


/********************************************************************************/
//Assert all numbers that are dividable by 3

vector = [2, 3, 5, 6, 9, 12, 27, 35];

function divisiblepor3(cad)
{
    divisible = [];
    cad.forEach(element => {
        if (element % 3 == 0){
            divisible.push(element)
        }
    });
    return divisible;
}

console.log(divisiblepor3(vector));


/********************************************************************************/
//Zip two arrays together

arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9, 10];

function combine(cad1, cad2)
{
    cad = cad1.concat(cad2);
    return cad;
}

console.log(combine(arr2, arr1));


/********************************************************************************/
//Sort combined array

sorted = combine(arr2, arr1);
sorted.sort((a, b) => a-b);
console.log(sorted);

/********************************************************************************/
//Remove first word of the array

function eliminaprimera(cad)
{
    cad.shift();
    return cad;
}



/********************************************************************************/
//Place a new word at the first place of the array

cads = ['Hola', 'Adios', 'Gerardo'];
palabra = 'Mamerto';

function addfirst(cad, word)
{
    cad.unshift(word);
    return cad;
}

console.log(eliminaprimera(cads));
console.log(addfirst(cads, palabra));

/********************************************************************************/
//Replace some elements

e = 5;
v = [5, 5, 8, 9, 20, 5, 6, 7, 8];
p = 4;

function replace(elemento, vector, posicion)
{
    vector.splice(posicion, elemento);
    return vector;
}

