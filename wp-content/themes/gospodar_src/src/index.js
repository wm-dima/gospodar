import './assets/js/jquery-3.3.1.min.js';

import './assets/js/amazingslider.js';

import './assets/css/amazingslider-1.css';

import './assets/js/initslider-1.js';



import './assets/css/style.scss';

import './assets/css/normalize.css';

import './assets/css/swiper.min.css';



var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


jQuery(document).ready(function($) {
    var content = $('.catalog-min');
    var sidebar = $('.catalog-additional');
    var getContentHeight = content.outerHeight();
    var getSidebarHeight = sidebar.outerHeight();
    
    if (getContentHeight > getSidebarHeight) {
      sidebar.css('min-height', getContentHeight);
      }
    if (getSidebarHeight > getContentHeight) {
      content.css('min-height', getSidebarHeight);
      }
  });  

  $(function() {
 
    (function quantityProducts() {
      var $quantityArrowMinus = $(".quantity-arrow-minus");
      var $quantityArrowPlus = $(".quantity-arrow-plus");
      var $quantityNum = $(".quantity-num");
   
      $quantityArrowMinus.click(quantityMinus);
      $quantityArrowPlus.click(quantityPlus);
   
      function quantityMinus() {
        if ($quantityNum.val() > 1) {
          $quantityNum.val(+$quantityNum.val() - 1);
        }
      }
   
      function quantityPlus() {
        $quantityNum.val(+$quantityNum.val() + 1);
      }
    })();
   
  });


  $( ".quantity-block button" ).click(function( event ) {
      event.preventDefault();
    });
    