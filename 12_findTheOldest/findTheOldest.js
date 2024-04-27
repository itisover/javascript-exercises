const findTheOldest = function(arr) {
    return arr.reduce((oldest_person, current_person) => {
        let current_person_age = findAge(current_person.yearOfBirth, current_person.yearOfDeath);
        let oldest_person_age = findAge(oldest_person.yearOfBirth, oldest_person.yearOfDeath);
        return current_person_age > oldest_person_age ? current_person : oldest_person; 
    });
};


function findAge(birth_year, death_year) {
    if(!death_year) {
        death_year = (new Date()).getFullYear();
    }
    return death_year - birth_year;
}


// Do not edit below this line
module.exports = findTheOldest;
