document.addEventListener('DOMContentLoaded', () => {
  const searchBlock = document.querySelector('.header__search');
  const searchButton = searchBlock.querySelector('button');

  const burgerButton = document.querySelector('.hamburger');
  const navBlock = document.querySelector('.header__nav__links');

  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    searchBlock.classList.toggle('open');
  });

  burgerButton.addEventListener('click', (e) => {
    e.preventDefault();
    burgerButton.classList.toggle('is-active');
    navBlock.classList.toggle('is-active');
  });
});
