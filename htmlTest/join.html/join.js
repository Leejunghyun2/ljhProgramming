var f = document.joinForm;
function join(){
  
    if(f.id.value==""){
        alert("아이디를 입력하세요.");
        document.joinForm.id.focus();
        return;
    }
    if(f.passwd.value==""){
        alert("비밀번호를 입력하세요.");
        document.joinForm.passwd.focus();
        return;
    }
    if(f.passwdChk.value==""){
        alert("비밀번호 확인을 입력하세요.");
        document.joinForm.passwd.focus();
        return;
    }
    if(f.passwd.value != f.passwdChk.value){
        alert("비밀번호가 틀립니다 다시 입력해주세요.");
        document.joinForm.passwdChk.value = "";
        document.joinForm.passwd.select();
        document.joinForm.passwd.focus();
        return;
    }
    if(confirm('저장할까요?')){
    f.submit();
    }
}