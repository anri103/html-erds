(function ($) {
    "use strict";

    // On Load
    $(window).on("load", function () {
        preloader();
        wowAnimation();
    });

    // On Ready
    $(document).ready(function () {

        // Phone mask
        $('.maskPhone').each(function () {
            IMask(this, {
                mask: '+{7} (000) 000-00-00'
            });
        });

        // Fancybox
        Fancybox.bind("[data-fancybox]", {});

        // Mobile nav — close offcanvas on anchor link click
        $('#mobileNav a[href^="#"]').on('click', function (e) {
            var href = $(this).attr('href');
            var $target = $(href);
            if (!$target.length) return;

            e.preventDefault();

            var $offcanvasEl = $('#offcanvasMobileMenu');
            var offcanvas = $offcanvasEl.length && bootstrap.Offcanvas.getInstance($offcanvasEl[0]);

            if (offcanvas && $offcanvasEl.hasClass('show')) {
                $offcanvasEl.one('hidden.bs.offcanvas', function () {
                    $('html, body').animate({ scrollTop: $target.offset().top }, 500);
                });
                offcanvas.hide();
            }
        });

    });

    // Preloader
    function preloader() {
        $(".preloader").addClass('loaded');
        $(".preloader").delay(600).fadeOut();
    }

    // WOW Animation
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }

})(jQuery);