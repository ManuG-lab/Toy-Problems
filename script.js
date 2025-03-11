function studentGrade(){
    let marks;
    while(true){
        marks = prompt("Enter marks:");
        marks = Number(marks);

        if(!isNaN(marks) && marks >=0 && marks<=100){
            break;
        }
        else{
            alert("Invalid input! Marks should be between 0 and 100.");
        }
    }
    let grade;
    if(marks >79){
        grade = 'A';
    }
    else if (marks >=60){
        grade = 'B';
    }
    else if (marks>=50){
        grade = 'C';
    }
    else if (marks >=40){
        grade = 'D';
    }
    else{
        grade ='E'
    }
    console.log("Student grade:" + grade);
}
studentGrade();