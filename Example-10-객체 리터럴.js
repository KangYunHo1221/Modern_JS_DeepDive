// 예제 10-01
var person = {
    name : 'Kee',
    sayHello: function(){
        console.log(`Hello! my name is ${this.name}`);
    }
};

console.log(typeof person); //object
console.log(person); // {name:kee, sayHello: f}

//예제 10-03
var person = {
    name : 'Lee', //각각이 프로퍼티
    age: 20 //중괄호 내에서는 ; 필요없음
}


//예제 10-06 동적생성
var obj = {};
var key = 'hello';

obj[key] = 'world' // 프로퍼티와 키 동적생성
console.log(obj); //{hello:'world}


//예제 10-11 메서드
var circle = {
    radius : 5, //프로퍼티
    getDiameter: function(){ //메서드
        return 2*this.radius;
    }
};

console.log(circle.getDiameter); //10


//예제 10-12 접근법
var person = {
    name : 'Lee'
};

console.log(person.name); //Lee
console.log(person['name']); //Lee
/*console.log(person[name]); */ // error
console.log(person.age); //undefined


//예제 10-16 프로퍼티 갱신
var person = {
    name : 'Lee'
};

person.name = 'Kim';
console.log(person); //{name : 'Kim'}


//예제 10-18 프로퍼티 삭제
var person = {
    name : 'Lee'
};

delete person.name;

//예제 10-20 프로퍼티값이 변수인 경우
let x=1, y=2;
const obj = {x, y};

console.log(obj); //{x:1, y:2}


//예제 10-21 프로퍼티 동적생성
var prefix = 'prop';
var i = 0;

var obj = {};

obj[prefix+'-'+ ++i] = i;
obj[prefix+'-'+ ++i] = i;
obj[prefix+'-'+ ++i] = i;

console.log(obj); // {prop-1: 1, prop-2 : 2, prop-3 : 3}



//예제 10-23 메서드 축약표현
//아래 두개는 같은 표현임
var obj = {
    name : 'Lee',
    sayHi : function(){
        console.log('hi! ' + this.name);
    }
};

const obj = {
    name : 'Lee',
    sayHi(){
        console.log('hi! ' + this.name);
    }
};

obj.sayHi();