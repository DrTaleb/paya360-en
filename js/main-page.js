
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
            items: 3,
        },
        768: {
            items: 4,
        },
        992: {
            items: 6,
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
        let x2 = x + 10;
        $(".video-slides > div:nth-of-type(" + x + ")").attr({"id": id});
        $(".video-slide:nth-of-type(" + x + ") > div.videos").attr({"id": x2});
        x++;
    }
    $(".main-video-nav-div > div:first").attr({"id": "v1"}).html("1");
    for (let i = 2; i <= videoCount;) {
        let x = "v" + i;
        $(".main-video-nav-div > div:first").clone().appendTo(".main-video-nav-div").attr({"id": x}).html(i);
        i++;
    }
}

function videoInput() {
    $("#v1").addClass("video-nav-active");
    $("#v2").addClass("video-nav-active");
    $("#v3").addClass("video-nav-active");
    $("#video1 > div").clone().appendTo(".video-section-1").removeClass("d-none");
    $("#video2 > div").clone().appendTo(".video-section-2").removeClass("d-none");
    $("#video3 > div").clone().appendTo(".video-section-3").removeClass("d-none");
}

function HideAllVideos() {
    $(".video-section-1").empty();
    $(".video-section-2").empty();
    $(".video-section-3").empty();
}

function videoNextSlide() {
    let videoCount = document.querySelectorAll(".video-slides > div").length + 10;
    let v1 = $(".video-section-1 > div").attr("id");
    let v2 = $(".video-section-2 > div").attr("id");
    let v3 = $(".video-section-3 > div").attr("id");
    if (v3 == 20){
      v1 = 10
      v2 = 11
      v3 = 12
    }

    if (v3 <= videoCount - 1) {
        $(".video-nav").removeClass("video-nav-active");
        v1++;
        v2++;
        v3++;
        let nav1 = v1 - 10;
        let nav2 = v2 - 10;
        let nav3 = v3 - 10;
        let ve1 = "#" + v1;
        let ve2 = "#" + v2;
        let ve3 = "#" + v3;
        HideAllVideos();
        $(ve1).clone().appendTo(".video-section-1").removeClass("d-none");
        $(ve2).clone().appendTo(".video-section-2").removeClass("d-none");
        $(ve3).clone().appendTo(".video-section-3").removeClass("d-none");
        $(".video-nav:nth-of-type(" + nav1 + ")").addClass("video-nav-active");
        $(".video-nav:nth-of-type(" + nav2 + ")").addClass("video-nav-active");
        $(".video-nav:nth-of-type(" + nav3 + ")").addClass("video-nav-active");

    }

}

function videoPrevSlide() {
    let v1 = $(".video-section-1 > div").attr("id");
    let v2 = $(".video-section-2 > div").attr("id");
    let v3 = $(".video-section-3 > div").attr("id");
    $(".video-nav").removeClass("video-nav-active");
    if (v1 >= 12) {
        v1--;
        v2--;
        v3--;
        let nav1 = v1 - 10;
        let nav2 = v2 - 10;
        let nav3 = v3 - 10;
        let ve1 = "#" + v1;
        let ve2 = "#" + v2;
        let ve3 = "#" + v3;
        HideAllVideos();
        $(ve1).clone().appendTo(".video-section-1").removeClass("d-none");
        $(ve2).clone().appendTo(".video-section-2").removeClass("d-none");
        $(ve3).clone().appendTo(".video-section-3").removeClass("d-none");
        $(".video-nav:nth-of-type(" + nav1 + ")").addClass("video-nav-active");
        $(".video-nav:nth-of-type(" + nav2 + ")").addClass("video-nav-active");
        $(".video-nav:nth-of-type(" + nav3 + ")").addClass("video-nav-active");
    }
}

videoSlider()
videoInput()
$(".video-next-btn").click(function () {
    let videoCount = document.querySelectorAll(".video-slides > div").length + 10;
    let v3 = $(".video-section-3 > div").attr("id");
    if (v3 <= videoCount) {
        videoNextSlide();
    }
})
$(".video-prev-btn").click(function () {
    let v1 = $(".video-section-1 > div").attr("id")
    if (v1 >= 12) {
       videoPrevSlide()
    }
})

$(".modal").on('hidden.bs.modal', function (e) {
    $("iframe").attr("src", $("iframe").attr("src"));
});

const videoStopper1 = document.querySelector('.videos .modalbutton');
const videoStopper2 = document.querySelector('.video-next-btn');
const videoStopper3 = document.querySelector('.video-prev-btn');
let autoplayInterval;
autoplayInterval = setInterval(function () {
    let videoCount = document.querySelectorAll(".video-slides > div").length + 10;
    let v3 = $(".video-section-3 > div").attr("id")
    if (v3 <= videoCount) {
        videoNextSlide()
    }
}, 15000);

function stop() {
    clearInterval(autoplayInterval)
}

videoStopper1.addEventListener('mouseenter', (e) => {
    stop()
});
videoStopper2.addEventListener('mouseenter', (e) => {
    stop()
});
videoStopper3.addEventListener('mouseenter', (e) => {
    stop()
});
videoStopper1.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(function () {
    let videoCount = document.querySelectorAll(".video-slides > div").length + 10;
    let v3 = $(".video-section-3 > div").attr("id")
    if (v3 <= videoCount) {
        videoNextSlide()
    }
}, 15000);
});
videoStopper2.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(function () {
    let videoCount = document.querySelectorAll(".video-slides > div").length + 10;
    let v3 = $(".video-section-3 > div").attr("id")
    if (v3 <= videoCount) {
        videoNextSlide()
    }
}, 15000);
});
videoStopper3.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(function () {
    let videoCount = document.querySelectorAll(".video-slides > div").length + 10;
    let v3 = $(".video-section-3 > div").attr("id")
    if (v3 <= videoCount) {
        videoNextSlide()
    }
}, 15000);
});
$('.modal').on('shown.bs.modal', function () {
  stop()
})
$('.modal').on('hidden.bs.modal', function () {
  autoplayInterval = setInterval(function () {
    let videoCount = document.querySelectorAll(".video-slides > div").length + 10;
    let v3 = $(".video-section-3 > div").attr("id")
    if (v3 <= videoCount) {
        videoNextSlide()
    }
}, 15000);
})
swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: !0,
    autoplay: !0,
    mousewheel: {invert: !1},
    pagination: {el: ".blog-slider__pagination", clickable: !0}
});
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

window.addEventListener("scroll", function (e) {

    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    var drawLength = pathLength * scrollPercentage;

    path.style.strokeDashoffset = pathLength - drawLength;

    if (scrollPercentage >= 0.99) {
        path.style.strokeDasharray = "none";

    } else {
        path.style.strokeDasharray = pathLength + ' ' + pathLength;
    }
});
