$(function(){

  /* header-info 슬라이드 배너 자동 재생 */
  /* Swiper Demos - autoplay */
  var headerInfo = new Swiper(".swiper-info", {
      effect: "fade", //fade속성

      autoplay: {
          delay: 5000, //5초
          disableOnInteraction: false,
        }
    });
  


  /* header-top 헤더 스크롤 */
  $(window).scroll(function(){ //윈도우를 스크롤 했을 때,
      curr = $(this).scrollTop(); // 스크롤 위치
      target = 1 //변하는 위치(스크롤 1번을 기준으로 임의로 숫자 부여함)

      if(curr >= target){ //스크롤위치가 변하는 위치보다 크거나 같을 때
          $('header').addClass('on'); //on 클래스 추가
      }else{
          $('header').removeClass('on'); //변하는 위치보다 작아지면 클래스 삭제(처음상태)
      }
  });



    /* sc-main 메인 슬라이드 자동 재생 */
    /* Swiper Demos - autoplay */
    var scMain = new Swiper(".sc-main .swiper-main", { //swiper-slide에주면 안됨!! main에줘야함
      effect: "fade",
      
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".sc-main .pagination",
      },
    });



    /* sc-leggings,bratop,set 클릭하고 옆으로 넘기기  */
    /* Swiper Demos - slides per view */
    var groupSwiper = new Swiper(".group-swiper", {
      slidesPerView: 2.2, //한 화면에 2.2개만 보이게
      spaceBetween: 10, //공백
    });



  /* header-bottom 헤더 스크롤 버튼 눌렀을 때 소메뉴 */
   $('.header-bottom .btn-more').click(function(e){ //버튼 눌렀을 때
    e.preventDefault();
  
    if( $('.all-menu').css('display', 'block') && $('.bottom-list').css('display', 'none')){ //1)전체메뉴block + 기존none이면
      $('.header-bottom').stop().addClass('active'); // 3)버튼 회전
      $(this).siblings('.menu-list').stop().slideDown(); //2)소메뉴 열기
    }else if( $('.all-menu').css('display', 'none') && $('.bottom-list').css('display', 'flex')){ // 4)전체메뉴none + 기존 flex라면
      $(this).siblings('menu-list').stop().slideUp(); //5) 다시 누르면 소메뉴 닫기
      $('.header-bottom').stop().removeClass('active'); //6) 버튼 원상복구
    }else({
    })
  });  
  /* 문제
  1. 스크롤 시 소메뉴가 따라 나옴 (소메뉴 숨기기)
  2. 버튼 클릭 1번밖에 안됨 (버튼 slideup, slidedown문제)
  3. */


  
  /* header group-menu 왼쪽메뉴 열고닫기 */
  $('.header-left .menu').click(function(e){ //열기버튼
    e.preventDefault(); 
    $('.group-menu').addClass('active') //active 추가해서 left0
  });

  $('.login-top .close').click(function(e){ //닫기버튼
      e.preventDefault();
      $('.group-menu').removeClass('active') //active삭제

  });



  /* header group-menu 왼쪽메뉴 소메뉴 열고닫기 */
  $('.array-area').click(function(e){
    e.preventDefault();
    if( $(this).siblings('.down-list').css('display') == 'block'){
    //1)array-area(대메뉴a) siblings인 downlist(소메뉴ul)가 block상태라면 
        $(this).siblings('.down-list').stop().slideUp();
          //4) 한번 열렸을때 다시 클릭하면 누른거만 닫히게
        $('.btn-down').stop().removeClass('active');
        // 5) 닫으면서 + 버튼 복구

    }else{
        $('.btn-down').stop().addClass('active');
        //3) 열면서 + 버튼 뒤집기
        $(this).siblings('.down-list').stop().slideDown();
        //2) display none이기때문에 slidedown(열기)
    }
})  
/* 문제 : 버튼 rotate 전체로 작동 해결 못 함 */



/* header-search 검색창 */
  $('.header-left .search').click(function(e){ //검색창 열기
    e.preventDefault(); 
    $('.header-search').css('display', 'block'); //block으로 화면에 보여짐
    $('.header-search').addClass('active') //active 추가해서 zindex로 보여지게
  })

  $('.header-search .btn-prev').click(function(e){ //뒤로가기
    e.preventDefault(); 
    $('.header-search').css('display', 'none'); //none으로 가리게
    $('.header-search').removeClass('active') //zindex빼기
})


});








