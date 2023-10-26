
const banners = document.querySelectorAll(".l-banner__js");
const teeth = document.querySelector(".l-teeth__img");
const sale = document.querySelector(".l-sale");

function addClassWithTimeout(element, className, timeout) {
    setTimeout(() => {
        element.classList.add(className);
    }, timeout);
}

function removeClassWithTimeout(element, className, timeout) {
    setTimeout(() => {
        element.classList.remove(className);
    }, timeout);
}

function delay(timeout) {
    return new Promise((resolve) => setTimeout(resolve, timeout));
}

async function animateBanner(index) {
    banners[index].classList.add("active");
    let nextIndex = (index + 1) % banners.length;

    await delay(3000);

    addClassWithTimeout(banners[index], "out-active", 0);
    await delay(500);

    banners[index].classList.remove("active", "out-active");
    banners[nextIndex].classList.add("active");

    await delay(1000);

    teeth.classList.add("add-teeth");
    await delay(1000);

    banners[nextIndex].classList.add("out-active-teeth");
    await delay(100);

    sale.classList.add("active-sale");
    await delay(2000);

    banners[nextIndex].classList.add("out-active");
    await delay(1000);

    banners[nextIndex].classList.remove("out-active");
    banners[nextIndex].classList.remove("active");
    banners[nextIndex].classList.remove("out-active-teeth");

    teeth.classList.remove("add-teeth");
    sale.classList.remove("active-sale");

    showBanner(0);
}

async function showBanner(index) {
    while (true) {
        await animateBanner(index);
    }
}
showBanner(0);
