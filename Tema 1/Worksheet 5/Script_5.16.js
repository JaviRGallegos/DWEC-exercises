num = parseInt(prompt('Tell me a number: '));

if (num % 2 == 0){
    mul = 'even';
}
else if (num % 3 == 0){
    mul = 'Multiple3';
}
else if (num % 5 == 0){
    mul = 'Multiple5';
}
else{
    mul = 'irr';
}

switch (mul) {
    case 'even':
        alert('Number is even');
        break;
    case 'Multiple3':
        alert('Number is multiple of 3');
        break;
    case 'Multiple5':
        alert('Number is multiple of 5');
        break;
    case 'irr':
        alert('Irrelevant');
        break;
}
