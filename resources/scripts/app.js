
$(document).ready(function(){


    var fixedDiv = $('.svg-wrapper'),
        appContainerOffsetLeft = $('.app-container')[0].offsetLeft,
        fixedDivParent = fixedDiv[0].parentElement.clientWidth,
        introButton = $('#intro-button'),
        navButton = $('.navbar__link'),
        contactForm = $('#contactForm');
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

        var sections = ['#intro', '#about', '#stack', '#projects', '#why-me','#contact'];
        $(introButton).on('click', function(){
            var activeSection = animations.activeSection;
            TweenLite.to(window, 0.5, {scrollTo:sections[activeSection+1], ease:Power2.easeOut});
        });
        animations.animateIntro();

        $(navButton).on('click', function(e){
            e.preventDefault();
            var elem = $(this).attr('href');
            TweenLite.to(window, 0.5, {scrollTo:elem, ease:Power2.easeOut});
        });

        $(contactForm).on('submit', function(e){
            e.preventDefault();
            animations.sendEmail.emailSending();
            $.post('/contact', {
                contactName: e.target.contactName.value,
                contactEmail: e.target.contactEmail.value,
                contactMessage: e.target.contactMessage.value
            })
            .done( function(msg) {
                console.log(msg);
                animations.sendEmail.emailSent();
                e.target.contactName.value = '';
                e.target.contactEmail.value = '';
                e.target.contactMessage.value = '';
            }).fail(function(error) {
                animations.sendEmail.emailNotSent();
            });

        });
});
