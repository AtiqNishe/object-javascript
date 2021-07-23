const normalParson = {
    firstName:'Atiqur',
    lastName:'Rahman',
     sallary : 20000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill:function(amount, tips, tax){
        console.log(this)
        this.sallary = this.sallary - amount-tips-tax;
        return this.sallary;
    }
}

const heroPerson = {
    firstName:'Doly',
    lastName:'Akter',
    sallary :20000,
}

const friendlyPerson = {
    firstName:'Nishe',
    lastName:'Shaka',
    sallary :25000,
}
// bind() mathoad
// const heroBill= normalParson.chargeBill.bind(heroPerson)
// normalParson.chargeBill();
// heroBill(2000);

// const frinedBill = normalParson.chargeBill.bind(friendlyPerson);
// frinedBill(2000);
// frinedBill(3000);
// frinedBill(5000);
// console.log(friendlyPerson.sallary);
// console.log(normalParson.sallary);

//call() mathoad

// normalParson.chargeBill.call(heroPerson, 2000, 100, 500);
// normalParson.chargeBill.call(heroPerson, 5000, 1000, 500);
// console.log(heroPerson.sallary);
// normalParson.chargeBill.call(friendlyPerson,5000,3000,1000);
// normalParson.chargeBill.call(friendlyPerson,500,300,100);
// normalParson.chargeBill.call(friendlyPerson,50,20,10);
// normalParson.chargeBill.call(friendlyPerson,50,40,1000);
// console.log(friendlyPerson.sallary);
// console.log(normalParson.sallary);
// apply() mathoad

normalParson.chargeBill.apply(heroPerson,[300,456,555]);
console.log(heroPerson.sallary);