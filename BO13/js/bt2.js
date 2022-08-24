let size
$(document).ready(function () {
    $('.flex #big').click(function (e) { 
        e.preventDefault();
        $('h1').css('font-size', '+=30px');
    });
    $('.flex #small').click(function (e) { 
        e.preventDefault();
        $('h1').css('font-size', '-=10px');
    });

    // $('.box1').click(function (e) { 
    //     e.preventDefault();
    //     $('h1').css('color',' gray');
    // });
    // $('.box2').click(function (e) { 
    //     e.preventDefault();
    //     $('h1').css('color',' blue');
    // });
    // $('.box3').click(function (e) { 
    //     e.preventDefault();
    //     $('h1').css('color',' red');
    // });
    // $('.box4').click(function (e) { 
    //     e.preventDefault();
    //     $('h1').css('color',' yellow');
    // });
    // const box=$('.box')
    // console.log(box);
   
    $('.box').click(function (e) { 
        e.preventDefault();
        // console.log(this);
        var color=$('.box').css('backgroundColor');
        console.log(color);
        
        $('h1').css('color',color);
    });      
    // });
});