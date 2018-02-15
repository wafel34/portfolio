var animations = {};

animations.animateIntro = function() {
    var tl = new TimelineMax();
    tl.from('.console', 1, {transform: 'scale(0)', ease: Elastic.easeOut.config(1, 0.5), delay: 0.5});
    tl.staggerTo('#mypath', 3, {
        attr: {
            d: 'M15 350 h500'
        }
    });
};

animations.animateScreen = function () {
    TweenLite.to('.screen-rectangle', 1, {width: 400, transform: 'translateX(400px)', ease: Power2.easeInOut});
    TweenLite.to('.bottom', 0.5, {opacity: 0, ease: Power4.easeInOut});
};

var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
    triggerElement: "#about"
})
    .on('start', function(){animations.animateScreen();})
    .setClassToggle('#about', 'dupa') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller
