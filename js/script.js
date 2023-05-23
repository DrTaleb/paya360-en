let backTop = document.querySelector(".back-top");
// Navbar
document.addEventListener("DOMContentLoaded", function () {
    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {
        // close all inner dropdowns when parent is closed
        document
            .querySelectorAll(".navbar .dropdown")
            .forEach(function (everydropdown) {
                everydropdown.addEventListener("hidden.bs.dropdown", function () {
                    // after dropdown is hidden, then find all submenus
                    this.querySelectorAll(".submenu").forEach(function (everysubmenu) {
                        // hide every submenu as well
                        everysubmenu.style.display = "none";
                    });
                });
            });

        document.querySelectorAll(".dropdown-menu a").forEach(function (element) {
            element.addEventListener("click", function (e) {
                let nextEl = this.nextElementSibling;
                if (nextEl && nextEl.classList.contains("submenu")) {
                    // prevent opening link if link needs to open dropdown
                    e.preventDefault();
                    if (nextEl.style.display === "block") {
                        nextEl.style.display = "none";
                    } else {
                        nextEl.style.display = "block";
                    }
                }
            });
        });
    }
    // end if innerWidth
});

// AOS PLUGIN
AOS.init();
//  carousel blog
window.onscroll = function () {
    if (pageYOffset > 100) {
        $(".back-top").show()
    } else {
        $(".back-top").hide(200)
    }
};

function backtotop() {
    window.scrollTo(0, 0);
}

//forms bootstrap
(() => {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();

// blog slice text characters
let blogdescription = document.querySelectorAll(".card p.card-text")
blogdescription.forEach(items => {
    let numberOfWords = 200
    let textslice = items.textContent.trim()
    textslice = textslice.slice(0, numberOfWords)
    items.innerHTML = ""
    items.innerHTML = textslice + "....."
});


var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
        invert: false,
    },
    // autoHeight: true,
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    }
});
$(document).ready(function ($) {
    $(".navigation-menu-").hide()
    $(".my-dropdown-item").hide()
    $(".nav-item-3-sm").click(function () {
        $(".menu-3-sm").slideToggle(200);
        $(".menu-1-sm").slideUp(200);
        $(".menu-2-sm").slideUp(200);
        $(".menu-4-sm").slideUp(200);
    })

    $(".menu-icon").click(function () {
        $(this).toggleClass("active");
        $(".navigation-menu").toggleClass("active");
        $(".menu-icon i").toggleClass("fa-times");
        $(".menu-2-sm").hide(200);
        $(".menu-1-sm").hide(200);
        $(".menu-3-sm").hide(200);
        $(".navigation-menu-").toggle(300)
    });
});
jQuery(window).on("load", function () {
    jQuery(".loader").fadeOut(500);
});
$('.owl-carousel-').owlCarousel({
    autoplay: true,
    margin: 20,
    rtl: true,
    responsiveClass: true,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2,
        },
        576: {
            items: 3,
        },
        768: {
            items: 3,
        },
        992: {
            items: 4,
        },
        1200: {
            items: 6,
        }
    }
})
$('.owl-carousel-2').owlCarousel({
    autoplay: true,
    margin: 40,
    rtl: true,
    responsiveClass: true,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2,
        },
        576: {
            items: 2,
        },
        768: {
            items: 3,
        },
        992: {
            items: 4,
        }
    }
})
$('.owl-carousel-3').owlCarousel({
    autoplay: true,
    margin: 70,
    rtl: true,
    responsiveClass: true,
    loop: true,
    responsive: {
        0: {
            items: 3,
        },
        576: {
            items: 4,
        },
        768: {
            items: 6,
        },
        992: {
            items: 7,
        }
    }
})
$('.owl-carousel-4').owlCarousel({
    autoplay: true,
    margin: 70,
    rtl: true,
    responsiveClass: true,
    loop: false,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
        768: {
            items: 1,
        },
        992: {
            items: 2,
        },
        1200: {
            items: 3,
        }
    }
})
$('.owl-carousel-5').owlCarousel({
    autoplay: true,
    margin: 20,
    rtl: true,
    responsiveClass: true,
    loop: false,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
        768: {
            items: 3,
        },
        992: {
            items: 3,
        }
    }
})

// ----------------------guidePanel
function guidePanel() {
    const b = document.querySelectorAll(".guide-panel-btns > div").length;
    for (let v = 1; v <= b;) {
        let x = "guidePanel" + "" + v;
        $(".guide-panel-btns > div:nth-of-type(" + v + ")").attr({"id": v});
        $(".guide-panel-items > img:nth-of-type(" + v + ")").attr({"id": x});
        v++
    }
}

function disAll() {
    $(".guide-panel-btns > div").removeClass("guide-btn-active");
    $(".guide-panel-items > img").hide();
}

function firstPanel() {
    $(".guide-panel-btns > div:first").addClass("guide-btn-active");
    $(".guide-panel-items > img:first").show();
}

guidePanel();
disAll();
firstPanel();
$(".guide-panel-btns > div").mouseenter(function () {
    let g = $(this).attr("id");
    let j = "#" + "" + "guidePanel" + "" + g;
    disAll();
    $(this).addClass("guide-btn-active");
    $(j).show();
})

// -----------endGuidePanel
// video slider
function videoSlider() {
    let videoCount = document.querySelectorAll(".video-slides > div").length;
    for (let x = 1; x <= videoCount;) {
        let id = "video" + "" + x;
        let x2 = x + 10
        $(".video-slides > div:nth-of-type(" + x + ")").attr({"id": id});
        $(".video-slide:nth-of-type(" + x + ") > div.videos").attr({"id": x2});
        x++
    }
}

function videoInput() {
    $("#video1 > div").clone().appendTo(".video-section-1").removeClass("d-none")
    $("#video2 > div").clone().appendTo(".video-section-2").removeClass("d-none")
    $("#video3 > div").clone().appendTo(".video-section-3").removeClass("d-none")
}

function HideAllVideos() {
    $(".video-section-1").empty()
    $(".video-section-2").empty()
    $(".video-section-3").empty()
}

function videoNextSlide() {
    let videoCount = document.querySelectorAll(".video-slides > div").length + 10;
    let v1 = $(".video-section-1 > div").attr("id")
    let v2 = $(".video-section-2 > div").attr("id")
    let v3 = $(".video-section-3 > div").attr("id")
    if (v3 <= videoCount - 1) {
        v1++
        v2++
        v3++
        let ve1 = "#" + v1
        let ve2 = "#" + v2
        let ve3 = "#" + v3
        HideAllVideos()
        $(ve1).clone().appendTo(".video-section-1").removeClass("d-none")
        $(ve2).clone().appendTo(".video-section-2").removeClass("d-none")
        $(ve3).clone().appendTo(".video-section-3").removeClass("d-none")
    }
}

function videoPrevSlide() {
    let v1 = $(".video-section-1 > div").attr("id")
    let v2 = $(".video-section-2 > div").attr("id")
    let v3 = $(".video-section-3 > div").attr("id")
    if (v1 >= 12) {
        v1--
        v2--
        v3--
        let ve1 = "#" + v1
        let ve2 = "#" + v2
        let ve3 = "#" + v3
        HideAllVideos()
        $(ve1).clone().appendTo(".video-section-1").removeClass("d-none")
        $(ve2).clone().appendTo(".video-section-2").removeClass("d-none")
        $(ve3).clone().appendTo(".video-section-3").removeClass("d-none")
    }
}

videoSlider()
videoInput()
$(".video-next-btn").click(function () {
    videoNextSlide()
})
$(".video-prev-btn").click(function () {
    videoPrevSlide()
})

// Get a reference to the <path>
var path = document.querySelector('#star-path');

// Get length of path... ~577px in this case
var pathLength = path.getTotalLength();

// Make very long dashes (the length of the path itself)
path.style.strokeDasharray = pathLength + ' ' + pathLength;

// Offset the dashes so the it appears hidden entirely
path.style.strokeDashoffset = pathLength;

// Jake Archibald says so
// https://jakearchibald.com/2013/animated-line-drawing-svg/
path.getBoundingClientRect();

// When the page scrolls...
window.addEventListener("scroll", function (e) {

    // What % down is it?
    // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
    // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    // Length to offset the dashes
    var drawLength = pathLength * scrollPercentage;

    // Draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;

    // When complete, remove the dash array, otherwise shape isn't quite sharp
    // Accounts for fuzzy math
    if (scrollPercentage >= 0.99) {
        path.style.strokeDasharray = "none";

    } else {
        path.style.strokeDasharray = pathLength + ' ' + pathLength;
    }

});

var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    autoplay: true,
    mousewheel: {
        invert: false,
    },
    // autoHeight: true,
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    }
});
