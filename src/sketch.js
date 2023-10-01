let dialog;
let stageList = ["setup", "main", "end"];
let stage = stageList[0];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(187, 201, 201);
  switch (stage) {
    case "setup":
      setupStage();
      break;
    case "main":
      mainStage();
      break;
    case "end":
      endStage();
      break;
  }

}

// setup options, import images, canvas size, etc
function setupStage() {
  dialog = rect(windowWidth / 2, windowHeight / 2, windowWidth * .9, windowHeight * .9, 20);
}

// main editor
function mainStage() {
  dialog = rect(windowWidth / 2, windowHeight / 2, windowWidth * .9, windowHeight * .9, 20);
}

// save dialog, etc
function endStage() {
  dialog = rect(windowWidth / 2, windowHeight / 2, windowWidth * .9, windowHeight * .9, 20);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}