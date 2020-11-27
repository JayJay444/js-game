document.getElementById("wanderer").style.top = "0vw";
document.getElementById("wanderer").style.left = "0vw";
let ifGuidePresent = true;

// document.addEventListener("click", function(event) {
//   console.log(event);
// });
// console.log(document.elementFromPoint(300, 300));
document.addEventListener("keydown", function(event) {
  switch (event.key) {
    case "ArrowUp":
      let previousPositionUp = document.getElementById("wanderer").style.top;
      let newPositionUp = (parseFloat(previousPositionUp.slice(0, -2)) - 3.5) + "vw";
      if ((parseFloat(previousPositionUp.slice(0, -2)) - 3.5) < 0) {
        break;
      }
      document.getElementById("wanderer").style.top = newPositionUp;
      break;
    case "ArrowDown":
      let previousPositionDown = document.getElementById("wanderer").style.top;
      let newPositionDown = (parseFloat(previousPositionDown.slice(0, -2)) + 3.5) + "vw";
      if ((parseFloat(previousPositionDown.slice(0, -2)) + 3.5) > 66.5) {
        break;
      }
      document.getElementById("wanderer").style.top = newPositionDown;
      break;
    case "ArrowRight":
      let previousPositionRight = document.getElementById("wanderer").style.left;
      let newPositionRight = (parseFloat(previousPositionRight.slice(0, -2)) + 3.5) + "vw";
      if ((parseFloat(previousPositionRight.slice(0, -2)) + 3.5) > 66.5) {
        break;
      }
      document.getElementById("wanderer").style.left = newPositionRight;
      break;
    case "ArrowLeft":
      let previousPositionLeft = document.getElementById("wanderer").style.left;
      let newPositionLeft = (parseFloat(previousPositionLeft.slice(0, -2)) - 3.5) + "vw";
      if ((parseFloat(previousPositionLeft.slice(0, -2)) - 3.5) < 0) {
        break;
      }
      document.getElementById("wanderer").style.left = newPositionLeft;
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
    case "v":
      handleRemoveObject();
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

function handleGuideBtn() {
  if (ifGuidePresent) {
    document.getElementById("guide-container").style.opacity = "0";
    ifGuidePresent = false;
  } else {
    document.getElementById("guide-container").style.opacity = "1";
    ifGuidePresent = true;
  }
}

function handleRemoveObject(){
  let item = document.getElementById("wanderer");
  let board = document.getElementById("board");
  let itemBeingRemoved = document.elementFromPoint(item.offsetLeft + board.offsetLeft + 1, item.offsetTop + board.offsetTop + 1);
  if(itemBeingRemoved.classList == "object"){
    itemBeingRemoved.remove();
  }
}
