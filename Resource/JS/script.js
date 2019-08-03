$(document).ready(
    function () {
        $('.trip').waypoint(
            function (direction) {
                if (direction == "down") {
                    $('nav').addClass('sticky');
                } if (direction=="up"){
                    $('nav').removeClass('sticky');
                }
            }, {
                offset: '600px'
            }
        )

        $('a').click(function (event) {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
            event.preventDefault();
        });

        $('.mobile-nav-icon').click(
            function(){
                $('.noti').slideToggle(200);
                
                if($('.mobile-nav-icon').hasClass('fa-bars')){
                    $('.mobile-nav-icon').addClass('fa-times');
                    $('.mobile-nav-icon').removeClass('fa-bars');
                }
                else{
                    $('.mobile-nav-icon').addClass('fa-bars');
                    $('.mobile-nav-icon').removeClass('fa-times');
                }
            }
        )
    }
)