const rangeSlider = document.querySelector('.range-slider');

function initRangeSlider() {

  if (rangeSlider) {

    const rangeInput = document.querySelectorAll('.range-slider__range-input input');
    const priceInput = document.querySelectorAll('.range-slider__price-input input');
    const range = document.querySelector('.range-slider__slider .range-slider__progress');

    let priceGap = 1;
    priceInput.forEach((input) => {
      input.addEventListener('input', (e) => {
        let minPrice = parseInt(priceInput[0].value, 10);
        let maxPrice = parseInt(priceInput[1].value, 10);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
          if (e.target.className === 'range-slider__input-min') {
            rangeInput[0].value = minPrice;
            range.style.left = ((minPrice / rangeInput[0].max) * 100) + '%';
          } else {
            rangeInput[1].value = maxPrice;
            range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + '%';
          }
        }
      });
    });
    rangeInput.forEach((input) => {
      input.addEventListener('input', (e) => {
        let minVal = parseInt(rangeInput[0].value, 10);
        let maxVal = parseInt(rangeInput[1].value, 10);
        if ((maxVal - minVal) < priceGap) {
          if (e.target.className === 'range-slider__range-min') {
            rangeInput[0].value = maxVal - priceGap;
          } else {
            rangeInput[1].value = minVal + priceGap;
          }
        } else {
          priceInput[0].value = minVal;
          priceInput[1].value = maxVal;
          range.style.left = ((minVal / rangeInput[0].max) * 100) + '%';
          range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
        }
      });
    });
  }
}

export {initRangeSlider};
