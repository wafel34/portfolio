var $ = window.jQuery = require('jQuery');

$(document).ready(function(){
    var fixedDiv = $('.svg-wrapper'),
        fixedDivParent = fixedDiv[0].parentElement.clientWidth;
        $.each(fixedDiv, function(item, value){
            $(value).width(fixedDivParent);
        });
        $(window).resize(function(){
            fixedDivParent = fixedDiv[0].parentElement.clientWidth;
            $.each(fixedDiv, function(item, value){
                $(value).width(fixedDivParent);
            });
        });

});
