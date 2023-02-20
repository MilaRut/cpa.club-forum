import {initCustomPopup} from '../utils/utils';

const editPopup = document.querySelector('#edit');

function initEditPopup() {
  if (editPopup) {
    initCustomPopup();
  }
}

export {initEditPopup};
