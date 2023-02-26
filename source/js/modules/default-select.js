import Choices from 'choices.js';

const select = document.querySelector('.select');

function initDefaultSelect() {
  if (select) {

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
}

function initMultipleSelect() {
  if (select) {

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

      // multiselect functions

      const multipleSelect = document.querySelector('.select-multiple');
      const selectedContainer = multipleSelect.querySelector('.choices__inner');
      const selectedList = multipleSelect.querySelector('.choices__list--multiple');
      const popover = document.querySelector('.popover');
      const popoverCount = document.querySelector('.popover__count');
      const popoverContent = document.querySelector('.popover__item');

      multipleSelect.addEventListener('change', function () {

        const items = Array.from(selectedList.children);
        const containerPaddings = Math.floor(Number(window.getComputedStyle(selectedContainer).paddingLeft.slice(0, -2))) + Math.floor(Number(window.getComputedStyle(selectedContainer).paddingRight.slice(0, -2)));
        const frameWidth = selectedContainer.offsetWidth - containerPaddings;

        let visible = [];
        let hidden = [];
        let widthsSum = 0;
        items.forEach((item) => {
          let width = Math.floor(Number(window.getComputedStyle(item).width.slice(0, -2)) + Number(window.getComputedStyle(item).marginRight.slice(0, -2)));
          widthsSum += width;
          if (widthsSum > frameWidth) {
            let text = item.innerText.slice(0, -11);
            hidden.push(text);
            popover.classList.add('active');
            popoverCount.innerText = hidden.length;
            popoverContent.innerText = hidden.join(', ');
          } else {
            visible.push(item);
            popover.classList.remove('active');
          }
        });
      });

      // end multiselect functions

      resetBtn.addEventListener('click', function () {
        setTimeout(() => {
          choice.destroy();
        }, 300);

        setTimeout(() => {
          choice.init();
          popover.classList.remove('active');
        }, 500);

        setTimeout(() => {
          initMultipleSelect();
        }, 1000);
      });
    });
  }
}

export {initDefaultSelect, initMultipleSelect};
