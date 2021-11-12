height = parseInt(prompt('Height of the cells: '));
width = height;

document.write('<table border="0" cellspacing="2" bgcolor="black" width= "200">');


for(let i = 1; i <= 8; i++){
    if (i % 2 !== 0){
        document.write('<tr bgcolor="black" height="' + height + '">');
        for (let j = 1; j <= 8; j++){
            if (j % 2 == 0){
                document.write('<td width="' + width + '" bgcolor = "white">&nbsp;</td>');
            }
            else {
                document.write('<td width="' + width + '" bgcolor = "black">&nbsp;</td>');
            }
        }
    }
    else {
        
        document.write('<tr bgcolor="white" height="' + height + '">')
        for (let j = 1; j <= 8; j++){
            if (j % 2 !== 0){
                document.write('<td width="' + width + '" bgcolor = "white">&nbsp;</td>');
            }
            else{
                document.write('<td width="' + width + '" bgcolor = "black">&nbsp;</td>');
            }        
        }
    }
    
}
document.write('</tr>');
document.write('</table>');