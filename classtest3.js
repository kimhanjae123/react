class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    info(){
        return `이름 : ${this.name}, 나이 : ${this.age}`;
    }
}

class Student extends Person{
    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
    }

    info(){
        return super.info()+`,학과:${this.subject}`;
    }
}

var person = new Person("김길동",11);
console.log(person.info());

var student = new Student("홍길동",10,"햇님반");
console.log(student.info());
 