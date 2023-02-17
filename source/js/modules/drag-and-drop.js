const dropZone = document.querySelector('#drop-zone');
const eventsList = ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'];

let handler = function (e) {
  e.preventDefault();
  e.stopPropagation();
};

eventsList.forEach((event), function () {
  dropZone.addEventListener(event, handler);
});

dropZone.addEventListener('dragover', function () {
  dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragenter', function () {
  dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', function () {
  dropZone.classList.remove('dragover');
});
