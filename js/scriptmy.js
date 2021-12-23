const swiper1 = new Swiper(".bigslider2colum ", {
  speed: 800,

  observer: true,
  observeParent: true,
  observeSlideChildren: true,

  spaceBetween: 30,

  autoplay: {
    //задержка при количество секунд на задержку слайдера
    delay: 3000,
  },

  slidesPerView: 3,
});

const swiper2 = new Swiper(".myslidertttt ", {
  observer: true,
  observeParent: true,

  // observeSlideChildren: true,
  // для добавления стрелок можем использовать любой класс
  navigation: {
    nextEl: ".slidersecondto__next",
    prevEl: ".slidersecondto__prev",
  },

  speed: 800,

  spaceBetween: 30,

  autoplay: {
    //задержка при количество секунд на задержку слайдера
    delay: 3000,
  },

  slidesPerView: 3,

  breakpoints: {
    1060: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    880: {
      slidesPerView: 3,
    },
    545: {
      slidesPerView: 2,
    },
    320: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
  },
});

const swiper3 = new Swiper(".myslider22 ", {
  observer: true,
  observeParent: true,

  observeSlideChildren: true,

  slidesPerView: 3,

  // для добавления стрелок можем использовать любой класс
  navigation: {
    nextEl: ".slidersecondto__next",
    prevEl: ".slidersecondto__prev",
  },

  speed: 800,

  spaceBetween: 30,

  autoplay: {
    //задержка при количество секунд на задержку слайдера
    delay: 3000,
  },
});
const swiper4 = new Swiper(".myslidermyfix ", {
  observer: true,
  observeParent: true,

  observeSlideChildren: true,
  // для добавления стрелок можем использовать любой класс
  navigation: {
    nextEl: ".slidersecondto__next",
    prevEl: ".slidersecondto__prev",
  },

  speed: 800,

  spaceBetween: 30,

  autoplay: {
    //задержка при количество секунд на задержку слайдера
    delay: 3000,
  },

  slidesPerView: 3,
});

const swiper5 = new Swiper(".slider-firsttt", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  speed: 800,

  observer: true,

  observeParent: true,

  observeSlideChildren: true,

  autoplay: {
    delay: 3000,
  },

  slidesPerView: 1,
  effect: "fade",
});

new Swiper(".tabulation__slider", {
  navigation: {
    nextEl: ".ssbutton-next",
    prevEl: ".ssbutton-prev",
  },
  // Для обновления свайпера при изменения елементов слайдера
  observer: true,
  //  Для обновления слайдера при изменении родителя
  observeParent: true,
  //  для обновления слайдера при изменения дочерних елементов
  observeSlideChildren: true,

  speed: 800,

  autoplay: {
    delay: 3000,
  },

  slidesPerView: 4,
  spaceBetween: 30,
});

new Swiper(".slider222", {
  navigation: {
    nextEl: ".next",
    prevEl: ".last",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  loop: true,
  speed: 800,
  autoplay: {
    delay: 3000,
  },
});
new Swiper(".myslider5", {
  pagination: {
    el: ".swiper-pagination",

    clickable: true,
  },
  speed: 900,
  loop: true,
  autoplay: {
    delay: 3000,
  },
});

new Swiper(".sliderflex2", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 800,
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 1,
  loop: true,
  effect: "cube",
});

new Swiper(".sliderflex11", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  speed: 800,
  autoplay: {
    delay: 3000,
  },
  loop: true,
});

new Swiper(".sliderfourinitial", {
  pagination: {
    el: ".swiper-pagination",

    clickable: true,
  },
  speed: 800,
  autoplay: {
    delay: 3000,
  },
  loop: true,
});

const swiper6 = new Swiper(".mysponsorslider", {
  slidesPerView: 6,

  spaceBetween: 30,
  centerSlides: true,
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      centerSlides: true,
      spaceBetween: 4,
    },
    420: {
      slidesPerView: 3,
      centerSlides: true,
      spaceBetween: 0,
    },
    600: {
      slidesPerView: 3,
      centerSlides: true,
      spaceBetween: 0,
    },
    750: {
      slidesPerView: 4,
      centerSlides: true,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 5,
      centerSlides: true,
      spaceBetween: 0,
    },
    990: {
      slidesPerView: 6,
    },
  },
});

const swiper8 = new Swiper(".popular-categories", {
  navigation: {
    nextEl: ".downgoodsec__nextarow",
    prevEl: ".downgoodsec__prevarow",
  },
  speed: 800,

  observer: true,
  //Для обновления слайдера при изменении родителя
  observeParent: true,
  //для обновления слайдера при изменения дочерних елементов
  observeSlideChildren: true,
  //для автопроигривания слайдера

  autoplay: {
    delay: 3000,
  },

  slidesPerView: 4,

  spaceBetween: 30,
  // ! Изменения моего главного слайдера
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 0,
    },

    1100: {
      slidesPerView: 4,
    },
  },
});

let tapSlider = document.getElementById("polzunok");

const swiper10 = new Swiper(".secondtab__slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  speed: 800,

  // Лутше по умолчанию использовать в каждом слайдере
  observer: true,
  observeParent: true,
  //
  // observeSlideChildren: true,

  autoplay: {
    //задержка при количество секунд на задержку слайдера
    delay: 3000,
  },

  slidesPerView: 3,
  // Отступ между слайдами если указивает для показа несколько слайдеров
  spaceBetween: 30,
  // для прокрутки бесконечно слайда нюанси не работает при скроле так что эго ,надо отключать,не работает  с мультирадностю
});

// ! ползунок переписать
noUiSlider.create(tapSlider, {
  start: 9,
  step: 1,
  behaviour: "tap",
  connect: [false, true],
  range: {
    min: 1,
    max: 24,
  },
});

// ! Меню бургер

let burgermenu = document.querySelector(".burger-menu");
burgermenu.addEventListener("click", function burgerMenu(event) {
  event.preventDefault();
  burgermenu.classList.toggle("active");
  document.querySelector(".header-center__ul").classList.toggle("active");
  document.getElementsByTagName("body")[0].classList.toggle("active");
});
// Нужно зделать что то здесь

let slideralllink = document.querySelectorAll(".slidersecondto__a");
let sliderconten = document.querySelectorAll(".slidersecondto__poid");

slideralllink.forEach((item) => {
  item.addEventListener("click", function name(event) {
    event.preventDefault();
    let id = event.target.getAttribute("href");
    slideralllink.forEach((item2) => {
      item2.classList.remove("activeaaa");
    });
    sliderconten.forEach((item2) => {
      item2.classList.remove("activetabbbbb");
    });
    item.classList.add("activeaaa");
    document.querySelector(id).classList.add("activetabbbbb");
  });
  document.querySelector(".slidersecondto__a").click();
});

//! для вспливающего меню

let headercenter = document.querySelector(".header-center__aa");
headercenter.addEventListener("click", function headerCenter(event) {
  event.preventDefault();
  headercenter.classList.toggle(".headertopactivebut");
  document.querySelector(".header-center__ulul").classList.toggle("active");
  document.querySelector(".header-center__triugol").classList.toggle("active");
});

// tabs on native javascript

let linktabs = document.querySelectorAll(".mytabssome__a");
let tabscontent = document.querySelectorAll(".mytabssome__content");
linktabs.forEach((item) => {
  item.addEventListener("click", function ftabss(event) {
    event.preventDefault();
    let id = event.target.getAttribute("href");
    linktabs.forEach(function name(item2) {
      item2.classList.remove("activepopapitem");
    });
    tabscontent.forEach(function name(item2) {
      item2.classList.remove("activetabsss");
    });
    item.classList.toggle("activepopapitem");
    document.querySelector(id).classList.toggle("activetabsss");
  });
  document.querySelector(".mytabssome__a").click();
});

let gradient = document.querySelector(".linedegry__a");
gradient.addEventListener("mouseenter", function Gradient() {
  document.querySelector(".linedegry__uptext").classList.add("blackcolor");
  document.querySelector(".linedegry__loertext").classList.add("blackcolor");
});
gradient.addEventListener("mouseleave", function Gradient() {
  document.querySelector(".linedegry__uptext").classList.remove("blackcolor");
  document.querySelector(".linedegry__loertext").classList.remove("blackcolor");
});

// еще одни табы) on native javascritp

let tabslink = document.querySelectorAll(".secondtab__a");
let tabscontentt = document.querySelectorAll(".secondtab__mytab");

tabslink.forEach((item) => {
  item.addEventListener("click", function tabsInfo(event) {
    event.preventDefault();
    let id = event.target.getAttribute("href");
    tabslink.forEach((item2) => {
      item2.classList.remove("activeseca");
    });
    tabscontentt.forEach((item2) => {
      item2.classList.remove("activesecondtab");
    });
    item.classList.add("activeseca");
    document.querySelector(id).classList.add("activesecondtab");
  });
  document.querySelector(".secondtab__a").click();
});

let tabslink22 = document.querySelectorAll(".tabulation__a");
let tabscontentt22 = document.querySelectorAll(".slidersecondto__poid");

tabslink22.forEach((item) => {
  item.addEventListener("click", function tabsInfo(event) {
    event.preventDefault();
    let id = event.target.getAttribute("href");
    tabslink22.forEach((item2) => {
      item2.classList.remove("activea");
    });
    tabscontentt22.forEach((item2) => {
      item2.classList.remove("contenttab-active");
    });
    item.classList.add("activea");
    document.querySelector(id).classList.add("contenttab-active");
  });
  document.querySelector(".tabulation__a").click();
});

// работа с картинками метод ибд
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}
ibg();

// timer для часов on  native javascript;

let hh = document.querySelector(".time__hours");
let mm = document.querySelector(".time__minutes");
let ss = document.querySelector(".time__second");

let ttimer = setInterval(Timer, 1000);

function Timer() {
  let hours = +hh.innerHTML;
  let minut = +mm.innerHTML;
  let second = +ss.innerHTML;

  if (second == 0) {
    second--;
    second = 60;
    if (minut == 0) {
      hours--;
      minut = 60;
    }
    minut--;
  } else {
    second--;
  }

  ss.innerHTML = second;

  if (hours == 0 && minut == 0 && second == 0) {
    document.querySelector(".time").remove();
  }
}

// ползунок на нативнов джава скрипте 
let polzunokjs = document.querySelector(".polzunokjs");

polzunokjs.addEventListener("change", function polzunok(event) {
  document.querySelector(".polzunokrange").innerHTML = +polzunokjs.value;
});
