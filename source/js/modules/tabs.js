const tabs = document.querySelector('.tabs');
const tabsBtn = document.querySelectorAll('.tabs__btn');
const tabsItems = document.querySelectorAll('.tabs__content');

function initTabs() {

  if (tabs) {
    tabsBtn.forEach(function (item) {
      item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);
        if (!currentBtn.classList.contains('active')) {
          tabsBtn.forEach(function (btn) {
            btn.classList.remove('active');
          });

          tabsItems.forEach(function (el) {
            el.classList.remove('active');
          });

          currentBtn.classList.add('active');
          currentTab.classList.add('active');
        }
      });
    });
  }
}

export {initTabs};
