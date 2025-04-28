let capture;


function setup() {
  createCanvas(windowWidth, windowHeight);
    capture = createCapture(VIDEO, (stream) => {
    console.log('攝影機已啟動');
  });
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
  capture.hide(); // 確保隱藏 DOM 元素

}

function draw() {
  background('#0096c7');
  // 移除 loadedmetadata 檢查，直接顯示影像

    image(capture, (windowWidth - capture.width) / 2, (windowHeight - capture.height) / 2);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
}

