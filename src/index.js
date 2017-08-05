/**
 * index.js
 */

if (typeof console === 'object') {
    console.log('\n' +
        '  |\\      _,,,,--,,_       \n' + 
        '  /,`.-\'`\'    -,  \\-;,   \n' +  
        ' |,4-  ) ),,__ ,\\ (  ;;    [t] tandem.ly\n' + 
        ' ---\'\'(.\'--\'  `-\'`.)`  \n' + 
        '\n' +
        'Hey there!  We\'re glad you\'re curious about our code.\n' +
        'We\'d love to chat with you about what you\'re working on\n' +
        'and see how you could help us improve!\n' +
        '                                      -- hireme@tandem.ly\n' +
        '\n'
    );
}
var toggle = document.querySelector('.header__nav-button');
var nav = document.querySelector('nav.global-nav');
const header = document.querySelector('#header');
const hero = document.querySelector('.hero .container_full') || document.querySelector('.section.first .container_full');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  nav.classList.toggle('open');
  header.classList.toggle('open');
});

// const hero = document.querySelector('.hero .container_full');
// const fixed_cta = document.querySelector('.fixed-scroll-header');
// const logo = document.querySelector('.logo');

// const pos = hero.getBoundingClientRect().bottom;
const pos = (hero && hero.offsetHeight) || 150;
const scroll = window.requestAnimationFrame;
console.log(`pos = ${pos}`)

// const removeClass = (el, className) => {
//     if (el.classList)
//         el.classList.remove(className);
//     else
//         el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
// }

// const addClass = (el, className) => {
//     if (el.classList)
//         el.classList.add(className);
//     else
//         el.className += ' ' + className;
// }

const loop = () => {
    if (window.pageYOffset >= pos) { // && /slide-up/.test(fixed_cta.className)) {
        // console.log('show background');
        header.classList.add('affixed');
    //     removeClass(fixed_cta, 'slide-up');
    //     addClass(fixed_cta, 'slide-down');
    //     addClass(logo, 'fixed-logo');
    }
    if (window.pageYOffset < pos ) { // && /slide-down/.test(fixed_cta.className)) {
        // console.log('hide background');
        header.classList.remove('affixed');
    //     removeClass(fixed_cta, 'slide-down');
    //     addClass(fixed_cta, 'slide-up');
    //     removeClass(logo, 'fixed-logo');
    }
    scroll(loop);
}

loop();


