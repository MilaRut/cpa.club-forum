const tileViewBtn = document.querySelector('.catalog__view-btn--tiles');
const listViewBtn = document.querySelector('.catalog__view-btn--list');
const catalogList = document.querySelector('.catalog__list');

function toggleCatalogView() {
  if (document.contains(catalogList)) {

    tileViewBtn.addEventListener('click', () => {
      listViewBtn.classList.remove('active');
      tileViewBtn.classList.add('active');
      catalogList.classList.remove('catalog__list--list');
      catalogList.classList.add('catalog__list--tile');
    });

    listViewBtn.addEventListener('click', () => {
      tileViewBtn.classList.remove('active');
      listViewBtn.classList.add('active');
      catalogList.classList.remove('catalog__list--tile');
      catalogList.classList.add('catalog__list--list');
    });
  }
}

export {toggleCatalogView};
