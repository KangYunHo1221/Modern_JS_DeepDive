//예제 08-01
{
    var foo = 10;
}

var x = 1;
if(x<10){
    x++;
}

function sum(a,b){
    return a+b;
}


//예제 08-02
var num = 2;
var kind;
if (num > 0){
    kind = '양수';
}
else{
    kind = '음수';
}


//예제 08-10
for(var i=0; i<2; i++){
    console.log(i);
}

//예제 08-20
foo : {
    console.log(1);
    break foo; //escape from foo
    console.log(2); //already escaped
}

//예제 08-21
outer : for(var i=0; i<3; i++){
    for(var j=0; j<3; j++){
        if (i+j ===3){
            break outer;
        }
        console.log(`inner [${i}, ${j}]`);
    }
}


//예제 08-23 
var string = 'Hello World';
var search = 't';
var count = 0;

for(var i = 0; i < string.length; i++){
    if (string[i] !== search) continue;
    count ++;
}

//예제 08-23과 같은 코드
const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length); //3