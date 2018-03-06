($(function(){
    /*
        THIS FUNCTION IS HANDLING STACK SECTION.
        MAINLY .technologies DIV WHICH IS DISPLAYING FRONT AND BACK END TECHS.
    */


    // grab #stack section and .technologies__front div
    var technologiesFront = $('.technologies__front'),
        technologiesParent = $('.technologies')[0].clientWidth,
        imagesRow = $('.images-row'),
        stackSection = $('#stack');
    /*
        if window width is greater than breakpoint
        take all imagesRow elements and set their width to .technologies width
        (this is to set fixed with, so mousemove event can work properly)
    */
    if (window.innerWidth > 585) {
        $.each(imagesRow, function(item, value){
            technologiesParent = $('.technologies')[0].clientWidth -20 ; //-20 is a margin on the parent
            $(value).width(technologiesParent);
        });

    }
    /*
        do the same as above on windo resize, but if width is smaller than 585 (breakpoint)
        then set width of .technologies and imagesRow to 100% instead of fixed
        (further changes are aplied with sass)
    */
    $(window).resize(function(){
        if (window.innerWidth >= 585) {
            technologiesParent = $('.technologies')[0].clientWidth -20; // -20 is a margin on the parent

            $.each(imagesRow, function(item, value){
                $(value).width(technologiesParent);
            });
        }
        if (window.innerWidth < 585) {
            technologiesFront.width('100%');
            $.each(imagesRow, function(item, value){
                $(value).width('100%');
            });
        }
    });
    /* if mouse move over #stack section
        grab mouse X position
        grab LEFT offset of .technologies__front div (div with front end images)
        grab width of the parent .technologies div
    */
    $(stackSection).on('mousemove', function(e){
        if (window.innerWidth > 585) {
            var offset = technologiesFront.offset(),
                technologiesFrontWindth = e.clientX - offset.left, //dynamically calculate width of .technologies__front div
                technologiesWidth = $('.technologies')[0].clientWidth;

            $(technologiesFront).width(technologiesFrontWindth); // set value to the one calculated above

            //if mouse X position is greater then div width, set set it to .technologies div's width.
            if(e.clientX > (offset.left+technologiesWidth)) {
                $(technologiesFront).width(technologiesWidth);
            }
            //if mouse X position is lower than offset, set it to offset
            if(e.clientX < offset.left) {
                $(technologiesFront).width(0);
            }
        }

    });

    //same for touchmove
    $(stackSection).on('touchmove', function(e){
        if (window.innerWidth > 585) {
            var offset = technologiesFront.offset(),
                screenX = e.originalEvent.touches[0].clientX, //dynamically calculate width of .technologies__front div
                technologiesWidth = $('.technologies')[0].clientWidth;

            $(technologiesFront).width(screenX - offset.left);

            //if mouse X position is greater then div width, set set it to .technologies div's width.
            if(screenX > (offset.left+technologiesWidth)) {
                $(technologiesFront).width(technologiesWidth);
            }

            //if mouse X position is lower than offset, set it to offset
            if(e.screenX < offset.left) {
                $(technologiesFront).width(0);
            }
        }
    });
}));
