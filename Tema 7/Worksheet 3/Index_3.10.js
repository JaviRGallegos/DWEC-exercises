$(document).ready(function(){

    $('input').keypress(function() {
        if($('input[type = password]').val().length > 8){
            $('div').text('Muy segura').css({'color': 'green'});
        }
        else if($('input[type = password]').val().length >= 5){
            $('div').text('Poco segura').css({'color': 'orange'});
        }
        else{
            $('div').text('Contraseña no válida').css({'color': 'red'});
        }
    });
    
});