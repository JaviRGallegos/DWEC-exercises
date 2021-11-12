n = parseInt(prompt('Number of columns: '));
height = parseInt(prompt('Height of the cells: '));
width = parseInt(prompt('Width of the cells: '));

document.write('<table border="0" cellspacing="2" bgcolor="black" width= "200">');
document.write('<tr bgcolor="white" height="' + height + '">');

let i = 0;

do {
    document.write('<td width="' + width + '">&nbsp;</td>');
    i += 1;
} while(i < n);

document.write('</tr>');
document.write('</table>');