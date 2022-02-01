$(document).ready(() => {
    // Apartado 1
    $('#1>p').css('font-size', '20px');
    $('#2>p').css('font-size', '10px');
    $('#3>p').css('font-size', '40px');
    // Apartado 2
    $('div>h1').on('click', oculta);
    // Apartado 3
    $('div>p').on('mouseover', cambiaColor);
    // Apartado 4
    $('div>p').on('mouseout', blanco);
})


function oculta(){
    $(this).siblings(0).toggle();
}

function cambiaColor(){
    $(this).css('background-color', colorAleatorio());
}

function colorAleatorio() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function blanco(){
    $(this).css('background-color', 'white');
}