console.log("Tic Tac Toe");
let turnMusic = new Audio("correct-2-46134.mp3");
let winMusic = new Audio("song.mp3");
let turn = "X";
let isgameover = false;

let changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

let checkWin = () => {
    let boxtext = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.whichPlayerTurn').innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.image').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "20vw";
            winMusic.play()
        

        }
    });
};


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener('click', () => {
    if (boxText.innerText === '' && !isgameover) {
      boxText.innerText = turn;
      turnMusic.play();
      turn = changeTurn();
      checkWin();
      if (!isgameover){
        document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
        } 
    }
  });
});


let resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X"; 
    isgameover = false;
    document.querySelector(".line").style.width = "0vw";
    document.querySelector(".whichPlayerTurn").innerText = "Turn for " + turn;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0px";
});
