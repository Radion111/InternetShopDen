


// ! Меню бургер 
$(document).ready(function() {
   $('.burger-menu').click(function(event) {
   
      $(".burger-menu").toggleClass("active");
      $(".header-center__ul").toggleClass("active");
      $('body').toggleClass('lock');
   });
});




$(document).ready(function () {
   $(".slidersecondto__a").click(function (e) { 
      e.preventDefault();
      $(".slidersecondto__a").removeClass("activeaaa");
      $(".slidersecondto__poid").removeClass("activetabbbbb");
      $(this).addClass("activeaaa");
      $($(this).attr("href")).addClass("activetabbbbb");
    
   });
   $(".slidersecondto__a:first").click();
});


const swiper1 =new Swiper('.bigslider2colum ', 
{ 
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

const swiper2 =new Swiper('.myslidertttt ', 
{ 

   observer: true,
observeParent: true,

// observeSlideChildren: true,
// для добавления стрелок можем использовать любой класс 
navigation: {
nextEl:'.slidersecondto__next',
prevEl:'.slidersecondto__prev',
 },

speed: 800,



spaceBetween: 30,

autoplay: {
//задержка при количество секунд на задержку слайдера  
delay: 3000,
},

slidesPerView: 3,

breakpoints: {
   "1060": {
     slidesPerView: 3,
     spaceBetween: 20,
   },
   "880":{
      slidesPerView: 3,
   },
   "545":{
      slidesPerView: 2,
      
   },
   "320":{ 
      spaceBetween: 0,
      slidesPerView: 1,
    
   },
 }

});



const swiper3 =new Swiper('.myslider22 ', 
{ 

   observer: true,
   observeParent: true,
   
   observeSlideChildren: true,

   slidesPerView: 3,

// для добавления стрелок можем использовать любой класс 
navigation: {
nextEl:'.slidersecondto__next',
prevEl:'.slidersecondto__prev',
 },

speed: 800,



spaceBetween: 30,

autoplay: {
//задержка при количество секунд на задержку слайдера  
delay: 3000,
},



});
const swiper4 =new Swiper('.myslidermyfix ', 
{ 
   observer: true,
   observeParent: true,
   
   observeSlideChildren: true,
// для добавления стрелок можем использовать любой класс 
navigation: {
nextEl:'.slidersecondto__next',
prevEl:'.slidersecondto__prev',
 },

speed: 800,


spaceBetween: 30,

autoplay: {
//задержка при количество секунд на задержку слайдера  
delay: 3000,
},

slidesPerView: 3,


});







const swiper5 =new Swiper('.slider-firsttt', 
{ 

pagination: {
el:'.swiper-pagination',
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
 effect:'fade',


});

//! для вспливающего меню
$(document).ready(function () {

  $(".header-center__aa").click(function (e) { 
      e.preventDefault();
      $(".header-center__aa").toggleClass("headertopactivebut");
      $(".header-center__ulul").slideToggle(200);
      $(".header-center__triugol").slideToggle(200); 

   });

});

$(document).ready(function () {
   $(".mytabssome__a").click(function (e) { 
      e.preventDefault();
      $(".mytabssome__a").removeClass("activepopapitem");
      $(".mytabssome__content").removeClass("activetabsss");
      $(this).addClass("activepopapitem");
      $($(this).attr("href")).addClass("activetabsss");
   });
   $(".mytabssome__a:first").click();
});

const swiper6 =new Swiper('.mysponsorslider', 
{ 



slidesPerView: 6,

spaceBetween: 30,
centerSlides:true,
loop: true,

      breakpoints: {
     
      "320": {
         slidesPerView:1,
         centerSlides:true,
         spaceBetween: 4,
       
      },
      "420": {
         slidesPerView: 3  ,
         centerSlides:true,	
         spaceBetween: 0,
      },
      "600": {
         slidesPerView: 3  ,
         centerSlides:true,	
         spaceBetween: 0,
      },
      "750": {
         slidesPerView: 4,
         centerSlides:true,	
         spaceBetween: 0,
      },
      "768": {
         slidesPerView: 5,
         centerSlides:true,	
         spaceBetween: 0,
      },
      "990": {
         slidesPerView: 6,
      },
  
      }
});

const swiper8 =new Swiper('.popular-categories', 
{ 

navigation: {
nextEl:'.downgoodsec__nextarow',
prevEl:'.downgoodsec__prevarow',
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
 '320': {
  slidesPerView:1,
  },
  '768': {
 slidesPerView:2,
  },
  '900': {
 slidesPerView:3, 
 spaceBetween: 0,
 },

'1100': {
  slidesPerView:4,
  },
}
});




var tapSlider = document.getElementById('polzunok');

noUiSlider.create(tapSlider, {
    start: 9,
    step: 1,
    behaviour: 'tap',
    connect: [false, true],
    range: {
        'min': 1,
        'max': 24,
    }

});


$(document).ready(function () {
   $(".linedegry__a").hover(function () {
     $(".linedegry__uptext , .linedegry__loertext").toggleClass("blackcolor");
   });
});




const swiper10 =new Swiper('.secondtab__slider', 
{ 

navigation: {
nextEl:'.swiper-button-next',
prevEl:'.swiper-button-prev',
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





$(document).ready(function () {
   $(".secondtab__a").click(function (e) { 
      e.preventDefault();
      $(".secondtab__a").removeClass("activeseca");
      $(".secondtab__mytab").removeClass("activesecondtab");
      $(this).addClass("activeseca");
      $($(this).attr("href")).addClass("activesecondtab");
   });
   $(".secondtab__a:first").click();
});


















   $(document).ready(function(){
      $(".tabulation__a").click(function(e){ 
         e.preventDefault();
         $(".tabulation__a").removeClass("activea");
         $(".content-tabs__content").removeClass("contenttab-active");
         $(this).addClass("activea");
         $($(this).attr('href')).addClass("contenttab-active");
          });
          $(".tabulation__a:first").click();
   });


   // работа бургер меню



new Swiper('.tabulation__slider', 
{ 

navigation: {
nextEl:'.ssbutton-next',
prevEl:'.ssbutton-prev',
 },
// Для обновления свайпера при изменения елементов слайдера
observer:true,
//  Для обновления слайдера при изменении родителя
observeParent:true,
//  для обновления слайдера при изменения дочерних елементов 
observeSlideChildren:true,

speed: 800,

autoplay: {
 
delay: 3000,
},

slidesPerView: 4,
spaceBetween: 30,


});

new Swiper('.slider222', 
{ 
   navigation: {
   nextEl:'.next',
   prevEl:'.last',
   
    },
  pagination: {
      el:'.swiper-pagination',
      clickable: true,
      }, 

      loop: true,
      speed: 800,
   autoplay: {
      delay: 3000,
      },

}),

new Swiper('.myslider5', 
{ 

      pagination: {
      el:'.swiper-pagination',

      clickable: true,
      }, 
      speed:900,
      loop: true,
      autoplay: {
      delay: 3000,
      },
});

new Swiper('.sliderflex2', 
{ 

      pagination: {
      el:'.swiper-pagination',
      clickable: true,
      }, 
      speed: 800,
      autoplay: {
      delay: 3000,
      },
      slidesPerView: 1,
      loop: true,
      effect:'cube',
});


new Swiper('.sliderflex11', 
{ 
pagination: {
el:'.swiper-pagination',
clickable: true,
}, 

speed: 800,
autoplay: {
 
delay: 3000,
},
loop: true,


});

new Swiper('.sliderfourinitial', 
{ 

   

pagination: {
el:'.swiper-pagination',

clickable: true,
}, 
speed: 800,
autoplay: { 
delay: 3000,
},
loop: true,


});




// работа с картинками метод ибд
function ibg(){

   $.each($('.ibg'), function(index, val) {
   if($(this).find('img').length>0){
   $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
   }
   });
   }
   
   ibg();




 

 var currentyear=new Date().getFullYear();
 var thischristmasyear=(new Date().getMonth()==0 && new Date().getDate()==1)? currentyear : currentyear + 1 ; 
 var christmas="january 1, "+thischristmasyear+" 0:0:00";
 var currentTime=new Date();
 var targetdate=new Date(christmas);  		
 var timediff=(targetdate-currentTime)/1000;
 var oneMinute=60;
 var oneHour=60*60;
 var oneDay=60*60*24;
 var dayfield=Math.floor(timediff/oneDay);
 var hourfield=Math.floor((timediff-dayfield*oneDay)/oneHour);
 var minutefield=Math.floor((timediff-dayfield*oneDay-hourfield*oneHour)/oneMinute);
 var secondfield=Math.floor((timediff-dayfield*oneDay-hourfield*oneHour-minutefield*oneMinute));



 $(function(counts){
 $('.c-block:eq(0) .bl-inner span').text(dayfield);
 $('.c-block:eq(1) .bl-inner span').text(hourfield);
 $('.c-block:eq(2) .bl-inner span').text(minutefield);
 $('.c-block:eq(3) .bl-inner span').text(secondfield);

   counts();
   setInterval(counts,1000);

 });


