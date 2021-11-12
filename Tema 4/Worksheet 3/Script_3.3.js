variablenum = 1;



button1 = document.getElementById('patras');
button2 = document.getElementById('palante');

function clicaopalante() {
    if (variablenum == 5) {
        variablenum = 1;
        document.getElementById('miimagen').src = variablenum + ".jpg";

    }
    else {
        variablenum ++;
        document.getElementById('miimagen').src = variablenum + ".jpg";
    }


}

function clicaopatras() {
    if (variablenum == 1) {
        variablenum = 5;
        document.getElementById('miimagen').src = variablenum + ".jpg";
    }
    else {
        variablenum --;
        document.getElementById('miimagen').src = variablenum + ".jpg";
    }

}

button1.addEventListener('click', clicaopatras);
button2.addEventListener('click', clicaopalante);


