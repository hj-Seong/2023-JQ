// html head에 cdn으로 값을 가져온후 
// 다른 JS에서도 제이쿼리에 접근할 수 있다

// .css() 를 이용해서 style값을 바꿀수 있다
$("#header").css("color","blue");
// 값을 여러개 넣고 싶을때는 객체 형태로 작성
// 속성이름을 적을때 -있다면 첫글자 대문자로 작성
// 값안에 변수나 자바스크립트 계산식을 적고싶다면 `${}` 이용가능
$("#header").css({ 
    "backgroundColor":"gray",
    "fontSize":`${3}rem`
});

// 버튼을 클릭했을때, hidden 클래스 추가
$("#btn").on("click", function() {
    // 형제 태그를 통해서 p태그를 찾고 클래스 추가
    // this통해서 현재 이벤트가 실행된 태그를 가져올 수 있다
    $(this).prev().addClass("hidden");
    console.log($(this));
})

// 버튼을 클릭했을때, header가 숨김/보임
$("#toggle-button").on("click", function() {
    $("#header").toggleClass("hidden");
})

// todo의 input를 클릭했을때 체크 유무에 따라서 
// 디자인을 바꿈
$("#todo input[type='checkbox']").on("click", function(e) {
    // 제이쿼리를 사용하면서 자바스크립트의 내용사용가능
    console.log(e.target.checked);

    // this를 통해서 이벤트가 발행한 태그를 가져올 수 있음
    // .prop(속성이름)을 통해서 속성값을 가져올 수 있다
    console.log($(this).prop("checked"));

    if(e.target.checked) {
        $("#todo").css("color","gray").addClass("checked");
    }else {
        $("#todo").css("color","").removeClass("checked");
    }
})