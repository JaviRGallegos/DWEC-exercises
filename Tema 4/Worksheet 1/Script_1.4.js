// Exercise 4 => Drawing on a table using onMouseMove and onLoad

// Creating a 100x100 table

function montartabla(){
    document.write('<table border="1">');
    td = document.getElementsByTagName('td');
    td.setAttribute("onmousemove","mover(event)");
    for (i = 1; i <= 100; i++){
        document.write('<tr>');
        for(j = 1; j<=100; j++){
            document.write('<td> </td>');
        }
        document.write('</tr>');
    }

    document.write('</table>');
    
}



function mover(event){
    function ctrlMouse(e){
        
        if(e.ctrlKey){
            event.target.style.backgroundColor="red";
        }else if(e.shiftKey){
            event.target.style.backgroundColor="blue";
        }
    }
    document.addEventListener("keydown",ctrlMouse);
}

window.addEventListener('load', montartabla);
