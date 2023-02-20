import {initCustomPopup} from '../utils/utils';

const adminPopup = document.querySelector('#admin');
const togglePasswordBtn = document.querySelector('.admin-popup__password-toggle-btn');
const input = document.querySelector('#admin-password');


function initAdminPopup() {
  if (adminPopup) {
    initCustomPopup();

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
  }
}

export {initAdminPopup};
