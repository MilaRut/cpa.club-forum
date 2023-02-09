import {FocusLock} from '../utils/focus-lock';

const focusLock = new FocusLock();

const openBtns = document.querySelectorAll('.open-popup');
const closeBtn = document.querySelector('.popup__close-btn');
const popupOverlay = document.querySelector('.popup-overlay');
const popup = document.querySelector('.popup');
const login = document.getElementById('login');
const signup = document.getElementById('signup');

function openPopup() {
  popupOverlay.classList.add('active');
  popup.classList.add('active');
  focusLock.lock('.popup-overlay');
}

function closePopup() {
  popupOverlay.classList.remove('active');
  popup.classList.remove('active');
  focusLock.unlock();
}

function initPopup() {
  openBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      openPopup();
      if (button.classList.contains('login-btn')) {
        signup.classList.remove('active');
        login.classList.add('active');
      } else {
        login.classList.remove('active');
        signup.classList.add('active');
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupOverlay || e.target === closeBtn) {
      closePopup();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePopup();
    }
  });
}

export {initPopup};
