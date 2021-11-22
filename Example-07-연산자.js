//산술 연산자
5 * 4



//단항 산술 연산자
var x = 1;
x++;
console.log(x);



//문자열을 숫자타입으로 바꾸는 단항 산술연산
var x = '1';
console.log(typeof (+x));

var x = false;
console.log(typeof (x++));




//문자열 연결
console.log('My name is ' + 'lee');

console.log(typeof ('1' + 2)) //2를 문자로 보고 더함 -> 이런식의 강제 타입변환이 많은편이다.. 조심하자



//할당 연산자
color = 'red'

var x = 1;
x += 10;
console.log(x);

var a, b, c,
    a = b = c = 10;
console.log(a, b, c);



//비교 연산자
console.log(5 == 5)
console.log('5' == 5) //암묵적 형변환에 의해 true 반환.. 이런식으로 애매하게 형변환되는 경우 많음 조심해야됨
console.log('5' === 5) //암묵적 형변환 막고 타입까지 같아야 true 반환

isNaN(NaN); //nan===nan 은 false다. nan인지 확인하려면 isNaN 써야함.

var n = null;
n===null; //True다. null은 ===로도 확인가능


//삼항 조건 연산자
var x = 2;
var result = x % 2 ? 'odd' : 'even';
console.log(result); //even

var x = 2;
var result;
if (x % 2) result = 'odd';
else result = 'even';
console.log(result); F

//논리 연산자
true && false

//타입 연산자
typeof 'Hi'
