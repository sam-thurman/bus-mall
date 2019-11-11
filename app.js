var picStorage = [];

function getRandomPicIndex() {
  return Math.floor(Math.random() * (picStorage.length))
};
function select3PicsAndRender() {
  var randomPics = [];

  while (randomPics.length < 3) {
    var nextRandomValue = getRandomPicIndex;

    if (!randomPics.includes(nextRandomValue)) {
      randomPics.push(nextRandomValue)
    }
  }
  var placeholder0 = document.getElementById('placeholder-0');
  var placeholder1 = document.getElementById('placeholder-1');
  var placeholder2 = document.getElementById('placeholder-2');

  picStorage[randomPics[0]].render(placeholder0);
  picStorage[randomPics[1]].render(placeholder1);
  picStorage[randomPics[2]].render(placeholder2);
};

var pic = function (name, picture) {
  this.name = name;
  this.picture = picture;

  this.render = function (domReference) {
    domReference.src = picture
  }
  picStorage.push(this)
}
var sweaterPic = new pic('sweater pic', './images/sweater-pic.jpg')
var placeholder0 = document.getElementById('placeholder-0');
sweaterPic.render(placeholder1);

select3PicsAndRender();