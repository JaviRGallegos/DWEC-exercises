// Exercise 2 => Locate the mouse on the screen every time it moves

// Function to locate the mouse on the screen

function locate(event){ // We are capturing the "event" object that the client (browser) is passing to the javascript file
    console.log(`Actual pos: ${event.pageX}, ${event.pageY}`);
}


// Load the window then begin executing the code

window.addEventListener('mousemove', locate);