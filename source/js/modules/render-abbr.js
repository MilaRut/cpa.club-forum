const friends = document.querySelector('.friends');
const friendsItem = document.querySelectorAll('.friends__inner-content');

function renderAbbr() {
  if (friends) {
    friendsItem.forEach((item) => {
      const abbr = item.querySelector('.friends__abbr');
      const friendsName = item.querySelector('.friends__name').textContent;
      const friendsSurname = item.querySelector('.friends__surname').textContent;
      abbr.textContent = `${friendsName[0]}${friendsSurname[0]}`;
    });
  }
}

export {renderAbbr};
