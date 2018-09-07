/* Found on stackoverflow */

$(document).ready(function() {


function loop1() {
        $('.cloud1').css({left:-700});
        $('.cloud1').animate ({
            left: '+=2800',
        }, 32000, 'linear', function() {
            loop1();
        });
    }
loop1();

function loop2() {
        $('.cloud2').css({left:-1200});
        $('.cloud2').animate ({
            left: '+=3300',
        }, 36000, 'linear', function() {
            loop2();
        });
    }
loop2();

function loop3() {
        $('.cloud3').css({left:-400});
        $('.cloud3').animate ({
            left: '+=2500',
        }, 38000, 'linear', function() {
            loop3();
        });
    }
loop3();     


$(".bear").on("mouseenter", function(){
    $(".box").stop().hide().fadeIn("slow");
})

$(".bear").on("mouseleave", function(){
    $(".box").stop().fadeOut(700);
})

$(".tent1").on("mouseenter", function(){
    $(".box1").stop().hide().fadeIn("slow");
})

$(".tent1").on("mouseleave", function(){
    $(".box1").stop().fadeOut(700);
})

$(".fire").on("mouseenter", function(){
    $(".box2").stop().hide().fadeIn("slow");
})

$(".fire").on("mouseleave", function(){
    $(".box2").stop().fadeOut(700);
})

$(".tree1").on("mouseenter", function(){
    $(".box3").stop().hide().fadeIn("slow");
})

$(".tree1").on("mouseleave", function(){
    $(".box3").stop().fadeOut(700);
})

});

