import {Editor} from '../../ckeditor5-36.0.1/build/ckeditor';

const companyAdmin = document.querySelector('.company-admin');

function initEditor() {

  if (companyAdmin) {

    Editor.create(document.querySelector('#editor'));
  }
}

export {initEditor};
