$(document).ready(function () {
    $(window).scroll(function () {
        $('.logo, .creativity').each(function () {
            var imagePos = $(this).offset().top;
            // alert(imagePos);
            var topOfWindow = $(window).scrollTop();
            //alert(topOfWindow);
            $(this).removeClass("animate slideDown");
            if (imagePos < topOfWindow+400) {
                $(this).addClass("animate slideDown");
            }
        });
    });
    $(window).scroll(function () {
        $('.logo').each(function () {
            var imagePos = $(this).offset().top;
            // alert(imagePos);
            var topOfWindow = $(window).scrollTop();
            //alert(topOfWindow);
            $(this).removeClass("hatch");
            if (topOfWindow > 700) {
                $(this).addClass("hatch");
            }
        });
    });

    $(window).scroll(function () {
        $('.bench').each(function () {
            var imagePos = $(this).offset().top;
            // alert(imagePos);
            var topOfWindow = $(window).scrollTop();
            //alert(topOfWindow);
            $(this).removeClass("bounce");
            if (imagePos < topOfWindow+600) {
                $(this).addClass("bounce");
            }
        });
    });

    $(window).scroll(function () {
        $('.skills-grid-left, .top-service-grid').each(function () {
            var imagePos = $(this).offset().top;
            //alert(imagePos);
            var topOfWindow = $(window).scrollTop();
           //console.log(topOfWindow);
            $(this).removeClass("animate slideRight");
            if (imagePos < topOfWindow+400) {
                $(this).addClass("animate slideRight");
            }
        });
    });

    $(window).scroll(function () {
        $('.skills-grid2-right').each(function () {
            var imagePos = $(this).offset().top;
            //alert(imagePos);
            var topOfWindow = $(window).scrollTop();
           //console.log(topOfWindow);
            $(this).removeClass("animate slideLeft");
            if (imagePos < topOfWindow+400) {
                $(this).addClass("animate slideLeft");
            }
        });
    });

    $(window).scroll(function () {
        $('.workList, .web, .illustrations, .posters, .photography').each(function () {
            var imagePos = $(this).offset().top;
            //alert(imagePos);
            var topOfWindow = $(window).scrollTop();
            //alert(topOfWindow);
            $(this).removeClass("fadeIn");
            if (imagePos < topOfWindow+400) {
                $(this).addClass("fadeIn");
            }
        });
    });

    


    $(window).scroll(function () {
        $('.contact-form').each(function () {
            var imagePos = $(this).offset().top;
            //alert(imagePos);
            var topOfWindow = $(window).scrollTop();
            //alert(topOfWindow);
            $(this).removeClass("animate slideRight");
            if (imagePos < topOfWindow+400) {
                $(this).addClass("animate slideRight");
            }
        });
    });

    $(window).scroll(function () {
        $('.footer-left').each(function () {
            var imagePos = $(this).offset().top;
            //alert(imagePos);
            var topOfWindow = $(window).scrollTop();
            //alert(topOfWindow);
            $(this).removeClass("expandOpen");
            if (imagePos < topOfWindow+600) {
                $(this).addClass("expandOpen");
            }
        });
    });
    // $(window).scroll(function () {
    //     $('.contact').each(function () {
    //         var imagePos = $(this).offset().top;
    //         //alert(imagePos);
    //         var topOfWindow = $(window).scrollTop();
    //         //alert(topOfWindow);
    //         $(this).removeClass("hatch");
    //         if (topOfWindow > 6990) {
    //             $(this).addClass("hatch");
    //         }
    //     });
    // });

    // $(window).scroll(function () {
    //     $('#contact-box1').each(function () {
    //         var imagePos = $(this).offset().top;
    //         //alert(imagePos);
    //         var topOfWindow = $(window).scrollTop();
    //         //alert(topOfWindow);
    //         $(this).removeClass("hatch");
    //         if (topOfWindow > 7100) {
    //             $(this).addClass("hatch");
    //         }
    //     });
    // });

    // $(window).scroll(function () {
    //     $('#contact-box2').each(function () {
    //         var imagePos = $(this).offset().top;
    //         //alert(imagePos);
    //         var topOfWindow = $(window).scrollTop();
    //         //alert(topOfWindow);
    //         $(this).removeClass("hatch");
    //         if (topOfWindow > 7100) {
    //             $(this).addClass("hatch");
    //         }
    //     });
    // });

    // $(window).scroll(function () {
    //     $('#contact-box3').each(function () {
    //         var imagePos = $(this).offset().top;
    //         //alert(imagePos);
    //         var topOfWindow = $(window).scrollTop();
    //         //alert(topOfWindow);
    //         $(this).removeClass("hatch");
    //         if (topOfWindow > 7100) {
    //             $(this).addClass("hatch");
    //         }
    //     });
    // });

    // $(window).scroll(function () {
    //     $('#ufo1').each(function () {
    //         var imagePos = $(this).offset().top;
    //         //alert(imagePos);
    //         var topOfWindow = $(window).scrollTop();
    //         //alert(topOfWindow);
    //         $(this).removeClass("hatch");
    //         if (topOfWindow > 1190) {
    //             $(this).addClass("hatch");
    //         }
    //     });
    // });

    // $(window).scroll(function () {
    //     $('#ufo2').each(function () {
    //         var imagePos = $(this).offset().top;
    //         //alert(imagePos);
    //         var topOfWindow = $(window).scrollTop();
    //         //alert(topOfWindow);
    //         $(this).removeClass("animate slideUp");
    //         if (topOfWindow > 2290) {
    //             $(this).addClass("animate slideUp");
    //         }
    //     });
    // });

    // $(window).scroll(function () {
    //     $('#ufo3').each(function () {
    //         var imagePos = $(this).offset().top;
    //         //alert(imagePos);
    //         var topOfWindow = $(window).scrollTop();
    //         //alert(topOfWindow);
    //         $(this).removeClass("slideDown ");
    //         if (topOfWindow > 5100) {
    //             $(this).addClass("slideDown");
    //         }
    //     });
    // });

});