/**
 * index.js
 */

if (typeof console === 'object') {
    console.log('\n' +
        '  |\\      _,,,,--,,_       Hey there!  We\'re glad you\'re curious about our code.\n' +
        '  /,`.-\'`\'    -,  \\-;,     We\'d love to chat with you about what you\'re working on\n' +
        ' |,4-  ) ),,__ ,\\ (  ;;    and see how you could help us improve!\n' +
        ' ---\'\'(.\'--\'  `-\'`.)`               -- hireme@tandem.ly\n' +
        '\n'
    );
}

const hero = document.querySelector('.hero .container_full');
const fixed_cta = document.querySelector('.fixed-scroll-header');
const pos = hero.offsetHeight;
const scroll = window.requestAnimationFrame;

const removeClass = (el, className) => {
    if (el.classList)
        el.classList.remove(className);
    else
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

const addClass = (el, className) => {
    if (el.classList)
        el.classList.add(className);
    else
        el.className += ' ' + className;
}

const loop = () => {
    if (window.pageYOffset >= pos && /slide-up/.test(fixed_cta.className)) {
        removeClass(fixed_cta, 'slide-up');
        addClass(fixed_cta, 'slide-down');
    }
    if (window.pageYOffset < pos && /slide-down/.test(fixed_cta.className)) {
        removeClass(fixed_cta, 'slide-down');
        addClass(fixed_cta, 'slide-up');
    }
    scroll(loop);
}

loop();


