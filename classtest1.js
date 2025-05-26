class User{
    constructor(name){
        this.name=name; 
    }

    sayHello(){
        console.log(`hello ${this.name}`);
    }
}

let user2 = class { //클래스 표현식
    sayHi(){
        console.log("안녕하세요?");
    }
}

new user2().sayHi();