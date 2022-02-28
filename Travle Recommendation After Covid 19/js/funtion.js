// 원본
function start(){
    $(".start").hide();
    $(".questions").show();
    next();
}

$("#A").click(function(){
let type = $("#type").val();
let preValue = $("#"+type).val();
$("#"+type).val(parseInt(preValue)+1);
next();
})

$("#B").click(function(){
    next();
})

 
 
function next(){
    if(num===13){
        $(".questions").hide();
        $(".result").show();
        $(".ad").show();
        let mbti = "";
        ($("#EI").val() > 1 ) ? mbti+="E" : mbti+="I";
        ($("#SN").val() > 1 ) ? mbti+="S" : mbti+="N";
        ($("#TF").val() > 1 ) ? mbti+="T" : mbti+="F";
        ($("#JP").val() > 1 ) ? mbti+="J" : mbti+="P";
        $("#img").attr("src",result[mbti]["img"]);
        $("#animalName").html(result[mbti]["animal"]);
        $("#explain").html(result[mbti]["explain"]);
        $("#city").html(result[mbti]["city"]);
        $("body").attr('style', 'height: 200vh')
        resultView();
    } else{
    $("#progress").attr('style', 'width: calc(100/12*'+num+'%)')
    $("#questions").html(q[num]["questions"]);
    $("#title").html(q[num]["title"]);
    $("#type").val(q[num]["type"]);
    $("#A").html(q[num]["A"]);
    $("#B").html(q[num]["B"]);
    $("body").attr('style', 'height: 100vh')
    num++;
    }
};

function resultView () {
    if(num===13) {
        document.body.style.display = "block";
        document.body.style.background = "#8bc7f7";
        // document.body.style.background = "url('./image/resultBg.jpg')";
        // document.body.style.backgroundSize = "cover";
        // document.body.style.backgroundRepeat = "no-repeat";
    }
};