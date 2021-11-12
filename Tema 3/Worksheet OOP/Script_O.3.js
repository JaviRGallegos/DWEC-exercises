
class Lambdasian
{
    constructor(parametros)
    {
        this.name = parametros[0];
        this.age = parametros[1];
        this.location = parametros[2];
    }

    speak()
    {
        return `Hello, my name is ${this.name}, I am from ${this.location}`;
    }

}

let l1 = new Lambdasian(['Javi', 20, 'Granada']);
console.log(l1.speak());

//Exercise 4 -> create class Instructor which extends Lambdasian

class Instructor extends Lambdasian
{
    constructor(parametros, valores)
    {
        super (parametros);
        this.specialty = valores[0];
        this.favlanguage = valores[1];
        this.catchPhrase = valores[2];
    }

    demo (asignatura)
    {
        return `Today we're learning about ${asignatura}`;
    }

    grade (asignatura)
    {
        return `${this.name} has a perfect score in ${asignatura}`;
    }
}

let I1 = new Instructor(['Ramón', 23, 'Jaén'], ['ICT', 'English', 'LMAO']);
console.log(I1);
console.log(I1.speak());
let l2 = new Lambdasian(['Pablo', 19, 'Almería']);
console.log(I1.grade(l2, 'Matemathics'));

//Exercise 5 -> create class student which extends Lambdasian

class Student extends Lambdasian
{
    constructor(parametros, params) {
    super (parametros);
    this.previousBackground = params[0];
    this.className = params[1];
    this.favSubjects = params[2];
    this.grade = grade;
    }

    listSubjects(...arraysubjects){
        return `Loving ${arraysubjects}`;
    }

    PRAssignment(subject){
        return `${this.name} has submitted for ${subject}`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

    graduate(){
        if (this.grade >= 70){
            return 'You can graduate!';
        }
    }
}

let s1 = new Student(['Miguel', 20, 'Zaragoza'], ['Nada', '2DAW', 'DWEC']);
console.log(s1.listSubjects());
console.log(s1.PRAssignment('Ciencias Naturales'));

//Exercise 6 -> class ProjectManager extends Instructor

class ProjectManager extends Instructor{
    constructor(parametros, valores, attributes){
        super(parametros, valores);
        this.gradClassName = attributes[0];
        this.favInstructor = attributes[1];
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @${channel} standy times!`;
    }

    debugCode(stu, subject){
        return `${this.name} debugs ${stu.name}'s code on ${subject}`;
    }
}

pm1 = new ProjectManager(['Manuel', 30, 'Huelva'], ['Math', 'PHP', 'Hello Students'], ['CS3', 'Pepe']);
console.log(pm1.standUp(7));
console.log(pm1.debugCode(s1, 'Lengua'));

//Exercise 7 -> Extend classes Student, Instructor & ProjectManager and add a grading method

