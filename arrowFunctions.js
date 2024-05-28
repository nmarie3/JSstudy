const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        // console.log(this);
        console.log(2037 - this.year)

        //solution 1
        // const self = this;
        // const isMillenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996); //can fix below by adding self into the scope

        //solution 2
        const isMillenial = () => { //works because this arrow function grabs this keyword from parent scope
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);

            
        //original
            // console.log(this.year >= 1981 && this.year <= 1996); //isMillenial() will be undefined
        };
        isMillenial(); 
    },
    greet: () => console.log (`Hey ${this.firstName}`),
    // greet: function() {
    //     console.log(this);
    //     console.log (`Hey ${this.firstName}`), //this would work
    //}
};
jonas.greet(); //undefined because arrow functions don't get a this key
jonas.calcAge();

