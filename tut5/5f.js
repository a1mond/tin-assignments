class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    };
    set fullName(newValue) {
        const [newFirstName, newLastName] = newValue.split(' ');
        this.firstName = newFirstName;
        this.lastName = newLastName;
    };
}

class Student extends Person {
    constructor(firstName, lastName, id, grades) {
        super(firstName, lastName);
        this.id = id;
        this.grades = grades;
    }
    
    get averageGrade() {
        return this.grades.reduce((x1, x2) => x1 + x2, 0) / this.grades.length;
    };
    printFirstName = function() {
        console.log(this.firstName);
    };
    printLastName = function() {
        console.log(this.lastName);
    };
    printAverageGrade = function() {
        console.log(this.averageGrade);
    };
}

const student = new Student('Vladyslav', 'Kotyk', 103847, [4.67, 3.65, 5.00, 3.45])

student.printFirstName();
student.printLastName();
student.printAverageGrade();
console.log(student.fullName);
student.fullName = 'Mega Dude'
console.log(student.firstName);
console.log(student.lastName);