do {
    c1 = parseFloat(prompt('Tell me the 1sr side of the triangle: '));
    c2 = parseFloat(prompt('Tell me the 2nd side of the triangle: '));

    hipot = sqrt(c1**2 + c2**2);

    document.write('Hipotenuse is: ', hipot);
    respuesta = prompt('Quieres seguir haciendo el cálculo? Responde (s/n)');
} while (respuesta = 's');