const body = document.body;

const navigation = document.querySelector('#primary-navigation');
const navigationToggle = document.querySelector('.header__toggle');

navigationToggle.addEventListener('click', () => {
    const navIsVisible = navigation
        .getAttribute('data-visible') === 'true';

    if (navIsVisible) {
        body.classList.remove('covered');
        navigation.setAttribute('data-visible', false);
        navigationToggle.setAttribute('data-opened', false);
    } else {
        body.classList.add('covered');
        navigation.setAttribute('data-visible', true);
        navigationToggle.setAttribute('data-opened', true);
    }
});