document.addEventListener('DOMContentLoaded', () => {

    // Scrollable header
    // function toggleScrollClass() {
    //     const windowScroll = window.scrollY || window.pageYOffset;
    //     const fixedMenu = document.querySelectorAll('.header-row');

    //     if (windowScroll > 200) {
    //         fixedMenu.forEach(row => {
    //             row.classList.add('js-scrollable');
    //         });
    //     } else {
    //         fixedMenu.forEach(row => {
    //             row.classList.remove('js-scrollable');
    //         });
    //     }
    // }
    // toggleScrollClass();
    // window.addEventListener('scroll', toggleScrollClass);

    // Scrollspy
    // const isMobile = () => window.matchMedia('(max-width: 1399px)').matches;
    // const getOffset = () => isMobile() ? 80 : 90;

    // const scrollToTarget = (target) => {
    //     const y = target.getBoundingClientRect().top + window.scrollY - getOffset();
    //     window.scrollTo({ top: y, behavior: 'smooth' });
    // };

    // const links = document.querySelectorAll(
    //     '#primaryNav a[href^="#"], #mobileNav a[href^="#"]'
    // );

    // links.forEach(link => {
    //     link.addEventListener('click', e => {
    //         const target = document.querySelector(link.getAttribute('href'));
    //         if (!target) return;

    //         e.preventDefault();

    //         const offcanvasEl = document.getElementById('offcanvasMobileMenu');
    //         const offcanvas = offcanvasEl && bootstrap.Offcanvas.getInstance(offcanvasEl);

    //         if (offcanvas && offcanvasEl.classList.contains('show')) {
    //             offcanvasEl.addEventListener('hidden.bs.offcanvas', () => {
    //                 scrollToTarget(target);
    //             }, { once: true });

    //             offcanvas.hide();
    //         } else {
    //             scrollToTarget(target);
    //         }
    //     });
    // });

    //phone mask
    const maskPhone = document.querySelectorAll('.maskPhone')
    maskPhone.forEach(function (el) {
        IMask(el, {
            mask: '+{7} (000) 000-00-00'
        });
    });

    // Fancybox
    Fancybox.bind("[data-fancybox]", {});

    // swiperTeamMobile
    const swiperTeamMobile = document.querySelector('.swiperTeamMobile');
    if (swiperTeamMobile) {
        new Swiper('.swiperTeamMobile', {
            slidesPerView: 'auto',
            spaceBetween: 8,
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: '.btn-swiper-next',
                prevEl: '.btn-swiper-prev',
            }
        });
    }

});

// jQuery Animations

(function ($) {
    "use strict";

    // On Load Function
    $(window).on("load", function () {
        preloader();
        wowAnimation();
    });

    // Wow Active
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

    // Preloader
    function preloader() {
        $(".preloader").addClass('loaded');
        $(".preloader").delay(600).fadeOut();
    };

})(jQuery);