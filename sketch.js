let capture;


function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
  capture.hide(); // 確保隱藏 DOM 元素

}

function draw() {
  background('#0096c7');
  if (capture.loadedmetadata) { // 確保攝影機已準備好
    image(capture, (windowWidth - capture.width) / 2, (windowHeight - capture.height) / 2);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
}

