($(function(){

    /* if mouse move over #stack section
        grab mouse X position
        grab LEFT offset of .technologies__front div (div with front end images)
        grab width of the parent .technologies div
    */

    // grab #stack section and .technologies__front div
    var technologiesFront = $('.technologies__front'),
        technologiesParent = $('.technologies')[0].clientWidth,
        imagesRow = $('.images-row'),
        stackSection = $('#stack');


        $.each(imagesRow, function(item, value){
            $(value).width(technologiesParent = $('.technologies')[0].clientWidth);
        });


        $(window).resize(function(){
            technologiesParent = $('.technologies')[0].clientWidth;

            $.each(imagesRow, function(item, value){
                $(value).width(technologiesParent = $('.technologies')[0].clientWidth);
            });
        });



    $(stackSection).on('mousemove', function(e){
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
    });

    //same for touchmove
    $(stackSection).on('touchmove', function(e){
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
    });

}));
