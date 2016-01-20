//함수 스코프 외부에서 내부 함수 호출하는 예제
function parent() {
	var a = 100;
	//child() 내부 함수
	var child = function() {
		console.log(a);
	}

	return child;
}

var inner = parent();
inner();