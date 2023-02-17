const cookiesPopup = document.querySelector('.cookies-popup');
const submitBtn = document.querySelector('.cookies-popup__submit-btn');

// function openPopup() {
//   cookiesPopup.classList.add('active');
// }

function closePopup() {
  cookiesPopup.classList.remove('active');
}

function initCookiesPopup() {
  if (cookiesPopup) {
    // setTimeout(() => {
    //   openPopup();
    // }, 5000);

    document.addEventListener('click', (e) => {
      if (e.target === submitBtn) {
        closePopup();
      }
    });
  }
}

export {initCookiesPopup};
