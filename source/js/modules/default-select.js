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

    // функции для мультиселекта

    const container = document.querySelector('.select-multiple');

    const output = container.querySelector('.choices__list--multiple');
    const list = container.querySelector('[role="listbox"]');
    const choicesInner = container.querySelector('.choices__inner');

    // const unselectedItems = container.querySelectorAll('.choices__item--choice');
    // const selectedItems = container.querySelectorAll('.choices__item--selectable');
    // const styles = window.getComputedStyle(choicesInner);

    window.addEventListener('click', function () {
      setTimeout(() => {
        console.log(choicesInner);
        console.log(output.childNodes[0].clientWidth);
        console.log(list.childNodes[0].clientWidth);
        console.log(choicesInner.clientWidth);

        // let itemsWidths = [];
        // eslint-disable-next-line
        // selectedItems.forEach((item) => {
        //   itemsWidths.push(item.clientWidth);
        //   console.log(itemsWidths);
        // });

        // console.log(list.childNodes[0].clientWidth);
        // console.log(choicesInner.clientWidth);
        // console.log(styles.padding);

      }, 300);
    });

    // function showItems() {
    //   console.log('click');
    // }

    // unselectedItems.forEach((item) => {
    //   item.addEventListener('click', function () {
    //     console.log('click');
    //   });
    // });

    // function checkVisibility() {
    //   selectedItems.forEach((item) => {
    //     let currentItem = item;
    //     let itemValue = currentItem.getAttribute('data-value');
    //     if (window.getComputedStyle(item).visibility === 'hidden') {
    //       console.log(itemValue);
    //     }
    //   });
    // }

    // unselectedItems.forEach((uItem) => {
    //   uItem.addEventListener('click', function () {
    //     checkVisibility();
    //   });
    // });


    // функции для мультиселекта

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
