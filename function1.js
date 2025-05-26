function User(name){ //생성자 함수,대문자로 시작한다. 반드시 new연산자를 붙여 사용함.
    this.name=name;
    this.sayHello = ()=> console.log(`hello ${this.name}`); //return this; //this가 암묵적으로 반환됌
}

var user = new User("hong");
user.sayHello();

