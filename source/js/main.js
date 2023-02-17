import {iosVhFix} from './utils/ios-vh-fix';
import {initCookiesPopup} from './modules/cookies-popup';
import {openAlerts, closeAlerts} from './modules/alerts';
import {openSorting, closeSorting} from './modules/sort';
import {openHeaderNav, closeHeaderNav} from './modules/header-nav';
import {initRangeSlider} from './modules/range-slider';
import {toggleCatalogView} from './modules/catalog-toggle';
import {initPopup} from './modules/popup';
import {initAdminPopup} from './modules/admin-popup';
import {initTabs, initSubTabs} from './modules/tabs';
import {checkArticles} from './modules/user-articles';
import {initDefaultSelect, initMultipleSelect} from './modules/default-select';
import {initEditor} from './modules/ck-editor';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
  initCookiesPopup();
  initPopup();
  initAdminPopup();
  openAlerts();
  closeAlerts();
  openHeaderNav();
  closeHeaderNav();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {

    openSorting();
    closeSorting();
    initRangeSlider();
    toggleCatalogView();
    initTabs();
    initSubTabs();
    checkArticles();
    initDefaultSelect();
    initMultipleSelect();
    initEditor();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
