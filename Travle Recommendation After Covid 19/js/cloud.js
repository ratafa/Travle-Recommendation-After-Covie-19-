window.onload = function(){

    var h1 = document.querySelector(".h1");
    
    for(var i=0; i < h1.querySelectorAll('.inline').length; i++){
        
        var _text = h1.querySelectorAll('.inline')[i];

        TweenMax.from( _text , 1, {
            autoAlpha:0,
            delay : Math.random()*1,
            ease:Power3.easeInOut 
        });
    }
}


