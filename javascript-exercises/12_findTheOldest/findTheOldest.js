const findTheOldest = function(array) {
    array.forEach(function(person){
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
    })
    
    const oldest = array.sort(function(a, b) {
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
      });

      return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
