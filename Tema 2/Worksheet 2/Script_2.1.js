document.write(Math.random() * 2 + '<br>');
document.write(Math.random() * 201 + '<br>');
num1 = parseFloat(prompt('Tell me the lower limit: '));
num2 = parseFloat(prompt('Tell me the higher limit: '));

document.write(Math.random()*(num2 - num1) + num1);