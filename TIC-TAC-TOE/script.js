const symbol = document.querySelectorAll(".square");
const board = document.querySelector("#board");

const topLeft = document.querySelector("#top-left");
const topCenter = document.querySelector("#top-center");
const topRight = document.querySelector("#top-right");

const middleLeft = document.querySelector("#middle-left");
const middleCenter = document.querySelector("#middle-center");
const middleRight = document.querySelector("#middle-right");

const bottomLeft = document.querySelector("#bottom-left");
const bottomCenter = document.querySelector("#bottom-center");
const bottomRight = document.querySelector("#bottom-right");

function init() {
  const circle = "O";
  const cross = "X";

  function addSymbol(action) {
    // Top
    if (action === "top-left") {
      topLeft.innerText = cross;
    } else if (action === "top-center") {
      topCenter.innerText = circle;
    } else if (action === "top-right") {
      topRight.innerText = circle;
    }
    // Middle
    else if (action === "middle-left") {
      middleLeft.innerText = circle;
    } else if (action === "middle-center") {
      middleCenter.innerText = circle;
    } else if (action === "middle-right") {
      middleRight.innerText = circle;
    }
    // Bottom
    else if (action === "bottom-left") {
      bottomLeft.innerText = circle;
    } else if (action === "bottom-center") {
      bottomCenter.innerText = circle;
    } else if (action === "bottom-right") {
      bottomRight.innerText = circle;
    } else {
      //do nothing

      return;
    }
  }

  board.addEventListener("mousedown", function handleMousePress(event) {
    const action = event.target;
    const actionClass = event.target.className;
    const actionID = event.target.id;

    const newAction = event;

    if (actionClass !== "square" || action.innerText !== "") {
      // do nothing

      return;
    } else {
      console.log(newAction.buttons);
      addSymbol(actionID);
    }
  });
}

init();
