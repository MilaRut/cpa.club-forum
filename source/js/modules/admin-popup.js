import {FocusLock} from '../utils/focus-lock';

const focusLock = new FocusLock();

const openBtns = document.querySelectorAll('.open-admin-popup');
const closeBtn = document.querySelector('.admin-popup__close-btn');
const popupOverlay = document.querySelector('.admin-popup-overlay');
const popup = document.querySelector('.admin-popup');
const togglePasswordBtn = document.querySelector('.admin-popup__password-toggle-btn');
const input = document.querySelector('#admin-password');

function openPopup() {
  popupOverlay.classList.add('active');
  popup.classList.add('active');
  focusLock.lock('.admin-popup-overlay');
}

function closePopup() {
  popupOverlay.classList.remove('active');
  popup.classList.remove('active');
  focusLock.unlock();
}

function initAdminPopup() {
  if (popup) {
    openBtns.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        openPopup();
      });
    });

    togglePasswordBtn.addEventListener('click', () => {
      let value = input.getAttribute('type');
      if (value === 'password') {
        input.setAttribute('type', 'text');
        togglePasswordBtn.innerHTML = 'Спрятать';
      } else {
        input.setAttribute('type', 'password');
        togglePasswordBtn.innerHTML = 'Показать';
      }
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
}

export {initAdminPopup};
