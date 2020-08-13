<?php //php 호출문 밑에 utf-8 누른후->인코딩저장->utf-8 bom클릭
// echo 작성하겠다 / 끝에 .은 연결하겠다 and개념 /;안찍으면 무조건에러
    echo $_POST["user_name"]."님의 가입을 환영합니다.<br>"; 
    //input태그의 name을 가리킴

    echo $_POST["user_email"];
?>