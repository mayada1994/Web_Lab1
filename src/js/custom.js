import $ from "jquery";
import WOW from 'wowjs';
import './bootstrap.min';

/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
export default function startApp() {
    $(function(){
        /* start navigation top js */
        $(window).scroll(function(){
            if($(this).scrollTop()>58){
                $(".templatemo-nav").addClass("sticky");
            }
            else{
                $(".templatemo-nav").removeClass("sticky");
            }
        });
        
        /* Hide mobile menu after clicking on a link
        -----------------------------------------------*/
        $('.navbar-collapse a').click(function(){
            $(".navbar-collapse").collapse('hide');
        });
        /* end navigation top js */

        $('body').on('touchstart click', function() {});

        /* wow
        -----------------*/
        new WOW().init();
    });

    /* start preloader */
    $(window).on('load', function() {
        $('.preloader').fadeOut(1000); // set duration in brackets    
    });
    /* end preloader */
}