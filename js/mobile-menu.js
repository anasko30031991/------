document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
});
const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
// alert(mobileMenu, menuBtnOpen, menuBtnClose);

const toggleMenu = () => mobileMenu.classList.toggle('is-open');
const disableScroll = () =>
  document.body.classList.toggle('is-scroll-disabled');
// alert(toggleMenu, disableScroll);

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);