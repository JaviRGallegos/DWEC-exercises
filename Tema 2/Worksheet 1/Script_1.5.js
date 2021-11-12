fecha = new Date;

var horas = fecha.getHours();
var mins = fecha.getMinutes();
var secs = fecha.getSeconds();

setTimeout(function() {
    if (horas < 10){
        horas = '0' + horas;
    }
    else if (mins < 10){
        mins = '0' + mins;
    }
    else if (secs < 10) {
        secs = '0' + secs;
    }
    document.write('Hora: ' + horas + ' ', 'Minutos: ' + mins + ' ', 'Segundos: ' + secs);
    location.reload(); //Recarga la página
});
