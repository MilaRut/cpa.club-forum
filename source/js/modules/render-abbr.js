const abbrItem = document.querySelectorAll('.abbr-item');

function renderAbbr() {

  if (abbrItem) {
    abbrItem.forEach((item) => {
      const abbrContent = item.querySelector('.abbr-name');
      const userName = item.querySelector('.user-name');

      const userNameArr = userName.innerText.split(' ');

      let result = '';
      for (let i = 0; i < userNameArr.length; i++) {
        let firstLetter = userNameArr[i][0];
        result = result + firstLetter;
        abbrContent.textContent = result;
      }
    });
  }
}

export {renderAbbr};
