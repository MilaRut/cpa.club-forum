const alertsBtn = document.querySelector('.user-menu__btn');
const alertsList = document.querySelector('.user-menu__alerts-list');
const alertsLinks = document.querySelectorAll('.user-menu__alerts-link');

function openAlerts() {
  alertsBtn.addEventListener('click', function () {
    if (alertsList.classList.contains('active')) {
      alertsBtn.classList.remove('active');
      alertsList.classList.remove('active');
    } else {
      alertsBtn.classList.add('active');
      alertsList.classList.add('active');
    }
  });
}

function closeAlerts() {
  alertsLinks.forEach((link) => {
    link.addEventListener('click', function () {
      alertsList.classList.remove('active');
      alertsBtn.classList.remove('active');
    });
  });

  document.addEventListener('click', function (e) {
    const target = e.target;
    const itsMenu = target === alertsList || alertsList.contains(target);
    const itsBtnMenu = target === alertsBtn;
    const navIsOpen = alertsList.classList.contains('active');

    if (!itsMenu && !itsBtnMenu && navIsOpen) {
      alertsBtn.classList.remove('active');
      alertsList.classList.remove('active');
    }
  });
}

export {openAlerts, closeAlerts};
