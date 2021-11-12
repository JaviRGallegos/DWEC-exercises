

function saddlepoint(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        for (let j = 0; j < arr[i].length; j++)
        {
            let columna = [];
            max = Math.max(...arr[i]);
            for (k = 0; k < arr[i].length; k++)
            {
                columna.push(arr[k][j]);
            }
            min = Math.min(...columna);

            if (arr[i][j] >= max && arr[i][j] <= min)
            {
                console.log(i + ", " + j);
            }
        }
    }
}

a = [[1, 3, 2, 7], [1, 3, 2, 8], [1, 3, 2, 3], [1, 3, 2, 7]];

saddlepoint(a);