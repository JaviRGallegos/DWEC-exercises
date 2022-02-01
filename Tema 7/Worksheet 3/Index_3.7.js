$(document).ready(function(){
    $('.flip-card').css({
        'background-color': 'transparent',
        'width': '400px',
        'height': '200px',
        'border': '1px solid #f1f1f1',
        'perspective': '1000px' 
    });
    $('.flip-card-inner').css({
        'position': 'relative',
        'width': '100%',
        'height': '100%',
        'text-align': 'center',
        'transition': 'transform 0.8s',
        'transform-style': 'preserve-3d'
    });
    $('.flip-card').hover(function(){
        $(this).css('transform', 'rotateY(180deg)');
        $('.flip-card-inner').css('transform', 'rotateY(180deg)');
    });
    $('.flip-card-front').css({
        'position': 'absolute',
        'width': '100%',
        'height': '100%',
        'backface-visibility': 'hidden'
    });
    $('.flip-card-back').css({
        'position': 'absolute',
        'width': '100%',
        'height': '100%',
        'backface-visibility': 'hidden'
    });
    $('.flip-card-front').css({
        'background-color':'#bbb',
        'color': 'black'
    });
    $('.flip-card-back').css({
        'background-color':'dodgerblue',
        'color': 'white',
        'transform': 'rotateY(180deg)'
    });

    
});