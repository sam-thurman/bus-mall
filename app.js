'use strict';

var picStorage = [];
var PIC_DATA = 'picData';
var randomPics = [];
var clickCounter = 0;
var maxClicks = 25;

var placeholder0 = document.getElementById('placeholder-0');
var placeholder1 = document.getElementById('placeholder-1');
var placeholder2 = document.getElementById('placeholder-2');

function getRandomPicIndex() {
  return Math.floor(Math.random() * (picStorage.length));
}


var pic = function (name, picture) {
  this.name = name;
  this.picture = picture;
  this.timesClicked = 0;
  this.timesShown = 0;

  this.markClick = function () {
    this.timesClicked++;
  };

  this.markShown = function () {
    this.timesShown++;
  };

  this.render = function (domReference) {
    domReference.src = picture;
  };
  this.loadData = function (data) {
    this.timesClicked = data.timesClicked;
    this.timesShown = data.timesShown;

    this.name = data.name;
    this.picture = data.picture;
  };
  picStorage.push(this);
};

if (localStorage.getItem(PIC_DATA) === null) {
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
  picStorage.push(bagPic);
  picStorage.push(bananaPic);
  picStorage.push(bathroomPic);
  picStorage.push(bootsPic);
  picStorage.push(breakfastPic);
  picStorage.push(bubblegumPic);
  picStorage.push(chairPic);
  picStorage.push(cthulhuPic);
  picStorage.push(dogDuckPic);
  picStorage.push(dragonPic);
  picStorage.push(penPic);
  picStorage.push(petSweepPic);
  picStorage.push(scissorsPic);
  picStorage.push(sharkPic);
  picStorage.push(sweepPic);
  picStorage.push(tauntaunPic);
  picStorage.push(unicornPic);
  picStorage.push(usbPic);
  picStorage.push(waterCanPic);
  picStorage.push(wineGlassPic);

} else {
  var jsonData = localStorage.getItem(PIC_DATA);
  var data = JSON.parse(jsonData);

  for (var i = 0; i < data.length; i++) {
    var newPic = new pic('', '');
    newPic.loadData(data[i]);
    picStorage.push(newPic);
  }
}

function select3PicsAndRender() {
  var randomPics2 = randomPics;
  randomPics = [];

  while (randomPics.length < 3) {
    var nextRandomValue = getRandomPicIndex();

    if (!randomPics.includes(nextRandomValue) && !randomPics.includes(picStorage[nextRandomValue]) && !randomPics2.includes(picStorage[nextRandomValue])) {
      randomPics.push(picStorage[nextRandomValue]);
    }
  }
  var placeholder0 = document.getElementById('placeholder-0');
  var placeholder1 = document.getElementById('placeholder-1');
  var placeholder2 = document.getElementById('placeholder-2');

  randomPics[0].markShown();
  randomPics[1].markShown();
  randomPics[2].markShown();

  randomPics[0].render(placeholder0);
  randomPics[1].render(placeholder1);
  randomPics[2].render(placeholder2);
}

select3PicsAndRender();
function printResults(domReference) {
  for (var picStorageIndex = 0; picStorageIndex < picStorage.length; picStorageIndex++) {
    var li = document.createElement('li');
    li.textContent = `${picStorage[picStorageIndex].name} was shown ${picStorage[picStorageIndex].timesShown} times and voted for ${picStorage[picStorageIndex].timesClicked} times`;
    domReference.append(li);
  }
}
placeholder0.addEventListener('click', clickManager);
placeholder1.addEventListener('click', clickManager);
placeholder2.addEventListener('click', clickManager);

function clickManager(event) {
  clickCounter++;

  if (clickCounter < maxClicks) {

    var picIndex;

    if (event.target.id === 'placeholder-0') {
      picIndex = 0;
    } else if (event.target.id === 'placeholder-1') {
      picIndex = 1;
    } else {
      picIndex = 2;
    }

    var clickedPic = randomPics[picIndex];
    clickedPic.markClick();

    select3PicsAndRender();

  } else {

    savePicDataToLocalStorage();
    createResultChart();

  }
}


function savePicDataToLocalStorage() {
  var jsonData = JSON.stringify(picStorage);
  localStorage.setItem(PIC_DATA, jsonData);
}
/*
--------------------------------CHART-------------------------------------------
 */


function createResultChart() {
  var nameArray = [];
  var clickArray = [];
  var timesShownArray = [];

  for (var i = 0; i < picStorage.length; i++) {
    nameArray.push(picStorage[i].name);
    clickArray.push(picStorage[i].timesClicked);
    timesShownArray.push(picStorage[i].timesShown);
  }


  // vinicio - I want to draw 2d graphics into this canvas
  var context = document.getElementById('chart').getContext('2d');
  var picChart = new Chart(context, {
    type: 'bar',
    data: {
      labels: nameArray,
      datasets: [
        {
          label: 'Product votes',
          data: clickArray,
          backgroundColor: 'rgb(255,99,132)',
          borderColor: 'rgb(255,99,132)',
        },
        {
          label: 'Times Shown',
          data: timesShownArray,
          backgroundColor: 'rgb(255, 190, 204)',
          borderColor: 'rgb(255,99,132)',
        }
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            }
          },
        ],
      }
    },
  });
}

