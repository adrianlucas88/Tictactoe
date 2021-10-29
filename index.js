let tictacBtn = document.getElementById("tictac");
let quizBtn = document.getElementById("quiz");
let projectContainer = document.getElementById("project_container");
let xoxoWindow = document.getElementById("tictactoe_window");
let tictactoeContainer = document.getElementById("tictactoeContainer");
let tictacRestart = document.querySelector(".tictactoe_restart");
//////////////////////Tic Tac Toe Game///////////////////////////////////

function closeProjects() {
  projectContainer.style.display = "none";
  tictactoeContainer.style.display = "none";
  quizWindow.style.visibility = "hidden";
}

///////
function tictac() {
  projectContainer.style.display = "flex";
  xoxoWindow.style.visibility = "visible";
  tictactoeContainer.style.display = "grid";
  tictacRestart.style.visibility = "visible";
  let player = "X";
  const gameMessage = document.querySelector(".game_message");
  let boxNo, box, boxId;
  //Give click and functions attribute to the boxes
  function clickOn() {
    document
      .querySelectorAll(".box")
      .forEach((box) => box.addEventListener("click", boxClicked));
  }
  tictacRestart.addEventListener("click", restartBut);
  clickOn();
  //Set array with winning rules
  const winGames = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  //Setup arrays to save each player progress
  let playedBoxX = [];
  let playedBox0 = [];
  function restartBut() {
    gameMessage.innerHTML = "";
    player = "X";
    gameMessage.innerHTML = `It's ${player} turn`;
    box = document.querySelectorAll(".box");
    box.forEach((box) => (box.innerHTML = ""));
    clickOn();
    playedBoxX = [];
    playedBox0 = [];
  }
  //Actions when the box gets clicked
  function boxClicked(e) {
    //Find which box is clicked
    boxNo = e.target;
    boxNo.innerText = player;
    //Get the Id of the box
    boxNo.removeEventListener("click", boxClicked);
    boxId = boxNo.getAttribute("id");
    //Find which player played and fill the array
    player === "X"
      ? playedBoxX.push(parseInt(boxId))
      : playedBox0.push(parseInt(boxId));
    gameMessage.innerHTML = `It's ${player} turn`;
    changePlayer();
    gameCheck();
  }

  function gameCheck() {
    //Break down the big array in multiple arrays and select the "true" ones
    winGames.some((elem) => {
      //Check the elements in each array if they match the elements in the other array
      if (elem.every((el) => playedBoxX.includes(el))) {
        gameMessage.innerHTML = " X Won";
        document
          .querySelectorAll(".box")
          .forEach((box) => box.removeEventListener("click", boxClicked));
      }
      if (elem.every((el) => playedBox0.includes(el))) {
        gameMessage.innerHTML = " 0 Won";
        document
          .querySelectorAll(".box")
          .forEach((box) => box.removeEventListener("click", boxClicked));
      }
      if (playedBoxX.length === 5 && gameMessage.innerHTML != " X Won") {
        console.log("draw");
        gameMessage.innerHTML = "It's a draw";
      }
    });
  }
  //console.log(playedBoxX);
  // console.log(playedBox0);

  function changePlayer() {
    player = player === "X" ? "0" : "X";
    gameMessage.innerHTML = `It's ${player} turn`;
  }
}
