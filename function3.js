function Person(name,age){
    this.name=name;
    this.age=age;

    this.info=()=>{
        return `name:${name},age:${age}`
    }
}

var person = new Person("kim",10);
console.log(person.info());