function sum(){
    var f = document.sungjukForm;
    var score =document.getElementById('score1');
    var score1 =document.getElementById('score2');
    
    
    var sum = Number(f.korean.value)
     + Number(f.eng.value)
     + Number(f.math.value)
     + Number(f.sceince.value)
     + Number(f.history.value);
     var avg = sum/5;
    if(!isNaN(f.name.value)){
        alert("이름을 똑바로 입력하세요.")
        f.name.select();
        f.name.focus();
        return;
    }
    if(f.korean.value==""||f.korean.value<0||f.korean.value>100||isNaN(f.korean.value)){
        alert('국어점수를 바르게 입력하세요.');
        f.korean.select();
        f.korean.focus();
        return;
    }
    if(f.eng.value==""||f.eng.value<0||f.eng.value>100||isNaN(f.eng.value)){
        alert('영어점수를 바르게 입력하세요.');
        f.eng.select();
        f.eng.focus();
        return;
    }
    if(f.math.value==""||f.math.value<0||f.math.value>100||isNaN(f.math.value)){
        alert('수학점수를 바르게 입력하세요.');
        f.math.select();
        f.math.focus();
        return;
    }
    if(f.sceince.value==""||f.sceince.value<0||f.sceince.value>100||isNaN(f.sceince.value)){
        alert('과학점수를 바르게 입력하세요.');
        f.sceince.select();
        f.sceince.focus();
        return;
    }
    if(f.history.value==""||f.history.value<0||f.history.value>100||isNaN(f.history.value)){
        alert('역사점수를 바르게 입력하세요.');
        f.history.select();
        f.history.focus();
        return;
    }
    
    score.style.display = 'inline';
    score1.style.display = 'inline';
    document.getElementById('bt1').style.display = 'none';
    f.sum1.value = sum;
    f.avg1.value = avg;
    f.submit();
}
