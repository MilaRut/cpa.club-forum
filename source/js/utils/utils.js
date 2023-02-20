import {FocusLock} from '../utils/focus-lock';

const focusLock = new FocusLock();

const openBtns = document.querySelectorAll('.open-popup');
const popupOverlay = document.querySelector('.popup-overlay');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__close-btn');
const popupItems = document.querySelectorAll('.popup__content-item');

function prepareOpening() {
  popupOverlay.classList.add('active');
  popup.classList.add('active');
  focusLock.lock('.popup-overlay');
}

function prepareClosing() {
  popupOverlay.classList.remove('active');
  popup.classList.remove('active');
  focusLock.unlock();
}

function resetClasses() {
  popupItems.forEach((item) => {
    item.classList.remove('active');
  });
}

function initCustomPopup() {
  if (popup) {
    openBtns.forEach((button) => {
      let currentBtn = button;
      let itemId = currentBtn.getAttribute('data-value');
      let currentItem = popup.querySelector(itemId);
      button.addEventListener('click', (e) => {
        resetClasses();
        e.preventDefault();
        prepareOpening();
        currentItem.classList.add('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (e.target === popupOverlay || e.target === closeBtn) {
        prepareClosing();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        prepareClosing();
      }
    });
  }
}

export {initCustomPopup};

