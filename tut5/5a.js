const test_obj = {
    firstName: "Vladyslav",
    lastName: "Kotyk",
    birthDate: new Date(2002, 7, 25),
    stupid: true,

    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    getAge: function() {
        return new Date().getFullYear() - this.birthDate.getFullYear();
    }
};

const printProps = (obj) => {
    Object
        .getOwnPropertyNames(obj)
        .forEach(o => console.log(`"${o}": ${typeof obj[o]} `))
}

printProps(test_obj);