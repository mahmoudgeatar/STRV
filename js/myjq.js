$(function (){
    "use strict";
    $(".home").height($(window).height());
    $(window).resize(function(){
      $(".home").height($(window).height());
    });

    $(window).scroll(function auto(){
      if($(window).scrollTop()>=20){
      $(".navbar").css({'background-color':'#212529'});
      }else{
        $(".navbar").css({'background-color':'transparent'});
      }
    });


    // fadi the buttom and fade out
 $(window).scroll(function(){

  if($(window).scrollTop()>=600){

  $(".scroll").fadeIn(400);

}else {

  $(".scroll").fadeOut(400);

}
});

// clik the button to go top
$(".scroll").click(function(e){

e.preventDefault();

$("body, html").animate({

 scrollTop:0
}, 1500)

});


//   nav bar move to section

$(".navbar li a").click(function(e){

  e.preventDefault();

    $("body, html").animate({

      scrollTop:$("#" + $(this).data("value")).offset().top + 1}, 1000)

    });





});












