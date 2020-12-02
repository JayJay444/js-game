// Set starting position of the Wanderer
if (window.innerWidth < 1200) {
  let windowCenter = window.innerWidth / 2;
  let gameBoardOffset = document.getElementById("container-board").offsetLeft
  let startingPosition = Math.floor((windowCenter - gameBoardOffset) / 40) * 40 + "px";
  document.getElementById("wanderer").style.top = startingPosition;
  document.getElementById("wanderer").style.left = startingPosition;
} else {
  let gameBoardOffsetLeft = document.getElementById("container-board").offsetLeft;
  let gameBoardOffsetTop = document.getElementById("container-board").offsetTop;

  let windowCenterLeft = window.innerWidth / 2;
  let startingPositionLeft = Math.floor((windowCenterLeft - gameBoardOffsetLeft) / 40) * 40 + "px";
  let windowCenterTop = window.innerHeight / 2;
  let startingPositionTop = Math.floor((windowCenterTop - gameBoardOffsetTop) / 40) * 40 + "px";

  document.getElementById("wanderer").style.top = startingPositionTop;
  document.getElementById("wanderer").style.left = startingPositionLeft;
}

// Set starting position of the board
document.getElementById("board").style.top = "0px";
document.getElementById("board").style.left = "0px";

// Set visibility of guide and bagpack
let ifGuidePresent = true;
let ifBagpackPresent = true;

//Add control using keys
document.addEventListener("keydown", function(event) {
  switch (event.key) {
    case "ArrowUp":
      let previousPositionUp = document.getElementById("wanderer").style.top;
      let newPositionUp = (parseFloat(previousPositionUp.slice(0, -2)) - 40) + "px";
      if ((parseFloat(previousPositionUp.slice(0, -2)) - 40) < 0) {
        break;
      }
      document.getElementById("wanderer").style.top = newPositionUp;
      let previousPositionOfBoardUp = document.getElementById("board").style.top;
      let newPositionOfBoardUp = (parseFloat(previousPositionOfBoardUp.slice(0, -2)) + 40) + "px";
      document.getElementById("board").style.top = newPositionOfBoardUp;
      break;
    case "ArrowDown":
      let previousPositionDown = document.getElementById("wanderer").style.top;
      let newPositionDown = (parseFloat(previousPositionDown.slice(0, -2)) + 40) + "px";
      if ((parseFloat(previousPositionDown.slice(0, -2)) + 40) > 3960) {
        break;
      }
      document.getElementById("wanderer").style.top = newPositionDown;
      let previousPositionOfBoardDown = document.getElementById("board").style.top;
      let newPositionOfBoardDown = (parseFloat(previousPositionOfBoardDown.slice(0, -2)) - 40) + "px";
      document.getElementById("board").style.top = newPositionOfBoardDown;
      break;
    case "ArrowRight":
      let previousPositionRight = document.getElementById("wanderer").style.left;
      let newPositionRight = (parseFloat(previousPositionRight.slice(0, -2)) + 40) + "px";
      if ((parseFloat(previousPositionRight.slice(0, -2)) + 40) > 3960) {
        break;
      }
      document.getElementById("wanderer").style.left = newPositionRight;
      let previousPositionOfBoardRight = document.getElementById("board").style.left;
      let newPositionOfBoardRight = (parseFloat(previousPositionOfBoardRight.slice(0, -2)) - 40) + "px";
      document.getElementById("board").style.left = newPositionOfBoardRight;
      break;
    case "ArrowLeft":
      let previousPositionLeft = document.getElementById("wanderer").style.left;
      let newPositionLeft = (parseFloat(previousPositionLeft.slice(0, -2)) - 40) + "px";
      if ((parseFloat(previousPositionLeft.slice(0, -2)) - 40) < 0) {
        break;
      }
      document.getElementById("wanderer").style.left = newPositionLeft;
      let previousPositionOfBoardLeft = document.getElementById("board").style.left;
      let newPositionOfBoardLeft = (parseFloat(previousPositionOfBoardLeft.slice(0, -2)) + 40) + "px";
      document.getElementById("board").style.left = newPositionOfBoardLeft;
      break;
    case "q":
      createObject("strawberry");
      break;
    case "w":
      createObject("carrot");
      break;
    case "e":
      createObject("cucumber");
      break;
    case "r":
      createObject("wood-oak");
      break;
    case "t":
      createObject("wood-birch");
      break;
    case "y":
      createObject("stone-tile");
      break;
    case "u":
      createObject("water");
      break;
    case "i":
      createObject("sheep");
      break;
    case "o":
      createObject("pig");
      break;
    case "v":
      handleRemoveObject();
      break;
    case "b":
      handleInspectObject();
      break;
  }
});

// Creating objects on the board
function createObject(name) {
  let positionVer = document.getElementById("wanderer").style.top;
  let positionHor = document.getElementById("wanderer").style.left;
  let object = document.createElement("img");
  object.src = "images/" + name + ".ico";
  object.classList.add("object");
  object.style.top = positionVer;
  object.style.left = positionHor;
  object.addEventListener("click", function() { //Removing objects via mouse click
    this.remove();
  });
  document.getElementById("board").appendChild(object);
}

//Removing objects from the board using "v" command
function handleRemoveObject() {
  let item = document.getElementById("wanderer");
  let board = document.getElementById("board");
  let containerBoard = document.getElementById("container-board");
  let leftPosition = item.offsetLeft + board.offsetLeft + containerBoard.offsetLeft + 20;
  let topPosition = item.offsetTop + board.offsetTop + containerBoard.offsetTop + 20;
  let itemBeingRemoved = document.elementFromPoint(leftPosition, topPosition);
  if (itemBeingRemoved.classList == "object") {
    itemBeingRemoved.remove();
  }
}

//Inspecting objects using "b" command
function handleInspectObject() {
  let item = document.getElementById("wanderer");
  let board = document.getElementById("board");
  let containerBoard = document.getElementById("container-board");
  let leftPosition = item.offsetLeft + board.offsetLeft + containerBoard.offsetLeft + 20;
  let topPosition = item.offsetTop + board.offsetTop + containerBoard.offsetTop + 20;
  let itemBeingInspected = document.elementFromPoint(leftPosition, topPosition);
  if (itemBeingInspected.classList == "object") {
    let info = document.createElement("div");
    info.classList.add("info");
    info.id = "tempId";
    info.innerHTML = itemBeingInspected.src.slice(43, -4);
    info.style.top = (item.offsetTop - 40) + "px";
    info.style.left = (item.offsetLeft) + "px";
    document.getElementById("board").appendChild(info);
    setTimeout(removeInfo, 2000);
  }

  function removeInfo() {
    document.getElementById("tempId").remove();
  }
}

// Handling guide and bagpack buttons
function handleGuideBtn() {
  if (ifGuidePresent) {
    document.getElementById("guide-container").style.opacity = "0";
    ifGuidePresent = false;
  } else {
    document.getElementById("guide-container").style.opacity = "1";
    ifGuidePresent = true;
  }
}

function handleBagpackBtn() {
  if (ifBagpackPresent) {
    document.getElementById("bagpack-container").style.opacity = "0";
    ifBagpackPresent = false;
  } else {
    document.getElementById("bagpack-container").style.opacity = "1";
    ifBagpackPresent = true;
  }
}
