'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandElement = function (Arr) {
  return Arr[Math.floor(Math.random() * Arr.length)];
};

var generateUser = function () {
  return {
    name: getRandElement(WIZARD_NAMES) + ' ' + getRandElement(WIZARD_SURNAMES),
    coatColor: getRandElement(coatColor),
    eyesColor: getRandElement(eyesColor)
  };
};

var generateUserArr = function (length) {
  var userArr = [];

  while (length--) {
    userArr.push(generateUser());
  }

  return userArr;
};

var createWizardElement = function (user) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = user.name;
  wizardElement.querySelector('.wizard-coat').style.fill = user.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = user.eyesColor;

  return wizardElement;
};

var addWizardElementInList = function (element, list) {
  var wizardElementNew = document.createDocumentFragment();

  wizardElementNew.appendChild(element);
  list.appendChild(wizardElementNew);
};

var useArr = generateUserArr(4);

for (var i = 0; i < useArr.length; i++) {
  var wizardElement = createWizardElement(useArr[i]);

  addWizardElementInList(wizardElement, similarListElement);
}

var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var setupSubmit = userDialog.querySelector('.setup-submit');
var setupUserName = userDialog.querySelector('.setup-user-name');
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball');


var openPopup = function () {
  userDialog.classList.remove('hidden');
};

var closePopup = function () {
  userDialog.classList.add('hidden');
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {

  if (evt.keyCode === 13) {
    closePopup();
  }
});

setupSubmit.addEventListener('click', function (evt) {
  if (setupUserName.validity.valid) {
    evt.preventDefault();

    closePopup();
  }

});

wizardCoat.addEventListener('click', function (evt) {
  var target = evt.target;
  target.style.fill = getRandElement(coatColor);
});

wizardEyes.addEventListener('click', function (evt) {
  var target = evt.target;
  target.style.fill = getRandElement(eyesColor);
});

wizardFireball.addEventListener('click', function (evt) {
  var target = evt.target;
  target.style.backgroundColor = getRandElement(fireballColor);
});

document.addEventListener('keydown', function (evt) {
  if (evt.target !== setupUserName && evt.keyCode === 27) {
    closePopup();
  }
});


