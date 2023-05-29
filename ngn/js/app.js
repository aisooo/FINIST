// burger
if (document.querySelector(".burger")) {
    let burger = document.getElementsByClassName("burger")[0];
    let show = document.getElementsByClassName("nav-group")[0];

    burger.addEventListener("click", () => {
        burger.classList.toggle("show-menu");
        show.classList.toggle("show");
    });
}
// callback

if (document.querySelector(".callback")) {
    let callbackIcon = document.getElementsByClassName("callback")[0];
    let showCallbackForm = document.getElementsByClassName("callback-form")[0];

    callbackIcon.addEventListener("click", () => {
        callbackIcon.classList.toggle("show-menu");
        showCallbackForm.classList.toggle("show");
    });
}

// filter menu

if (document.querySelector(".portfolio-cat")) {
    let filterMenu = document.getElementsByClassName(
        "portfolioBtnContainer"
    )[0];
    let filterBtn = document.getElementsByClassName("portfolio-cat")[0];
    let filtericon = document.getElementsByClassName("portfolio-cat-img")[0];

    filterBtn.addEventListener("click", () => {
        filtericon.classList.toggle("rotate");
        filterMenu.classList.toggle("show");
    });
}

// filter

filterSelection("all"); // Execute the function and show all columns
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("cat-item");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
if (document.querySelector(".portfolio-cat-btn")) {
    var btnContainer = document.getElementById("portfolioBtnContainer");
    var btns = btnContainer.getElementsByClassName("portfolio-cat-btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName(" cat-active");
            current[0].className = current[0].className.replace(
                " cat-active",
                ""
            );
            this.className += " cat-active";
        });
    }
}

// swiper

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // loop: true,
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
});

const smoothLinks = document.querySelectorAll(".linkto");
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute("href");

        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
}
