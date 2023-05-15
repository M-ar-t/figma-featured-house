jQuery(function(){

    let flag =false

    $(window).scroll(function(){
        var navBlok = $('.nav-blok')
        if($(window).scrollTop()>60){
            navBlok.addClass('nav-blok_active')
            if (flag){
                console.log('2');
                $('.menu_element').slideUp()
                flag = !flag
          }
        }
        else{
            navBlok.removeClass('nav-blok_active')
        }
      });


      if($(window).scrollTop()>60){
        console.log('1');
        if (!flag){
            console.log('2');
            $('.menu_element').slideDown()
            flag = !flag
      }
    }


      $('.second-part__pic-blok').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false, 
        autoplay:false,
        dots:true,
        variableWidth: true,
    });
    
    $('.slick-dots').hide()
    $('button.slick-prev slick-arrow').hide()

    $('.two-arrows__right-item').on('click', function() {
        $('.second-part__pic-blok').slick('slickNext');
      });
    $('.two-arrows__left-item').on('click', function() {
        $('.second-part__pic-blok').slick('slickPrev');
      });
      $('#house-btn').on('click',()=>{
        $('*').removeClass('three-btn__item_active')
        $('#house-btn').addClass('three-btn__item_active')
        let imgArr = $('.pic-blok-item-img img')
        imgArr.closest('.second-part__pic-blok-item').hide()
        imgArr.each(function(index, value) {
            if ($(imgArr[index]).hasClass('pic-blok-item-img__house')){
                $(this).closest('.second-part__pic-blok-item').show()
            };
        });

        
      })

      $('#villa-btn').on('click',()=>{
        $('*').removeClass('three-btn__item_active')
        $('#villa-btn').addClass('three-btn__item_active')
        let imgArr = $('.pic-blok-item-img img')
        imgArr.closest('.second-part__pic-blok-item').hide()
        imgArr.each(function(index, value) {
            if ($(imgArr[index]).hasClass('pic-blok-item-img__villa')){
                $(this).closest('.second-part__pic-blok-item').show()
            };
        });
      })


      $('#apart-btn').on('click',()=>{
        $('*').removeClass('three-btn__item_active')
        $('#apart-btn').addClass('three-btn__item_active')
        let imgArr = $('.pic-blok-item-img img')
        imgArr.closest('.second-part__pic-blok-item').hide()
        imgArr.each(function(index, value) {
            if ($(imgArr[index]).hasClass('pic-blok-item-img__apartment')){
                $(this).closest('.second-part__pic-blok-item').show()
            };
        });
      })


      $('#featured-house').on('click',()=>{
        $('*').removeClass('three-btn__item_active')
        $('.pic-blok-item-img img').closest('.second-part__pic-blok-item').show()
      })


    //   let flag =false
      $('.property_ul').parent().on('click', ()=>{
        if (!flag){
            $('.menu_element').slideDown()
        }else{
            $('.menu_element').slideUp()
        }
        flag = !flag
      })

      $('.header_burger').on('click',()=>{
        $('.burger_menu').css({transform: 'translateX(0)'})
        $('.header_burger').hide()
        $('.header-nav-close').css({
          'display': 'block',
          'margin-left':'380px',
          'z-index': 1000
      })
      })


      $('.header-nav-close').on('click',()=>{
        $('.burger_menu').css({transform: 'translateX(100%)'})
        $('.header_burger').show()
        $('.header-nav-close').hide()
      })

      let burger_menu_flag =false
      $('.burger_menu__property-div').on('click', ()=>{
        if (!burger_menu_flag){
            $('.burger_menu__menu_element').slideDown()
        }else{
            $('.burger_menu__menu_element').slideUp()
        }
        burger_menu_flag = !burger_menu_flag
      })


      $("a.scroll-to").on("click", function(e){
        e.preventDefault();
        var heightBlok = $(".nav-blok").height()
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - heightBlok-40
        }, 800);
    });
});


