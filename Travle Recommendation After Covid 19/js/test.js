const startPage = document.querySelector(".start");
// const questions = document.querySelector(".questions");
// let result = document.querySelector(".result");
// let animalImg =  document.querySelector("#img");
// let A = document.querySelector("#A");
// let B = document.querySelector("#B");
// let travleImg = document.querySelector("#travleImg");
// let animalName = document.querySelector("#animalName");
// let explain = document.querySelector("#explain");
// let progress = document.querySelector("#progress");
// let title = document.querySelector("#title");
// let type = document.querySelector("#type").value;
// let city = document.querySelector("#city");


// function start(){
//     startPage.style.display = "none";
//     questions.style.display = "block";
//     next();
// }

// A.addEventListener("click", function() {
//     let preValue = document.querySelector( "#" + type );
//     document.querySelector( "#" + type).value = parseInt(preValue) + 1;
//     next();    
// })

// B.addEventListener("click", function() {
//     next();
// })


// function next(){
//     if(num===13){
//         questions.style.display = "none";
//         result.style.display = "block";
//         let mbti = "";
//         ($("#EI").val() > 1 ) ? mbti+="E" : mbti+="I";
//         ($("#SN").val() > 1 ) ? mbti+="S" : mbti+="N";
//         ($("#TF").val() > 1 ) ? mbti+="T" : mbti+="F";
//         ($("#JP").val() > 1 ) ? mbti+="J" : mbti+="P";
//         animalImg.attr("src",result[mbti]["img"]);
//         animalName.html(result[mbti]["animal"]);
//         animalName.html(result[mbti]["animal"]);
//         explain.html(result[mbti]["explain"]);
//         city.html(result[mbti]["city"]);
//         body.attr('style', 'height: 200vh');
//         resultView();
//     } else{
//     // progress.attr('style', 'width: calc(100/12*'+num+'%)')
//     questions.html(q[num]["questions"]);
//     title.html(q[num]["title"]);
//     type.val(q[num]["type"]);
//     A.html(q[num]["A"]);
//     B.html(q[num]["B"]);
//     num++;
//     }
// };

// function resultView () {
//     if(num===13) {
//         document.body.style.display = "block";
//         // document.body.style.background = "linear-gradient( 135deg, #FFCF71 10%, #2376DD 100%)";
//     }
// };