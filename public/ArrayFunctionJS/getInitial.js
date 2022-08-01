const nameString = "Steven Paul Jobs";

function getInitial(){
    const fullName = nameString.split(' ');
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    initials.toUpperCase();
    console.log(initials)
}
getInitial();