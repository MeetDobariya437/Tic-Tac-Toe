let boxes = document.querySelectorAll(".box");
let resetgamebutton = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msgcontainer");
let winning_msg = document.querySelector(".winning-msg");
let newgame = document.querySelector(".new-game");

let turn0 = true ;
let count = 0;
const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = ()=> {
    turn0 = true ;
    enableboxes();
    
    winning_msg.classList.add("hide");
    newgame.classList.add("hide");

};
boxes.forEach ((box) => 
{
    box.addEventListener("click" , () => 
    {
        
        if(turn0 === true){
            box.innerHTML="O";
            turn0 = false;
        }
        else{
            box.innerHTML="X";
            turn0 = true;
        }
        box.disabled = true ;
        chackwinner();
        count++;
        let iswinnner = chackwinner();
        if(count === 9 && ! iswinnner){
            console.log("draw");
            winning_msg.innerText = `Match tied`;
            winning_msg.classList.remove("hide");
            newgame.classList.remove("hide");
        }
    });
}
);


const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled=true ;
    }
}


const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
  }
}
const showwinner = (winner) => {
    winning_msg.innerText = `winner is ${winner}`;
    winning_msg.classList.remove("hide");
    newgame.classList.remove("hide");
   
}
const chackwinner = () => {
    for (let pattern of winpatterns)  {
        
           let pos1val = boxes[pattern[0]].innerText;
           let pos2val = boxes[pattern[1]].innerText;
           let pos3val = boxes[pattern[2]].innerText;
      if(pos1val != " " && pos2val != "" && pos3val != " "){
        if(pos1val==pos2val && pos2val==pos3val){
   showwinner(pos1val);
   disableboxes();
      }
    }
     
    }

};
newgame.addEventListener("click",resetGame);
resetgamebutton.addEventListener("click",resetGame);
