$(document).ready(function () {
    var options = {
        speed: 1000,
        parallax: true,
        loop: true,
        centerSlides: true,
        on: {
            init: function () {
                let swiper = this;
                for (let i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i]).find('.img-container').attr({
                        'data-swiper-parallax': 0.75 * swiper.width,
                        // 'data-swiper-parallax-opacity': 0.5

                    });
                }
            }
        }
    };
    var parallaxSlider = new Swiper('.parallax-slider', options);
    $(window).on('resize', function () {
        parallaxSlider.destroy();
        parallaxSlider = new Swiper('.parallax-slider', options)
    });
});