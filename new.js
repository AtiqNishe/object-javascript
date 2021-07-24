// class thake object make korar new system
class Parson{

    constructor(firstName, lastName, salary, job){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.job = job;
        this.name = 'TARASIMA APPARELS LIMETED';
    }
}

const badsha = new Parson('Badsha', 'vuaia', 35000, 'Sr.Electician');
const sujon = new Parson('sujon', 'mia', 19500, 'Electician');
const shakil = new Parson('shakil', 'khan', 25000, 'Electician');
const shofiq = new Parson('shofiq', 'islam', 30000, 'Sr.Electician');
console.log(badsha, sujon, shakil, shofiq);

// object make korar old system
function Parson1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldParson = new Parson1('Kolim', 'Uddin', 5000);
console.log(oldParson)