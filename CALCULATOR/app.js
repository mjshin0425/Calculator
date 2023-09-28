let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".btn_clear");
let equal = document.querySelector(".btn_equal");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let value = e.target.dataset.num ?? ""; // nullish 좌항이 null or unde인 경우 우항을 반환
    screen.value += value;
    console.log(value);
  });
});

equal.addEventListener("click", function (e) {
  if (screen.value === "") {
    screen.value === "";
  } else {
    let answer = eval(screen.value);
    screen.value = answer;
  }
});

clear.addEventListener("click", function (e) {
  screen.value = "";
});

// document.addEventListener("DOMContentLoaded", function () {
//   /*copy paste the already typed code here*/
// });

// "" || "?" 펄시 값이여서 우항으로 감
// "" ?? "?" 널리쉬는 널이나 언디 일떄만 우항으로 감
// 사용자 입력 값이 없으면 널이 뜸. 이 경우에 원하는 값으로 지정해주고 싶을 때 널리쉬 연산자 ?? 를 쓸 수 있음.
// 옵셔널 체이닝 ?. 값이 없으면 언디파인드로 바꿔서 오류를 띄우지 않고 넘어감.
