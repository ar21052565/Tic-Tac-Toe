let boxes = document.querySelectorAll(".btn1")
let reset = document.querySelector("#restbtn")
let newgame = document.querySelector("#btnNew")
let Winner = document.createElement("h1");
let turn0 = true;

let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]


// for reset game
const resetgame = () =>{
    turn0 = true;
    enableboxes();
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        winner()
    })
});

// function to diable boxes
const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// functionm to enable boxes
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        Winner.classList.remove("forwin"); 
        Winner.innerText = "";
    }
};

const showWinner = (winner) => {
    Winner.innerText = `${winner} is winner`;
    reset.before(Winner);
    Winner.classList.add("forwin");
    disabledboxes();
}
const winner = () => {
    for (let pattern of win) {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            }
        }
    }
};
reset.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);