let capture;
let isCapturing = true; // 用於追蹤攝影機狀態
let toggleButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
  capture.hide(); // 確保隱藏 DOM 元素
  toggleButton = createButton('暫停攝影機');
  toggleButton.position(10, 10);
  toggleButton.mousePressed(toggleCapture);
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

function toggleCapture() {
  if (isCapturing) {
    capture.stop(); // 停止攝影機
    toggleButton.html('啟動攝影機');
  } else {
    capture.start(); // 啟動攝影機
    toggleButton.html('暫停攝影機');
  }
  isCapturing = !isCapturing;
}
