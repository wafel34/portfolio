function animateIntro() {
    var tl = new TimelineMax();
    tl.from('.console', 1, {transform: 'scale(0)', ease: Elastic.easeOut.config(1, 0.5), delay: 0.5});
    //tl.staggerFrom('.console-text', 1, {transform: 'scaleX(0)'});


}

function animateScreen() {
    TweenLite.to('.screen-rectangle', 1, {width: 400, transform: 'translateX(400px)', ease: Power2.easeInOut});
    TweenLite.to('.bottom', 0.5, {opacity: 0, ease: Power4.easeInOut});
}
