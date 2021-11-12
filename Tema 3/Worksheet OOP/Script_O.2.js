// Write a Car class whose constructor initializes model and milesPerGallon from arguments.

class Car
{
    constructor(model, milesPerGallon)
    {
        this.model = model;
        this.mpg = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }

    fill(gallons)
    {
        this.tank += gallons;
    }

    drive(distance)
    {
        (this.tank >= 0) ? this.tank -= distance / this.milesPerGallon : console.log(`Car stopped at` + this.odometer + (this.tank -= distance / this.mpg));
    }
}