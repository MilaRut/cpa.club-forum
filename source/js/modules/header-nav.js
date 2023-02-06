const headerNavBtn = document.querySelector('.user-menu__nav-btn');
const headerNav = document.querySelector('.header-nav');
const headerNavLinks = document.querySelectorAll('.header-nav__link');

function prepareClosing() {
  headerNavBtn.classList.remove('active');
  headerNav.classList.remove('active');
}

function openHeaderNav() {
  headerNavBtn.addEventListener('click', function () {
    if (headerNav.classList.contains('active')) {
      prepareClosing();
    } else {
      headerNavBtn.classList.add('active');
      headerNav.classList.add('active');
    }
  });
}

function closeHeaderNav() {
  headerNavLinks.forEach((link) => {
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
    const itsMenu = target === headerNav || headerNav.contains(target);
    const itsBtnMenu = target === headerNavBtn;
    const navIsOpen = headerNav.classList.contains('active');

    if (!itsMenu && !itsBtnMenu && navIsOpen) {
      headerNavBtn.classList.remove('active');
      headerNav.classList.remove('active');
    }
  });
}

export {openHeaderNav, closeHeaderNav};
