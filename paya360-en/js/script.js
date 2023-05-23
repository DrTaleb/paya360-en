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