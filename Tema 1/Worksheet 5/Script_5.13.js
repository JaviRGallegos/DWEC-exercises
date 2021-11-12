num = parseInt(prompt('How many siblings do you have?'));
quantity = parseInt(prompt('Tell me a quantity'));

discount15 = quantity * 15 / 100;
discount5 = quantity * 5 / 100;

if (num >= 3){
    alert('The corresponding quantity is: ' + (quantity = quantity - discount15));
}

else if (num < 3 && num > 0){
    alert('The corresponding quantity is: ' + (quantity = quantity - discount5));
}

else{
    alert("There's no discount for you are an only child; the corresponding quantity is: " + quantity);
}