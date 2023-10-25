console.dir("main.js init");

document.addEventListener("DOMContentLoaded", function () {
    var banners = document.querySelectorAll(".l-banner__js");

    function showBanner(index) {
        banners[index].classList.add("active");
        console.dir(index);
        
        if (index == 0) {
            setTimeout(() => {
                banners[index].classList.add("out-active");
            }, 3000);
        }
        setTimeout(function () {
            banners[index].classList.remove("active");
            banners[index].classList.remove("out-active");
            var nextIndex = (index + 1) % banners.length;
            showBanner(nextIndex);
        }, 4000); // Ждем 3 секунды перед переключением на следующий баннер
    }

    // Начинаем с первого баннера
    // showBanner(0);
});

// document.addEventListener("DOMContentLoaded", () => {
//     const parentBanner = document.querySelector(".l-banner-animate");

//     if (parentBanner) {
//         let currentSlide = 0;
//         const slides = document.querySelectorAll(".l-banner__js");
//         const activeSlide = document.querySelector(".l-banner__js.active");

//         function showSlide(index) {
//             slides.forEach((slide, i) => {

//                 slide.classList.toggle("active", i === index);
//             });
//         }

//         function nextSlide() {
//             currentSlide = (currentSlide + 1) % slides.length;

//             showSlide(currentSlide); // Показываем новый слайд
//         }

//         // Показываем первый слайд
//         showSlide(currentSlide);

//         // Запускаем автоматическое переключение слайдов каждые 3 секунды
//         setInterval(nextSlide, 5000);
//     }
// });
