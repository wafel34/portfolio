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
    var tl = new TimelineMax({delay:0.5, repeat: -1});
    tl.to('.screen-rectangle', 2, {attr: { width: 400}, transform: 'translateX(400px)', ease: Power2.easeInOut});
    tl.to('.screen-background', 2, {attr: { width: 400}, transform: 'translateX(300px)', ease: Power2.easeInOut}, '-=2');
    tl.to('.column-2', 1, {opacity: 0, ease: Power4.easeInOut}, '-=2');
    tl.to('.column-1__photo', 2, {attr: {width: 350},transform: 'translateX(275px)', ease: Power4.easeInOut}, '-=2');
    tl.to('.column-1__header-1', 2, {attr: {width: 350}, transform: 'translate(125px, 125px)', ease: Power4.easeInOut}, '-=2');
    tl.to('.column-1__header-2', 2, {attr: {width: 350}, transform: 'translate(125px, 125px)', ease: Power4.easeInOut}, '-=2');
    tl.to('.column-1__text', 2, {attr: {width: 350, height: 200}, transform: 'translate(275px, 100px)', ease: Power4.easeInOut}, '-=2');
    tl.to('.bottom', 0.5, {opacity: 0, ease: Power4.easeInOut}, '-=2');

    tl.set({}, {}, '+=2');
    tl.staggerTo('.screen-rectangle', 2, {attr: { width: 1200}, transform: 'translateX(0px)', ease: Power2.easeInOut});
    tl.to('.screen-background', 2, {attr: { width: 1000}, transform: 'translateX(0px)', ease: Power2.easeInOut}, '-=2');
    tl.to('.column-1__photo', 2, {attr: {width: 100},transform: 'translateX(0xp)', ease: Power4.easeInOut}, '-=2');
    tl.to('.column-1__header-1', 2, {attr: {width: 250}, transform: 'translate(0px)', ease: Power4.easeInOut}, '-=2');
    tl.to('.column-1__header-2', 2, {attr: {width: 250}, transform: 'translate(0px)', ease: Power4.easeInOut}, '-=2');
    tl.to('.column-1__text', 2, {attr: {width: 400, height: 300}, transform: 'translate(0px)', ease: Power4.easeInOut}, '-=2');
    tl.to('.column-2', 1, {opacity: 1, ease: Power4.easeInOut}, '-=1');
    tl.to('.bottom', 0.5, {opacity: 1, ease: Power4.easeInOut}, '-=1.5');

    tl.set({}, {}, '+=2');

};

var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
    triggerElement: '#about',
    reverse:false,
    offset: (window.innerHeight > 400) ? 200 : 0  // set offset depending on screen height
})
    .on('start', function(){animations.animateScreen();})
    .addTo(controller); // assign the scene to the controller
