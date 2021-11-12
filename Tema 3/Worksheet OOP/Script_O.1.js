// Write a Person class whose constructor initializes name and age from arguments.

class Person 
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }

    eat(edible)
    {
        if (edible.is)
        if (this.stomach.length <= 10)
        {
            this.stomach.push(edible);
        }
    }

    poop()
    {
        this.stomach = [];
    }

    toString()
    {
        return `${this.name}, ${this.age}`;
    }
}