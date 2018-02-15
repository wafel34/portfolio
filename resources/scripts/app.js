var $ = window.jQuery = require('jQuery');

$(document).ready(function(){
    var fixedDiv = $('.svg-wrapper'),
        fixedDivParent = fixedDiv[0].parentElement.clientWidth;
        $.each(fixedDiv, function(item, value){
            $(value).width(fixedDivParent);
            $(value).css('opacity', '1');
        });
        $(window).resize(function(){
            fixedDivParent = fixedDiv[0].parentElement.clientWidth;
            $.each(fixedDiv, function(item, value){
                $(value).width(fixedDivParent);
            });
        });

        animations.animateIntro();

});
