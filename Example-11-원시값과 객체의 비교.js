
// 예제 11-01
const t = {a : 2}; //const로 할당한 변수는 재할당이 금지지만
t.a = 1; //const로 할당한 객체는 변경가능하다.

console.log(t);

/* t = {a:3} */ //이렇게 자체접근하면 오류


// 예제 11-03
var str = 'hello';
str = 'world'; //메모리에 hello와 world 둘다 존재

//예제 11-05
var str = 'hello';
str[0] = 'S';
console.log(str); //0번째에 접근해도 바뀌지 않는다. 그대로 hello 출력. 문자열은 원시값이기 때문

//예제 11-07 값에 의한 전달
var score = 80;
var copy = score;

console.log(copy);//80

score = 100; //copy와 score는 서로 다른 메모리 공간에 저장된 별개의 값이다
console.log(copy);//80


//예제 11-14 얇은복사와 깊은 복사
const a = {x : {y : 1}};

const c1 = {...a};
console.log(c1 === a); //false
console.log(c1.x === a.x); //true

const _ = require('lodash');
const c2 = _.cloneDeep(a);
console.log(c2 === a); //false
console.log(c2.x === a.x); //false



import pkg from 'lodash'; //package.json 에 "type" : "module" 해주고 씀
const {cloneDeep} = pkg;
const a = 10;
const b = cloneDeep(a);
console.log(b);


