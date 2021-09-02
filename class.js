class Student{
      constructor(sId, sName){
          this.id = sId;
          this.name = sName;
          this.school = "Ideal School";
      }
}
const student1 = new Student(12,"Shuvo");
const student2 = new Student(22,"Alif");
const student3 = new Student(21,"Abir");
console.log(student1.name, student2.name,student3.name);