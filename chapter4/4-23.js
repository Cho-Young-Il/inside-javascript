//메서드 호출 사용시 this바인딩
//myObject 객체 생성
var myObject = {
	name: "foo",
	sayName: function() {
		console.log(this.name);
	}
};

//otherObject 객체 생성
var otherObject = {
	name: "bar"
};

//otherObject.sayName() 메서드
otherObject.sayName = myObject.sayName;

myObject.sayName();
otherObject.sayName();