/**
 * index.js
 */
import qs from 'query-string';

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

const form = document.querySelector('form[name="hireus"]');
const connect_endpoint = "https://calendly.com/tandemly-core-team/discovery-chat";

const connect = (name, email) => {
    const params = qs.stringify({ name, email });
    const url = [connect_endpoint, '?', params].join('');
    console.log(`going to url: ${url}`);
    window.location.href = url;
}

if (form) {
    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        connect(name, email);
    });
}

// const pos = hero.getBoundingClientRect().bottom;
const pos = (hero && hero.offsetHeight) || 150;
const scroll = window.requestAnimationFrame;
console.log(`pos = ${pos}`)

const loop = () => {
    if (window.pageYOffset >= pos) { // && /slide-up/.test(fixed_cta.className)) {
        header.classList.add('affixed');
    }
    if (window.pageYOffset < pos ) { // && /slide-down/.test(fixed_cta.className)) {
        header.classList.remove('affixed');
    }
    scroll(loop);
}

loop();


