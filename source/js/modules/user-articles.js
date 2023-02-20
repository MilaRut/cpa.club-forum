function checkArticles() {

  const articlesBlock = document.querySelector('.user-articles');

  if (articlesBlock) {
    const checkboxes = articlesBlock.querySelectorAll('[type="checkbox"]');
    const articleItems = articlesBlock.querySelectorAll('.user-articles__item');
    const delBtns = articlesBlock.querySelectorAll('.user-articles__article-btn--delete');
    const delAllBtn = articlesBlock.querySelector('.user-articles__article-btn--delete-all');


    checkboxes.forEach((el) => {
      let currentChk = el;
      currentChk.addEventListener('change', function (evt) {
        if (currentChk.checked) {
          evt.target.closest('.user-articles__item').classList.add('checked');
        } else {
          // change to necessary scenario
          evt.target.closest('.user-articles__item').classList.remove('checked');
        }
      });
    });

    delBtns.forEach((btn) => {
      let currentBtn = btn;
      currentBtn.addEventListener('click', function (evt) {
        if (evt.target.closest('.user-articles__item').classList.contains('checked')) {
          evt.target.closest('.user-articles__item').remove();
        } else {
          evt.preventDefault();
        }
      });
    });

    delAllBtn.addEventListener('click', function () {
      articleItems.forEach((item) => {
        if (item.classList.contains('checked')) {
          // change to necessary scenario
          item.remove();
        }
      });
    });
  }
}

export {checkArticles};
