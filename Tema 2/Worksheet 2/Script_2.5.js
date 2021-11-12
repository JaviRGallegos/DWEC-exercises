a = parseInt(prompt('Coeficiente a: '));
b = parseInt(prompt('Coeficiente b: '));
c = parseInt(prompt('Coeficiente c: '));

var discriminante = b ** 2 - 4 * a * c;

if (discriminante < 0) {
    document.write('Solución no válida');
}
else {
    solucion1 = (-b + Math.sqrt(discriminante)) / 2 * a;
    solucion2 = (-b - Math.sqrt(discriminante)) / 2 * a;
}

document.write('Solución 1: ' + solucion1 + '<br>');
document.write('Solución 2: ' + solucion2 + '<br>');