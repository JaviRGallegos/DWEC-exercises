n1 = parseInt(prompt('Player 1 number: '));
n2 = parseInt(prompt('Player 2 number: '));

do {
    if (n2 < n1){
        alert('Player 1 number is bigger'); //They're different
    }
    else if (n2 > n1){
        alert('Player 1 number is smaller'); //They're different
    }
    else{
        alert('You guessed it!'); //They're the same
        break;
    }

    n2 = parseInt(prompt('Player 2 number: '));
} while (n2);
