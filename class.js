class Student { 
    constructor(sId,sName){ 
        this.id = sId;
        this.name = sName;
        this.school = 'Nimtola high School';
    }
}

const student1 = new Student(22,'SR');
const student2 = new Student(33,'Sohan');

console.log(student1,student2);