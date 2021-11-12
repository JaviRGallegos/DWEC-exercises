age = parseInt(prompt('Tell me your age: '));


if (age <= 5){
    alert('You are in kindergarten');
}

else if (age >= 6 && age <= 11){
    alert('You are in primary school');
}

else if (age >= 12 && age <= 16){
    alert("You're in high school");
}

else if (age >= 17 && age <= 21){
    alert("You're in Superior studies");
}

else{
    alert("You're in college");
}