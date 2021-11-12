//Treasure hunt

map = [
    [34,21,32,41,25],
    [14,42,43,14,31],
    [54,45,52,42,23],
    [33,15,51,31,35],
    [21,52,33,13,23]
];


cord1 = 1;
cord2 = 1;
cord = cord1.toString().concat(cord2.toString());

function search(map, crd1, crd2, coordenada)
{
    coord = map[crd1 - 1][crd2 - 1];
    if (parseInt(coordenada) == coord){
        console.log(coordenada);
        return `La posición es: ${coordenada}`;
    }
    else{
        coordenada = coord.toString();
        crd1 = parseInt(coordenada[0]);
        crd2 = parseInt(coordenada[1]);
        console.log(coordenada);
        search(map, crd1, crd2, coordenada);
    }
}

search(map, cord1, cord2, cord);