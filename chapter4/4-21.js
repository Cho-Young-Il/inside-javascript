//함수 형식에 맞춰 인자를 넘기지 않더라도
//함수 호출이 가능함을 나타내는 예제
function func(arg1, arg2) {
	console.log(arg1, arg2);
}

func();
func(1);
func(1, 2);
func(1, 2, 3);