var picStorage = [];
var randomPics = [];
var clickCounter = 0;
var maxClicks = 25;

function getRandomPicIndex() {
  return Math.floor(Math.random() * (picStorage.length));
};

function select3PicsAndRender() {

  while (randomPics.length < 3) {
    var nextRandomValue = getRandomPicIndex;

    if (!randomPics.includes(nextRandomValue)) {
      randomPics.push(nextRandomValue);
    }
  }
  var placeholder0 = document.getElementById('placeholder-0');
  var placeholder1 = document.getElementById('placeholder-1');
  var placeholder2 = document.getElementById('placeholder-2');

  placeholder0.addEventListener('click', clickManager);
  placeholder1.addEventListener('click', clickManager);
  placeholder2.addEventListener('click', clickManager);

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

  picStorage[randomPics[0]].render(placeholder0);
  picStorage[randomPics[1]].render(placeholder1);
  picStorage[randomPics[2]].render(placeholder2);
};

var pic = function (name, picture) {
  this.name = name;
  this.picture = picture;
  this.timesClicked = 0;
  this.timeShown = 0;

  this.markClick = function () {
    this.timesClicked++
  }

  this.render = function (domReference) {
    domReference.src = picture
  }
  picStorage.push(this)
}
// var sweaterPic = new pic('sweater pic', './images/sweater-pic.jpg')
// var placeholder0 = document.getElementById('placeholder-0');
// sweaterPic.render(placeholder1);




