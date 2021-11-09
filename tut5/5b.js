function Student(firstName, lastName, id, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;

    this.printFirstName = function() {
        console.log(this.firstName);
    };
    this.printLastName = function() {
        console.log(this.lastName);
    };
    this.printAverageGrade = function() {
        console.log(this.grades.reduce((x1, x2) => x1 + x2, 0) / this.grades.length);
    }

    return this;
}

const student = Student('Vladyslav', 'Kotyk', 103847, [4.67, 3.65, 5.00, 3.45])

student.printFirstName();
student.printLastName();
student.printAverageGrade();