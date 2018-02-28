var animations = {
    activeSection: 0
};

// this function is responsible for animation of CONSOLE in INTRO section
animations.animateIntro = function() {

    var tl = new TimelineMax();
    tl.from('.console', 1, {transform: 'scale(0)', ease: Elastic.easeOut.config(1, 0.5), delay: 0.5});
    tl.staggerTo('#mypath', 2.5, {
        attr: {
            d: 'M15 350 h320'
        }
    });
    tl.to('.screen-border', 1, {attr: {'stroke-dashoffset': '0'}}, '-=1');


    animations.createController();
};

//this function creates ScrollMagic controller that fires a function on scroll
animations.createController = function() {
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: '#about',
        reverse:false,
        offset: (window.innerHeight > 400) ? 200 : 0  // set offset depending on screen height
    })
    .on('start', function(){animations.animateScreen();})
    .addTo(controller); // assign the scene to the controller

    animations.triggerActiveSection('#intro', 0);
    animations.triggerActiveSection('#about', 1);
    animations.triggerActiveSection('#stack', 2);
    animations.triggerActiveSection('#projects', 3);
    animations.triggerActiveSection('#why-me', 4);
    animations.triggerActiveSection('#contact', 5);


    new ScrollMagic.Scene({
        triggerElement: '#projects',
        reverse:false,
        offset: (window.innerHeight > 400) ? 200 : 0  // set offset depending on screen height
    })
    .on('start', function(){animations.animateProjects();})
    .addTo(controller); // assign the scene to the controller

    new ScrollMagic.Scene({
        triggerElement: '#why-me',
        reverse:false,
        offset: (window.innerHeight > 400) ? 200 : 0  // set offset depending on screen height
    })
    .on('start', function(){animations.animateQuestionMark();})
    .addTo(controller); // assign the scene to the controller

    new ScrollMagic.Scene({
        triggerElement: '#contact',
        reverse:false,
        offset: (window.innerHeight > 400) ? 200 : 0  // set offset depending on screen height
    })
    .on('start', function(){animations.animateContact();})
    .addTo(controller); // assign the scene to the controller
};

// below function creates triggers so when user scrolls over section it will update animations.activeSection variable
// then activeSection variable will give info to the 'intro button'
animations.triggerActiveSection = function(name, sectionNumber) {
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: name,
        reverse:true,
        offset: '1px',
        triggerHook: 0.01
    })
    .on('start', function(){
        animations.activeSection = sectionNumber;
    })
    .addTo(controller); // assign the scene to the controller
};

// this function is responsible for animation of SCREEN/MOBILE in ABOUT section
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

animations.animateProjects = function() {
    var tl = new TimelineMax();
    tl.staggerTo('.card-wrapper', 2, {transform: 'translateX(0)', opacity: 1,ease: Bounce.easeOut, y: -500}, 0.1);
};


animations.animateQuestionMark = function(){
    var tl = new TimelineMax({delay:0.5, repeat: -1});
    tl.to('.question-mark', 1.5, {rotation:180, svgOrigin:'556 698', ease: Bounce.easeOut});
    tl.to('.question-mark', 1.5, {rotation:0, svgOrigin:'556 698', ease: Power2.easeInOut, delay: 0.5});
    tl.to('.question-mark', 0.5, {attr: {fill: '#484848'}});
    tl.to('.question-mark', 0.5, {attr: {fill: '#ffffff'}});
    tl.to('.question-mark', 0.5, {attr: {fill: '#484848'}});
    tl.to('.question-mark', 0.5, {attr: {fill: '#ffffff'}});
    tl.to('.question-mark', 0.5, {attr: {fill: '#484848'}});
    tl.to('.question-mark', 1, {attr: {fill: '#ffffff'}});
    tl.to('.period', 1, {opacity: 1});
    tl.to('.question-mark', 1, {opacity: 0});
    tl.set({}, {}, '+=2');
    tl.to('.question-mark', 1, {opacity: 1});
    tl.to('.period', 1, {opacity: 0});
};

animations.animateContact = function(){
    var tl = new TimelineMax({delay:1});
    tl.to('.envelope, .envelope__shadows', 2, {scale:0.4,  svgOrigin:'600 600', ease: Power4.easeOut});
    tl.to('.envelope', 1.5, {x: -5200, y:0,  svgOrigin:'600 600', ease:  Back.easeIn.config(1)});
    tl.to('.envelope__shadow', 0.5, {attr: {width: '400'},  svgOrigin:'600 600', ease:  Power2.easeInOut}, '-=0.7');
    tl.to('.envelope__shadow--long', 0.5, {attr: {width: '500'},  svgOrigin:'600 600', ease:  Power2.easeInOut}, '-=0.7');
    tl.set({}, {}, '+=1');
    tl.to('.envelope', 0, {opacity: 0,  svgOrigin:'600 600', ease:  Back.easeIn.config(1)});
    tl.to('.envelope', 0, {x:0, y:0, svgOrigin:'600 600', ease:  Back.easeIn.config(1)});
    tl.to('.envelope', 0, {scale: 1, svgOrigin:'600 600', ease:  Back.easeIn.config(1)});
    tl.to('.envelope__shadow, .envelope__shadow--long', 0.5, {opacity: 0,  svgOrigin:'600 600', ease:  Back.easeIn.config(1)});
    tl.set({}, {}, '+=1');
    tl.to('.envelope', 1, {opacity: 1,  svgOrigin:'600 600'});
};
