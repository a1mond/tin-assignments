const studentCourses = {
    obligatoryCourses: ['ALG', 'MAD', 'AM', 'NAI']
};

function Student(firstName, lastName, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.obligatoryCourses = studentCourses.obligatoryCourses;
    return this;
}

const student = Student('Vladyslav', 'Kotyk', 193751)

console.log(student.firstName);
console.log(student.obligatoryCourses);