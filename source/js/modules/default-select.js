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
        const frameWidth = selectedContainer.offsetWidth - containerPaddings - 4;

        let widthsArr = [];
        let textsArr = [];
        let textsArr2 = [];

        items.forEach((item) => {
          let width = Math.floor(Number(window.getComputedStyle(item).width.slice(0, -2)) + Number(window.getComputedStyle(item).marginRight.slice(0, -2)));
          widthsArr.push(width);
          let text = item.innerText.slice(0, -11);
          textsArr.push(text);
        });

        let widthsSum = widthsArr.reduce((sum, current) => sum + current, 0);

        if (widthsSum > frameWidth) {

          popover.classList.add('active');

          let result = textsArr.splice(-1);
          textsArr2.push(result);
          popoverCount.innerText = textsArr2.length;
          popoverContent.innerText = textsArr2;

        } else {
          popover.classList.remove('active');
        }
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

// eslint-disable-next-line
export { initDefaultSelect, initMultipleSelect };
