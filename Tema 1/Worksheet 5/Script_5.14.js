exam1 = parseFloat(prompt('Exam 1 mark: '));
exam2 = parseFloat(prompt('Exam 2 mark: '));
project1 = parseFloat(prompt('Project 1 mark: '));
project2 = parseFloat(prompt('Project 2 mark: '));

if (exam1 >= 4.5 && exam2 >= 4.5 && project1 >= 4.5 && project2 >= 4.5){
    avg = (exam1 + exam2) * 0.75 + (project1 + project2) * 0.25;
    if(avg >= 5){
        alert('Passed');
    }
    else{
        alert('Failed');
    }
}

else {
    alert('Failed');
}
