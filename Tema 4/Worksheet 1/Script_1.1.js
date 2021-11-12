// Exercise 1 => Each time we click on the button an alert will pop up

// Alert block

alerts = ['Hola', 'Adiós', 'Buenos días', 'Viva el vino', 'Pepino', 'Wassup'];

// Button

btn = document.querySelector('button');

// Function to select a random alert

function alerta(){
    const boton = Math.floor(Math.random() * (alerts.length)); // Select a random element from the array
    alert(alerts[boton]);
}

// Adding the event to the button

btn.addEventListener('click', alerta); // Trigger element each time you press the button