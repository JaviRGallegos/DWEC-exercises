n = parseInt(prompt('Number of columns: '));
height = parseInt(prompt('Height of the cells: '));
width = parseInt(prompt('Width of the cells: '));

document.write('<table border="0" cellspacing="2" bgcolor="black" width= "200">');
document.write('<tr bgcolor="white" height="' + height + '">');

for (let i = 0; i < n; i++){
    document.write('<td width="' + width + '">&nbsp;</td>');
}

document.write('</tr>');
document.write('</table>');