    
    $(window).scroll(function(){
        var i = $(window).scrollTop();
        console.log(i);
        if( i > 100){
            $('#one').css({
                'background-size':''+ i +'%',
            })
            $('.gradient').css({
                'background-color':'rgba(10, 10, 10, '+i/700+')',
            })       
        }
        if( i < 50){
            $('#one').css({'background-size':'cover',});
        }        
    })
    $('#menu-closer').hide();
    $('.men').click(function(){
        $('body').css({'margin-right':'400px',})
        $(this).hide();
        $('#menu-closer').show(100);
        $('#menu').css({'width':'400px',})
        $('#menu-closer-body').css({'display':'block',})
    })
    $('#menu-closer').click(function(){
        $('body').css({'margin-right':'0',})
        $('.men').show(1000);
        $('#menu-closer').hide(1000);
        $('#menu').css({'width':'0',})
        $('#menu-closer-body').css({'display':'none',})
    })
    $('#menu-closer-body').click(function(){
        $('body').css({'margin-right':'0',})
        $('.men').show(1000);
        $('#menu-closer').hide(1000);
        $('#menu').css({'width':'0',})
        $('#menu-closer-body').css({'display':'none',})
    })
