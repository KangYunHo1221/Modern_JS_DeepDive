/* 
오해하기 쉬운 부분
console.log 를 실행하면서 안에 있는 score를 선언해서 오류가 안나는 것이 아니라,
JS엔진이 한줄씩 파싱하기 전에 미리 평가를 거치는데 그때 선언문을 먼저 실행해서 효율성을 높임. => 호이스팅이라고 한다..

그래서 밑에 있는 선언문(var score)이 먼저 실행됐기 때문에 에러가 아닌 undefined 가 뜨는 것.
선언만 하고 할당은 안해서 10이 아니라 undefined임
*/

console.log(score);

var score = 10;