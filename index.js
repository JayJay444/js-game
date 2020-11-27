document.getElementById("wanderer").style.top = "360px";
document.getElementById("wanderer").style.left = "360px";
document.getElementById("board").style.top = "0px";
document.getElementById("board").style.left = "0px";

let ifGuidePresent = true;
let ifBagpackPresent = true;

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
      createObject("cucumber5");
      break;
    case "r":
      createObject("wood-oak-sharp");
      break;
    case "t":
      createObject("wood-birch-sharp");
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

function createObject(name) {
  let positionVer = document.getElementById("wanderer").style.top;
  let positionHor = document.getElementById("wanderer").style.left;
  let object = document.createElement("img");
  object.src = "images/" + name + ".ico";
  object.classList.add("object");
  object.style.top = positionVer;
  object.style.left = positionHor;
  object.addEventListener("click", function() {
    this.remove();
  });
  document.getElementById("board").appendChild(object);
}

function handleRemoveObject() {
  let item = document.getElementById("wanderer");
  let board = document.getElementById("board");
  let itemBeingRemoved = document.elementFromPoint(item.offsetLeft + board.offsetLeft + 201, item.offsetTop + board.offsetTop + 81);
  if (itemBeingRemoved.classList == "object") {
    itemBeingRemoved.remove();
  }
}

function handleInspectObject() {
  let item = document.getElementById("wanderer");
  let board = document.getElementById("board");
  let itemBeingInspected = document.elementFromPoint(item.offsetLeft + board.offsetLeft + 201, item.offsetTop + board.offsetTop + 81);
  if (itemBeingInspected.classList == "object") {
    // console log object name
    // console.log(itemBeingInspected.src.slice(45, -4));
    let info = document.createElement("div");
    info.classList.add("info");
    info.id = "tempId";
    info.innerHTML = itemBeingInspected.src.slice(45, -4);
    info.style.top = (item.offsetTop - 40) + "px";
    info.style.left = (item.offsetLeft) + "px";
    document.getElementById("board").appendChild(info);
    setTimeout(removeInfo, 2000);
  }

  function removeInfo() {
    document.getElementById("tempId").remove();
  }
}

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
