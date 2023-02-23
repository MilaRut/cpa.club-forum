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

      window.addEventListener('change', function () {

        // eslint-disable-next-line
        // console.log('listwidth: ' + selectedList.offsetWidth);

        let items = Array.from(selectedList.children);

        let widthsArr = [];
        let textsArr = [];
        // let textsArr2 =[];

        items.forEach((item) => {
          let text = item.innerText.slice(0, -11);
          // eslint-disable-next-line
          console.log('text: ' + text);
          textsArr.push(text);

          let width = Number(window.getComputedStyle(item).width.slice(0, -2));
          widthsArr.push(width);
        });
        let widthsSum = widthsArr.reduce((sum, current) => sum + current, 0);

        // eslint-disable-next-line
        console.log('textsArr: ' + textsArr);
        // eslint-disable-next-line
        // console.log('widthsArr: ' + widthsArr);
        // eslint-disable-next-line
        console.log('framewidth: ' + (selectedContainer.offsetWidth - 118));
        // eslint-disable-next-line
        console.log('widthsSum: ' + widthsSum);
        // eslint-disable-next-line
        console.log('');

        if (widthsSum > (selectedContainer.offsetWidth - 118)) {
          // eslint-disable-next-line
          console.log('Oops!');
          let removed = textsArr.splice(-1);
          // eslint-disable-next-line
          console.log(textsArr);
          // eslint-disable-next-line
          console.log(removed);
          popover.classList.add('active');
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
        }, 400);

      });
    });
  }
}


export {initDefaultSelect, initMultipleSelect};
