//생성자 함수에서 명시적으로 기본타입(불린, 숫자, 문자열)
//값을 리턴했을 경우

function Person(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;

	return 100;
}

var foo = new Person("foo", 30, "man");
console.log(foo);