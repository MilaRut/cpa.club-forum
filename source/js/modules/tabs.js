const tabs = document.querySelector('.tabs');

function initTabs() {
  const tabsBtn = document.querySelectorAll('.tabs__btn');
  const tabsItems = document.querySelectorAll('.tabs__content');

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

function initSubTabs() {
  const subtabsBtns = document.querySelector('.subtabs-btns');
  const subtabsBtn = document.querySelectorAll('.subtabs__btn');
  const subtabsItems = document.querySelectorAll('.subtabs__content');

  if (tabs && subtabsBtns) {
    let itemCount = subtabsBtns.childElementCount;

    if (itemCount > 1) {

      subtabsBtns.classList.add('active');

      subtabsBtn.forEach(function (item) {
        item.addEventListener('click', function () {
          let currentBtn = item;
          let tabId = currentBtn.getAttribute('data-tab');
          let currentTab = document.querySelector(tabId);
          if (!currentBtn.classList.contains('active')) {
            subtabsBtn.forEach(function (btn) {
              btn.classList.remove('active');
            });

            subtabsItems.forEach(function (el) {
              el.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
          }
        });
      });
    }
  }
}

export {initTabs, initSubTabs};

