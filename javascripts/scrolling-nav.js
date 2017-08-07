$(document).ready(function(){

//=======================================
// Scroll Functions 
//=======================================

    var wHeight = $(window).height();
    var wWidth = $(window).width();
    var body = $("body");
    var scroll = body.scrollTop();


    //---------------------------------------
    // Scroll Button
    //---------------------------------------


    var Adjust_SectionSize = function(){
        if(wWidth > 768){
            $(".scroll-section").css("height",wHeight+"px");
        }else{
            $(".scroll-section").css("height","auto");
            $(".sec-resize").css("height",wHeight+"px");
        }
    }

    Adjust_SectionSize();
    $( window ).resize(function() {
        scroll = body.scrollTop()
        wHeight = $(window).height();
        Adjust_SectionSize();
    });


    $(window).scroll(function(event){
        scroll = $(this).scrollTop();
        // $("#test").html( scroll+"px");

        var lastPage = $(document).height() - wHeight;
        if ( scroll == lastPage) {
            $(".btn-circle").find("#icon").attr('class', 'fa fa-angle-double-up fa-lg');
        }else{
            $(".btn-circle").find("#icon").attr('class', 'fa fa-angle-double-down fa-lg');
        }
    });

    $(".btn-circle").click(
        function(){
            var recentPage = Math.floor(scroll/wHeight)+1;

            goToPage(recentPage+1);
            //$("#test").html( "page"+recentPage);
        }
    );


    var goToPage = function($page){
             var scrollTo = ($page-1)*wHeight;
             var lastPage = $(document).height() - wHeight;
             // $("#test").html( "go to page:"+ $page + " scroll" + scrollTo);

             if (scroll == lastPage) {
                $("html, body").animate({ scrollTop: 0 }, 600);
             }else{
                $("html, body").animate({ scrollTop: scrollTo }, 600);
             }

    }

});
