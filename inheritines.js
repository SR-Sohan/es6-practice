class Parent { 
    constructor(){ 
        this.fatherName = "Md"
    }
}

class Child extends Parent { 
    constructor(name){ 
        super();
        this.name = name;
    }

     fullName(){ 
         return this.name + ' ' + this.fatherName;
     }
}

const baby = new Child('SR');
const baby2 = new Child('Sohan');
console.log(baby.fullName(),baby2.fullName());