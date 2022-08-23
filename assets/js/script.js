$(function(){

  /* header-info 슬라이드 배너 자동 재생 */
  /* Swiper Demos - autoplay */
  var headerInfo = new Swiper(".header-info", {
      effect: "fade", //fade속성

      autoplay: {
          delay: 5000, //5초
          disableOnInteraction: false,
        }
    });
  


  /* group-header 헤더 스크롤 */ 
  $(window).scroll(function(){ //윈도우를 스크롤 했을 때,
      if($(window).scrollTop() > 0){ //스크롤위치가 0보다 클때 
          $('.group-header').addClass('active'); //on 클래스 추가
          $('.header-bottom').css('display','block');
      }else{
          $('.group-header').removeClass('active'); //변하는 위치보다 작아지면 클래스 삭제(처음상태)
          $('.header-bottom').css('display','none');
      }
    });



    /* sc-main 메인 슬라이드 자동 재생 */
    /* Swiper Demos - autoplay */
    var scMain = new Swiper(".main-slide", {
      effect: "fade",
      
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".swiper-pagination",
      },
    });



    /* sc-category(leggings,bratop,set) 옆으로 넘기기  */
    /* Swiper Demos - slides per view */
    var groupSwiper = new Swiper(".sc-category .swiper", {
      slidesPerView: 2.2, //한 화면에 2.2개만 보이게
      spaceBetween: 10, //공백
    });



  /* header-bottom 헤더 스크롤 버튼 눌렀을 때 소메뉴 */
   $('.header-bottom .btn-more').click(function(e){ //버튼 눌렀을 때
    e.preventDefault();
    $('.bottom-wrap').toggleClass('show'); //show클래스(대메뉴 숨기기 + 전체메뉴none + 버튼 회전)
    $('.menu-area').slideToggle(); //소메뉴 업다운 
  });  



  
  /* header group-menu 왼쪽메뉴 열고닫기 */
  $('.group-header .btn-menu').click(function(e){ //열기버튼
    e.preventDefault(); 
    $('.group-menu').addClass('active') //active 추가해서 left0
    $('body').addClass('overflow-h'); //스크롤했을때 배경 안움직이게
  });

  $('.group-menu .close').click(function(e){ //닫기버튼
      e.preventDefault();
      $('.group-menu').removeClass('active') //active삭제
      $('body').removeClass('overflow-h'); //hidden빼주기

  });



  /* header group-menu 왼쪽메뉴 소메뉴 열고닫기 */
  $('.array-area .btn-array').click(function(e){ //btnarray(각 대메뉴)을 클릭했을대
    e.preventDefault();

    $(this).toggleClass('active'); //active로 버튼 전환
    $(this).siblings('.down-list').slideToggle(); //downitem 열었다닫았다

  });


  /* header-search 검색창 */
    $('.group-header .btn-search').click(function(e){ //검색창 열기
      e.preventDefault(); 
      $('.header-search').addClass('active') //active block으로 화면에 보여짐
    })

    $('.header-search .btn-prev').click(function(e){ //뒤로가기
      e.preventDefault(); 
      $('.header-search').removeClass('active') //none으로 가리게
  });



});


