document.write('<table border=1>');

vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i of vector) {
    document.write('<tr>');
    document.write('<td>' + i + '</td>');
    document.write('<td>' + Math.sin(i) + '</td>');
    document.write('</tr>');
}
document.write('</table>');