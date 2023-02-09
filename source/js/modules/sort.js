const sort = document.querySelector('.sort');
const sortBtn = document.querySelectorAll('.sort__btn');
const sortList = document.querySelectorAll('.sort__list');
const sortLinks = document.querySelectorAll('.sort__link');

function prepareClosing() {
  sortBtn.forEach((button) => {
    button.classList.remove('active');
  });
  sortList.forEach((list) => {
    list.classList.remove('active');
  });
}

function openSorting() {

  if (sort) {
    sortBtn.forEach(function (item) {
      item.addEventListener('click', function () {

        let currentBtn = item;
        let listId = currentBtn.getAttribute('data-sort');
        let currentList = document.querySelector(listId);
        if (currentBtn.classList.contains('active')) {
          currentBtn.classList.remove('active');
          currentList.classList.remove('active');

        } else {
          sortBtn.forEach(function (btn) {
            btn.classList.remove('active');
          });

          sortList.forEach(function (el) {
            el.classList.remove('active');
          });

          currentBtn.classList.add('active');
          currentList.classList.add('active');
        }
      });
    });
  }
}

function closeSorting() {
  sortLinks.forEach((link) => {
    link.addEventListener('click', function () {
      prepareClosing();
    });
  });
}

export {openSorting, closeSorting};

