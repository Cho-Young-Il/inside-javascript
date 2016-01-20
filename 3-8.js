//for in 문을 통한 객체 프로퍼티 출력
//객체 리터럴을 통한 foo객체 생성
var foo = {
	name : "foo",
	age : 30,
	major : "computer"
}

//for in 문을 이용한 객체 프로퍼티 출력
var prop;
for(prop in foo) {
	console.log(prop, foo[prop]);
}

