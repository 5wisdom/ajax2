$(document).ready(function(){
    $("#member").submit(function(){ //회원가입이라는 버튼을 클릭했을때 전송(summit)이 진행->?submit function임 
        var $confirm = $(this).serialize();//폼 내부의 요소에 전송할 데이터를 재가공->암호화됨(따라서 패스워드에 많이사용)->그래서 php에서 utf-8bom으로 땡겨옴
        console.log($confirm);
        $.ajax({ //$.ajax({  }) -> ajax형식 
            url : "member.php", //데이터를 전송 및 요청 할 URL 주소, 끝에 꼭 , 찍기
            type : "post", //데이터 전송 방식(get(방식노출) 또는 post(방식숨김))
            data : $confirm, //전송할 데이터
            success : function(result){ //ajax로 통신이 완료되고, 전송이 정상적으로 진행 되었을 때 함수문을 실행
                $("#user").html(result); //통신에 성공하면 html(text) 넣어줘라
            } 
        });
        return false; //"회원가입"이라는 버튼을 클릭했을때, action 페이지로 전환되는 것을 막음
    });
});