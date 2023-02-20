const passRestore = document.querySelector('#pass-restore');
const slidesItems = document.querySelectorAll('.pass-restore__slides-item');
const paginationDots = document.querySelectorAll('.pass-restore__pagination-item');
const firstSlide = document.querySelector('#reset-slide_1');
const firstDot = document.querySelector('#pag_1');
const passRestoreBtns = document.querySelectorAll('.pass-restore__btn');
const passLoginBtns = document.querySelectorAll('.pass-restore__login-btn');

function resetClasses() {
  slidesItems.forEach((item) => {
    item.classList.remove('active');
  });
  paginationDots.forEach((dot) => {
    dot.classList.remove('active');
  });
}

function initPassRestore() {
  if (passRestore) {
    passRestoreBtns.forEach((button) => {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        resetClasses();
        let currentBtn = button;
        let slideId = currentBtn.getAttribute('data-value');
        let currentSlide = document.querySelector(slideId);
        let dotId = currentBtn.getAttribute('data-dot');
        let currentDot = document.querySelector(dotId);
        currentSlide.classList.add('active');
        currentDot.classList.add('active');
      });
    });

    passLoginBtns.forEach((btn) => {
      btn.addEventListener('click', function () {
        resetClasses();
        firstSlide.classList.add('active');
        firstDot.classList.add('active');
      });
    });
  }
}

export {initPassRestore};
