const alertsBlock = document.querySelector('.user-menu__alerts');
const alertsBtn = document.querySelector('.user-menu__alerts-btn');
const alertsList = document.querySelector('.user-menu__alerts-list');
const alertsLinks = document.querySelectorAll('.user-menu__alerts-link');

function prepareClosing() {
  alertsBtn.classList.remove('active');
  alertsList.classList.remove('active');
}

function openAlerts() {
  if (alertsBlock) {
    alertsBtn.addEventListener('click', function () {
      if (alertsList.classList.contains('active')) {
        prepareClosing();
      } else {
        alertsBtn.classList.add('active');
        alertsList.classList.add('active');
      }
    });
  }
}

function closeAlerts() {
  if (alertsBlock) {
    alertsLinks.forEach((link) => {
      link.addEventListener('click', function () {
        prepareClosing();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        prepareClosing();
      }
    });

    document.addEventListener('click', function (e) {
      const target = e.target;
      const itsMenu = target === alertsList || alertsList.contains(target);
      const itsBtnMenu = target === alertsBtn;
      const navIsOpen = alertsList.classList.contains('active');

      if (!itsMenu && !itsBtnMenu && navIsOpen) {
        prepareClosing();
      }
    });
  }
}

export {openAlerts, closeAlerts};
