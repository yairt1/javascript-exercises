const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();

  let oldest = 0;

  const a = people.reduce((acc, person) => {
    const finalYear = person.yearOfDeath ?? currentYear;
    const age = finalYear - person.yearOfBirth;

    if (age > oldest) {
      acc = person;
      oldest = age;
    }

    return acc;
  }, {});

  return a;
};

// Do not edit below this line
module.exports = findTheOldest;
