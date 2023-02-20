import Choices from 'choices.js';

function initDefaultSelect() {
  const elements = document.querySelectorAll('.choices-single-default');
  elements.forEach((element) => {
    // eslint-disable-next-line
    const choice = new Choices(element, {
      allowHTML: true,
      searchEnabled: false,
      itemSelectText: '',
    });
  });
}

function initMultipleSelect() {
  const elements = document.querySelectorAll('.choices-multiple-remove-button');
  const resetBtn = document.querySelector('.select-multiple__reset-btn');

  elements.forEach((element) => {
    // eslint-disable-next-line
    const choice = new Choices(element, {
      allowHTML: true,
      searchEnabled: false,
      itemSelectText: '',
      removeItems: true,
      removeItemButton: true,
    });

    resetBtn.addEventListener('click', function () {
      setTimeout(() => {
        choice.destroy();
      }, 900);

      setTimeout(() => {
        choice.init();
      }, 1000);

    });
  });
}


export {initDefaultSelect, initMultipleSelect};
