
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    return this.dateOfBirth.split('')
      .reduce((acc, el) => {
        if (parseInt(el, 10)) {
          return acc + parseInt(el, 10);
        }
        return acc;
      }, 0);
  }
}

export {
  Person,
};
