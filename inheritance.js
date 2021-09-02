class Parent{
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name +" " +this.fatherName;
    }
}
const name = new Child('Arnold');
const name2 = new Child('Tom');
console.log(name.getFullName(), name2.getFullName());