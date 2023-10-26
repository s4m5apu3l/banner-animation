console.dir("main.js init");

document.addEventListener("DOMContentLoaded", function () {
    const banners = document.querySelectorAll(".l-banner__js");
    const teeth = document.querySelector(".l-teeth__img");
    const sale = document.querySelector(".l-sale");

    function showBanner(index) {
        banners[index].classList.add("active");
        let nextIndex = (index + 1) % banners.length;

        setTimeout(() => {
            banners[index].classList.add("out-active");
            setTimeout(() => {
                banners[index].classList.remove("active");
                banners[index].classList.remove("out-active");
                banners[nextIndex].classList.add("active");
                setTimeout(() => {
                    teeth.classList.add("add-teeth");
                }, 1000);
                setTimeout(() => {
                    banners[nextIndex].classList.add("out-active-teeth");
                    setTimeout(() => {
                        sale.classList.add("active-sale");
                        setTimeout(() => {
                            // banners[nextIndex].classList.add("out-active");
                            // setTimeout(() => {
                            //     banners[nextIndex].classList.remove(
                            //         "out-active"
                            //     );
                            //     banners[nextIndex].classList.remove("active");
                            //     banners[nextIndex].classList.remove(
                            //         "out-active-teeth"
                            //     );
                            //     teeth.classList.remove("add-teeth");
                            //     sale.classList.remove("active-sale");
                            //     showBanner(0);
                            // }, 1000);
                        }, 2000); 
                    }, 100);
                }, 2000);
            }, 500);
        }, 3000);
    }

    showBanner(0);
});

// document.addEventListener("DOMContentLoaded", function () {
//     const banners = document.querySelectorAll(".l-banner__js");
//     const teeth = document.querySelector(".l-teeth__img");
//     const sale = document.querySelector(".l-sale");

//     function showBanner(index) {
//         banners[index].classList.add("active");
//         let nextIndex = (index + 1) % banners.length;

//         setTimeout(() => {
//             banners[index].classList.add("out-active");
//             setTimeout(() => {
//                 banners[index].classList.remove("active");
//                 banners[index].classList.remove("out-active");
//                 banners[nextIndex].classList.add("active");
//                 setTimeout(() => {
//                     teeth.classList.add("add-teeth");
//                 }, 1000);
//                 setTimeout(() => {
//                     banners[nextIndex].classList.add("out-active-teeth");
//                     setTimeout(() => {
//                         sale.classList.add("active-sale");
//                     }, 100);
//                 }, 2000);
//             }, 500);
//         }, 3000);
//     }

//     showBanner(0);
// });

// setTimeout(() => {
//     nextIndex.classList.add("active");
// }, 4000);
// if (index == 0) {
// }
// if (index == 1) {
//     setTimeout(() => {
//         teeth.classList.add("add-teeth");
//     }, 1000);
//     setTimeout(() => {});
// }
// setTimeout(() => {
//     teeth.classList.remove("add-teeth");
//     banners[index].classList.remove("active");
//     // banners[index].classList.remove("out-active");
//     // var nextIndex = (index + 1) % banners.length;
//     // showBanner(nextIndex);
// }, 5000);

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
