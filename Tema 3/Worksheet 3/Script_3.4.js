map = [];

for (let i = 0; i < 5; i++){
    linea = [];
    map.push(linea);
    for (let j = 0; j < 5; j++){
        j = Math.floor(Math.rand(1, 10) * (10 - 1) + 1);
        map.push(j);
    }
}