var test = "this is test";
console.log(window.test);

//sayFoo() 함수
var sayFoo = function() {
	console.log(this.test);
}

sayFoo();