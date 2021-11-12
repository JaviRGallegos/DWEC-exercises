cad = 'If man was meant to stay on the ground god would have given us roots';

arr = cad.split('');

for (let i = 0; i < arr.length; i++){
    if (arr[i] === ' '){
        arr.splice(i, 1);
    }
}

arr.forEach(i => {
    while(arr.length > 0){
        let arr2 = arr.splice(0, 8)
        for (i of arr2){
            document.write(i);
        }
        document.write('<br>');
    }
});

cadfinal = arr.join('');
document.write(cadfinal);