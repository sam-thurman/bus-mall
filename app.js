'use strict';

var picStorage = [];
var randomPics = [];
var clickCounter = 0;
var maxClicks = 25;

function getRandomPicIndex() {
  return Math.floor(Math.random() * (picStorage.length));
}

var pic = function (name, picture) {
  this.name = name;
  this.picture = picture;
  this.timesClicked = 0;
  this.timeShown = 0;

  this.markClick = function () {
    this.timesClicked++;
  };

  this.render = function (domReference) {
    domReference.src = picture;
  };
  picStorage.push(this);
};

var bagPic = new pic('bag pic', './images/bag.jpg');
var bananaPic = new pic('banana pic', './images/banana.jpg');
var bathroomPic = new pic('bathroom pic', './images/bathroom.jpg');
var bootsPic = new pic('boots pic', './images/boots.jpg');
var breakfastPic = new pic('breakfast pic', './images/breakfast.jpg');
var bubblegumPic = new pic('bubblegum pic', './images/bubblegum.jpg');
var chairPic = new pic('chiar pic', './images/chair.jpg');
var cthulhuPic = new pic('cthulhu pic', './images/cthulhu.jpg');
var dogDuckPic = new pic('dog duck pic', './images/dog-duck.jpg');
var dragonPic = new pic('dragon pic', './images/dragon.jpg');
var penPic = new pic('pen pic', './images/pen.jpg');
var petSweepPic = new pic('pet sweep pic', './images/pet-sweep.jpg');
var scissorsPic = new pic('scissors pic', './images/scissors.jpg');
var sharkPic = new pic('shark pic', './images/shark.jpg');
var sweepPic = new pic('sweep pic', './images/sweep.png');
var tauntaunPic = new pic('tauntaun pic', './images/tauntaun.jpg');
var unicornPic = new pic('unicorn pic', './images/unicorn.jpg');
var usbPic = new pic('usb pic', './images/usb.gif');
var waterCanPic = new pic('water can pic', './images/water-can.jpg');
var wineGlassPic = new pic('wine glass pic', './images/wine-glass.jpg');

function select3PicsAndRender() {
  randomPics = [];

  while (randomPics.length < 3) {
    var nextRandomValue = getRandomPicIndex;

    if (!randomPics.includes(nextRandomValue)) {
      randomPics.push(nextRandomValue);
    }
  }
  var placeholder0 = document.getElementById('placeholder-0');
  var placeholder1 = document.getElementById('placeholder-1');
  var placeholder2 = document.getElementById('placeholder-2');

  picStorage[randomPics[0]].render(placeholder0);
  picStorage[randomPics[1]].render(placeholder1);
  picStorage[randomPics[2]].render(placeholder2);
}

function clickManager(event) {
  clickCounter++;

  if (clickCounter < maxClicks) {
    alert(event.target.id);
    var picIndex;

    if (event.target.id === 'placeholder-0') {
      picIndex = 0;
    } else if (event.target.id === 'placeholder-1') {
      picIndex = 1;
    } else {
      picIndex = 2;
    }

    var clickedPic = picStorage[randomPics[picIndex]];
    clickedPic.markClick();
    alert('you have clicked on' + clickedPic);
    select3PicsAndRender();

  } else {
    alert('game over');
  }
}


// var sweaterPic = new pic('sweater pic', './images/sweater-pic.jpg')
// var placeholder0 = document.getElementById('placeholder-0');
// sweaterPic.render(placeholder1);

var placeholder0 = document.getElementById('placeholder-0');
var placeholder1 = document.getElementById('placeholder-1');
var placeholder2 = document.getElementById('placeholder-2');

placeholder0.addEventListener('click', clickManager);
placeholder1.addEventListener('click', clickManager);
placeholder2.addEventListener('click', clickManager);
select3PicsAndRender();



console.log('hello');
