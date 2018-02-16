var $ = window.jQuery = require('jQuery');

$(document).ready(function(){
    var fixedDiv = $('.svg-wrapper'),
        appContainerOffsetLeft = $('.app-container')[0].offsetLeft,
        fixedDivParent = fixedDiv[0].parentElement.clientWidth,
        introButton = $('#intro-button');
        $.each(fixedDiv, function(item, value){
            $(value).width(fixedDivParent);
            $(value).css({'opacity': '1', 'left': appContainerOffsetLeft});
        });
        $(window).resize(function(){
            fixedDivParent = fixedDiv[0].parentElement.clientWidth;
            appContainerOffsetLeft = $('.app-container')[0].offsetLeft;
            $.each(fixedDiv, function(item, value){
                $(value).width(fixedDivParent);
                $(value).css('left', appContainerOffsetLeft);
            });
        });

        $(introButton).on('click', function(){
            console.log('dupa');
            TweenLite.to(window, .5, {scrollTo:'#about', ease:Power2.easeOut});
        });
        animations.animateIntro();



});
