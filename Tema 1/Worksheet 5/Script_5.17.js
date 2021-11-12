num1 = parseInt(prompt('Tell me a number: '));
num2 = parseInt(prompt('Tell me another number: '));
op = prompt('Tell me the operation you want to do: ');

switch (op){
    case '+':
        alert('La suma es: ' + (num1 + num2));
        break;
    case '-':
        alert('La resta es: ' + (num1 - num2));
        break;
    case '*':
        alert('El producto es: ' + num1 * num2);
        break;
    case '/':
        alert('La división es: ' + num1 / num2);
        break;
}
