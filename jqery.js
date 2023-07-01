jQuery(function(){

    let flag =false

    $(window).scroll(function(){
        var navBlok = $('.nav-blok')
        if($(window).scrollTop()>60){
            navBlok.addClass('nav-blok_active')
            if (flag){
                $('.menu_element').slideUp()
                flag = !flag
          }
        }
        else{
            navBlok.removeClass('nav-blok_active')
        }
      });


      if($(window).scrollTop()>60){
        if (!flag){
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

      $('.nav-burger').on('click',()=>{
        $('.nav-blok__links').css({
          transform: 'translateX(0)',
          transition: '.4s'})
        $('.nav-burger').hide()
        $('.header-nav-close').css({
          'display': 'block'
      })
      })


      $('.header-nav-close').on('click',()=>{
        $('.nav-blok__links').css({transform: 'translateX(100%)'})
        $('.nav-burger').show()
        $('.header-nav-close').hide()
      })


      $("a.scroll-to").on("click", function(e){
        e.preventDefault();
        var heightBlok = $(".nav-blok").height()
        var anchor = $(this).attr('href');

        if ($(window).width()<780){
            $('.nav-blok__links').css({
            transform: 'translateX(-100%)',
            transition: '.4s'})
            $('.nav-burger').show()
            $('.header-nav-close').hide()
        }

        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - heightBlok-40
        }, 800);
    });
});


