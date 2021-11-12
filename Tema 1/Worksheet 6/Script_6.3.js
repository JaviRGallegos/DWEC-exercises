n = parseInt(prompt('Number of columns: '));
r = parseInt(prompt('Number of rows: '));
height = parseInt(prompt('Height of the cells: '));
width = parseInt(prompt('Width of the cells: '));

document.write('<table border="0" cellspacing="2" bgcolor="black" width= "200">');
document.write('<tr bgcolor="white" height="' + height + '">');

for (let i = 0; i < n; i++){
    if(i % 2 == 0){
        document.write('<td width="' + width + '" bgcolor = "black">&nbsp;</td>');
    }
    else{
        document.write('<td width="' + width + '" bgcolor = "white">&nbsp;</td>');
    }
    
}

document.write('</tr>');
document.write('</table>');