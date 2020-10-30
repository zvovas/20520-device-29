// Modal Write Us

const writeUsOpen = document.querySelector('.contacts-button');
const writeUsPopup = document.querySelector('.modal-write-us');
const writeUsClose = writeUsPopup.querySelector('.modal-close-write-us');
const writeUsForm = writeUsPopup.querySelector('.write-us-form');
const writeUsName = writeUsForm.querySelector('[name="name"]');
const writeUsEmail = writeUsForm.querySelector('[name="e-mail"]');
const writeUsMessage = writeUsForm.querySelector('[name="message"]');

let isStorageSupport = true;
let storageUsername = '';
let storageEmail = '';

try {
  storageUsername = localStorage.getItem('username');
  storageEmail = localStorage.getItem('e-mail');
} catch (err) {
  isStorageSupport = false;
}

writeUsOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add('modal-show');

  if (storageUsername && storageEmail) {
    writeUsName.value = storageUsername;
    writeUsEmail.value = storageEmail;
    writeUsMessage.focus();
  } else if (storageUsername) {
    writeUsName.value = storageUsername;
    writeUsEmail.focus();
  } else {
    writeUsName.focus();
  }
});

writeUsClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove('modal-show');
  writeUsPopup.classList.remove('modal-error');
});

writeUsForm.addEventListener('submit', function (evt) {
  if (!writeUsName.value || !writeUsEmail.value || !writeUsMessage.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove('modal-error');
    writeUsPopup.offsetWidth;
    writeUsPopup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('username', writeUsName.value);
      localStorage.setItem('e-mail', writeUsEmail.value);
    }
  }
});

// Modal Map

const mapOpen = document.querySelector('.contacts-map');
const mapPopup = document.querySelector('.modal-map');
const mapClose = mapPopup.querySelector('.modal-close-map');

mapOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (writeUsPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      writeUsPopup.classList.remove('modal-show');
      writeUsPopup.classList.remove('modal-error');
    }
  }
});

// Sliders controls

const sliderClickHandler = function (sliderArea, sliderButton, slide) {
  sliderButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    sliderArea.querySelector('.current-button').tabIndex = 0;
    sliderArea.querySelector('.current-button').classList.remove('current-button');
    sliderArea.querySelector('.current-slide').classList.remove('current-slide');
    sliderButton.classList.add('current-button');
    sliderButton.tabIndex = -1;
    slide.classList.add('current-slide');
  })
}



// Popular Products Slider

const sliderPopular = document.querySelector('.popular-products');
const sliderPopularControls = sliderPopular.querySelectorAll('.popular-products-controls button');
const sliderPopularContents = sliderPopular.querySelectorAll('.popular-products-item');

for (let i = 0; i < sliderPopularControls.length; i++) {
  sliderClickHandler(sliderPopular, sliderPopularControls[i], sliderPopularContents[i]);
}

// Services Slider

const sliderServices = document.querySelector('.services');
const sliderServicesControls = sliderServices.querySelectorAll('.services-slider');
const sliderServicesContents = sliderServices.querySelectorAll('.services-item');

for (let i = 0; i < sliderPopularControls.length; i++) {
  sliderClickHandler(sliderServices, sliderServicesControls[i], sliderServicesContents[i]);
}

