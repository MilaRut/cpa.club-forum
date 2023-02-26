const alertPopup = document.querySelector('.alert-popup');
const alertCloseBtn = document.querySelector('.alert-popup__close-btn');


//   alertPopup.classList.add('active');


function initAlertPopup() {
  if (alertPopup) {

    // ???.addEventListener('click', () => {
    //   alertPopup.classList.add('active');
    // });

    alertCloseBtn.addEventListener('click', () => {
      alertPopup.classList.remove('active');
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        alertPopup.classList.remove('active');
      }
    });
  }
}

export {initAlertPopup};
