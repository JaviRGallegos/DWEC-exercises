$(document).ready(function () {
    $('#start').click(function () {
        $('body').append('<div id="cuadrado"></div>'); // Creación del div
        $('#cuadrado').css({
            'background-color': 'brown',
            'margin-top': '100px',
            'margin-left': '400px',
            'width': '40px',
            'height': '40px',
            'align': 'middle'
        });

        setTimeout(function(){
            $('div').animate({marginLeft: '-=200px'}, 'slow');
            $('#cuadrado').css('background-color', 'cyan');
        }, 2000);
        
        setTimeout(function(){
            $('#cuadrado').animate({marginTop: '-400px'}, 'slow');
        }, 5000);
    });

    $('#stop').click(function(){
        $('#cuadrado').stop(true);
    });
});