num = prompt('Tell me a number: ');

if (num > 100){
    disc = num * 15 /100;
    num = num - disc;
    alert('Your number is ' + num);
}
else {
    alert('lmao');
}