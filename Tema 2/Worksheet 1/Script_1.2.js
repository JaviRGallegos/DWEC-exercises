fechaHoy = new Date();
document.write('Apartado a: ' + fechaHoy + '<br>');

fecha85 = new Date();
fecha85.setDate(fechaHoy.getDate() + 85);
document.write('Apartado b: ' + fecha85 + '<br>');

fecha187 = new Date();
fecha187.setDate(fechaHoy.getDate() - 187);
document.write('Apartado c: ' + fecha187 + '<br>');

fecha85.setFullYear(fecha85.getFullYear() + 2);
document.write('Apartado d: ' + fecha85 + '<br>');

fecha187.setDate(fecha187.getDate() - 1);
document.write('Apartado e: ' + fecha187 + '<br>');

fechaResto = new Date();
fechaResto = fecha85 - fecha187;
document.write('Apartado f: ' + fechaResto + '<br>');