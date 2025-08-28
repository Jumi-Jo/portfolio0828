$(document).ready(function(){
   //main-banner
  const main_slide = new Swiper(".main-slide", {
    navigation: {
      nextEl: ".swiper-button-next", // 다음버튼
      prevEl: ".swiper-button-prev", // 이전버튼
    },
    pagination: {
      el: ".swiper-pagination", // 슬라이드 페이지 버튼
      clickable: true, // 클릭가능
    },


  });
  
   //.gohome span
    $(".gohome span").hide();
    $(".gohome").hover(function(){
      $(".gohome span").fadeToggle();
    });
  //.hover-arrow
  $(".hover-arrow").hide();
    $(".main-control").hover(function(){
      $(".hover-arrow").fadeToggle();
    });


    
});