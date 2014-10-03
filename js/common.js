
//rollover
$(function(){
  $("img[src*='_on']").addClass("over");

  $("img").hover(function(){
    if ($(this).attr("src")){
      $(this).attr("src",$(this).attr("src").replace("_off.", "_on."));
            $(this).attr("src",$(this).attr("src").replace("_o.", "_h."));
    }
  },function(){
    if ($(this).attr("src") && !$(this).hasClass("over") ){
      $(this).attr("src",$(this).attr("src").replace("_on.", "_off."));
            $(this).attr("src",$(this).attr("src").replace("_h.", "_o."));
    }
  });
});


//スクロール
$(function(){
  //ページ内
  $('a[href^=#]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    position = position -25;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});


$(document).ready(function(){

    $(".gotop").hide();

    $(window).scroll(function () {

       if ( $(this).scrollTop() > 100 ) {
           $('.gotop').slideDown("fast");
       } else {
           $('.gotop').slideUp("fast");
       }
    });


    $(window).bind("scroll", function() {

        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        footHeight = $("#footer").innerHeight();

        if ( scrollHeight - scrollPosition  <= footHeight ) {
            $(".gotop").css({
                "position":"absolute",
                "bottom": footHeight
            });
        } else {
            $(".gotop").css({
                "position":"fixed",
                "bottom": "0"
            });
        }
    });

    $('.gotop a').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 500);
        return false;
    });

});
