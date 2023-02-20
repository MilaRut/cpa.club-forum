import {initCustomPopup} from '../utils/utils';

const unlogged = document.querySelector('.user-menu__unlogged');

function initLoginPopup() {
  if (unlogged) {
    initCustomPopup();
  }
}

export {initLoginPopup};
